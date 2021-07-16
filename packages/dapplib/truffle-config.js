require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind hub include arch swift tent'; 
let testAccounts = [
"0x876d75481d10530ce791629de1043fe7c617ac82e1fdcca6ae214fd01f70dd9e",
"0x30236de805e452d75b60702d1646e9308d90f2f41a008700c736e1d5136a97dc",
"0x09e663ab01cf61b75ed945e487e32f2a09df5c65027094495f108c751834eb60",
"0xb69128a6d0287229b4886aea700f0d9717a664129e6ff0cd0ca83148f007fcda",
"0x9c0b0139d1b066f7b4017cdd7c4a483c204c3de0f11de267e03010e75d2c83fd",
"0xf61b5d099ce7ea41400043fe08ccd0cafa017c97dbda031a7e72b31540d7747c",
"0x6881da5355ad1f0aee7d6708826d44653ee5031e8912eb86add308cb55692049",
"0x107c16bb30b18dea15839896c3bd6577759f78acacc8843058404d573e07f036",
"0xf1f582c60ff6dd04cae552df53a67f8b0b7c1ef891ab5325433e6ee1a3bbc33f",
"0x61e494ab30bf8b3a52ede509ebf4b83a36dc77fd0082634665bd8a6172682dd5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

