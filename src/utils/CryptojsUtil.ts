// Include CryptoJS library (make sure to include it in your project)
// You can download it from https://cryptojs.gitbook.io/docs/

let CryptoJSUtil = require('crypto-js');

// Get the SALT from the system environment variables
const SALT = process.env.SALT || 'defaultSalt';


// Encryption function
export function encrypt(text: string) {
    const ciphertext = CryptoJSUtil.AES.encrypt(text, SALT).toString();
    return ciphertext;
}

// Decryption function
export function decrypt(ciphertext: string) {
    const bytes = CryptoJSUtil.AES.decrypt(ciphertext, SALT);
    const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
    return originalText;
}