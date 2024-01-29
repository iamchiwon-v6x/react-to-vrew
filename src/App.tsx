import {
  cryptoDecrypt,
  cryptoEncrypt,
  cryptoMD5,
  cryptoSha256,
} from './libs.ts/crypto';

export const App = () => {
  return (
    <div>
      <h4>env vars</h4>
      <ul>
        <li>{process.env.REACT_APP_PROJECT_TITLE}</li>
      </ul>

      <h4>crypto-js</h4>
      <ul>
        <li>SHA245: {cryptoSha256('hello world')}</li>
        <li>AES(enc): {cryptoEncrypt('hello world')}</li>
        <li>AES(dec): {cryptoDecrypt(cryptoEncrypt('hello world'))}</li>
        <li>MD5: {cryptoMD5('hello world')}</li>
      </ul>
    </div>
  );
};
