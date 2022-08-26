require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember social install creek fringe tennis'; 
let testAccounts = [
"0xfb207a56feb1d3ca10302fa78c8f9a400b35a293dacfae98318fe675cb88305f",
"0x977f082758ace20c9648c4fb8b2e88bdb9ba56ad1f86a4d95cb57fd444ac71d4",
"0x471ccaea43c8c6ae4334649eac1c731e38023663a5c26ed611e1c2092e9e8b55",
"0x4eb7b061dc24851d777aca196915f1d5ada9ab84fde314b3be05ea74ab18f893",
"0x5287ecb06a2e703e8168f59473baaa696101efd488c137b06e8ff5896fda16bf",
"0x43ef694c428f2adf5cccee85d19dee41ec5d3c5ba68912d770710005fab5ec67",
"0xfa48883998c4c905df3b932657f4d221e0b08dd784cf3d48059b129253d2e54a",
"0x30bc86fae2dc5a55d48e886e88b49be459aa0e2dda82abacbce285d24a7552fd",
"0x513fcf2f4d55d4c4e19bdeb88b190d425fb8151a2d4b466ebc38fad80da2109e",
"0xa2d4824792d59720cb80e380e5de09ce4d55a531a72771ac110b8455a04492a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

