const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// SSL証明書と秘密鍵の読み込み
const privateKey = fs.readFileSync('private.key', 'utf8');
const certificate = fs.readFileSync('certificate.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

app.use(express.static(path.join(__dirname, '/aframe/examples/image-tracking/nft')));
// app.use(express.static(path.join(__dirname, '/aframe/examples/image-tracking/nft-video')));
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`HTTPS server running at https://localhost:${port}`);
});
