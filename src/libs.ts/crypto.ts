// import crypto from 'crypto';
import CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes';
import Base64 from 'crypto-js/enc-base64';
import sha256 from 'crypto-js/sha256';

const secretKey = 'secret';

export function cryptoSha256(message: string) {
  return Base64.stringify(sha256(message));
}

export const cryptoEncrypt = (target: string) => {
  return AES.encrypt(target, secretKey).toString();
};

export const cryptoDecrypt = (target: string) => {
  return AES.decrypt(target, secretKey).toString(CryptoJS.enc.Utf8);
};

export const cryptoMD5 = (target: string) => {
  return CryptoJS.MD5(target).toString();
  // return crypto
  //   .createHash('md5')
  //   .update(target)
  //   .digest('hex');
}