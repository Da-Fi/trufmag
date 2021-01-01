const DAFI = artifacts.require('DAFI_ERC20_UP');

const { deployProxy } = require('@openzeppelin/truffle-upgrades');



module.exports = async function (deployer, accounts) {

    await deployProxy(DAFI, ['Da-Fi Token', 'Da-Fi', '50000000000000000000000'], { deployer, initializer: 'initialize' });
}; 