import CryptoJS from "crypto-js";

function _arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function base64toHEX(base64) {
  var raw = atob(base64);
  var HEX = '';
  for (let i = 0; i < raw.length; i++) {
    var _hex = raw.charCodeAt(i).toString(16)
    HEX += (_hex.length === 2 ? _hex : '0' + _hex);
  }
  return HEX.toUpperCase();
}

export function cifrarAES(data, key) {
  try {
    let buf = new Uint8Array(16);
    window.crypto.getRandomValues(buf); //Obtenemos 16 bytes
    let buffer_b64 = _arrayBufferToBase64(buf);
    let iv = CryptoJS.enc.Hex.parse(base64toHEX(buffer_b64));
    let keyHex = CryptoJS.enc.Hex.parse(key);

    let cipherParams = {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    };

    let encrypted = CryptoJS.AES.encrypt(data, keyHex, cipherParams);

    let merge = encrypted.iv.clone();
    merge.concat(encrypted.ciphertext);
    merge = CryptoJS.enc.Base64.stringify(merge);

    return merge;
  } catch (error) {
    return 'Tu llave es incorrecta: ' + error;
  }
}