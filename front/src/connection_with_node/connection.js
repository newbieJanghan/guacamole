const crypto = require('crypto');

const CIPHER = "aes-256-cbc";
const SECRET_KEY = "MySuperSecretKeyForParamsToken12"

export const tokenObject = {
    connection: {
        type: "rdp",
        settings: {
            hostname: "", // ip 입력 필요!!
            username: "ubuntu",
            password: "ubuntu",
            "enable-drive": true,
            "create-drive-path": true,
            "security": "any",
            "ignore-cert": true,
            "enable-wallpaper": true,
        }
    }
}

export function encryptToken(value) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(CIPHER, Buffer.from(SECRET_KEY), iv);

    let encrypted = cipher.update(JSON.stringify(value), 'utf8', 'base64');
    encrypted += cipher.final('base64');

    const data = {
        iv: iv.toString('base64'),
        value: encrypted
    };

    const json = JSON.stringify(data);
    return Buffer.from(json).toString('base64');
}