import * as CryptoJS from 'crypto-js';

export class CryptUtils {

  static toSha256Hash(value: string, salt: string) {
    return CryptoJS.SHA256(CryptoJS.enc.Hex.parse(value + salt)).toString(CryptoJS.enc.Hex)
  }

}
