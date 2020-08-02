const RSA = require('../src/RSA');

var key = new RSA.RSAKeyPair(
  // Public exponent extracted from private_key.pem using
  // openssl rsa -inform PEM -text -noout < private_key.pem
  // Or extracted from public key PEM file using
  // openssl rsa -pubin -inform PEM -text -noout < public_key.pem
  "10001",

  // Dummy decryption exponent -- actual value only kept on server.
  "0",

  // Modulus extracted from private key PEM file using
  // openssl rsa -inform PEM -modulus -noout < private_key.pem
  // Or extracted from public key PEM file using
  // openssl rsa -pubin -inform PEM -modulus -noout < public_key.pem
  "b1ae618873ee7ff972e9be6dba93f24f0ef38ac50c2265f7274696b37e6159d2c81a798552360e941be4f9e22522b5421bf753f1ab22626ddee300ee675553e57ad5ab86f77a75c28babdb3e263aad1245e4a2cf58789406083d56d3a4bd6d04e17a77f1919a2b9e1176a0b21931bc82a132ef0af661076d92cef6b13313886f"
);

function encryptString(string) {

  var cipherText = RSA.encryptedString(
    key,
    string
  );

  return cipherText
}

test('encryptString', () => {
  expect(
    encryptString("password")
  ).toBe(
    "1afa376394f638f4a2828c31abadf05ba84b8a7698a1f8c7374c172912df10f4b821dfca1d9830f53e87d8311b4af6f8a07c3e46721eb1517f100ce8f7fac62e6a2d32a210929efb01275884ef5a2284f269eeb9380c15bcdfc52a49ea04429849059166394ee1f220d8e92a64583646d0499fcd0b345e474c1f4d6074d4bcb8"
  );
});
