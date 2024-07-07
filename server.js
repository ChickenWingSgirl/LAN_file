const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const os = require('os');

const app = express();
const port = 3000;
const filesDirectory = path.join(__dirname, 'files');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, filesDirectory);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

app.use(express.static('public'));
app.use('/files', express.static(filesDirectory)); // Serve files

app.get('/files', (req, res) => {
    fs.readdir(filesDirectory, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan files directory');
        }
        res.json(files);
    });
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ success: true });
});

app.delete('/delete', (req, res) => {
    const fileName = req.query.file;
    const filePath = path.join(filesDirectory, fileName);

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.json({ success: false, message: 'File delete failed' });
        }
        res.json({ success: true });
    });
});

function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

app.listen(port, () => {
    const localIpAddress = getLocalIpAddress();
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Server is accessible at http://${localIpAddress}:${port}`);
});
