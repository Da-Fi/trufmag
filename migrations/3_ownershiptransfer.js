// migrations/4_transfer_ownership.js
const { admin } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer, network) {
    // Use address of your Gnosis Safe
    const gnosisSafe = '0xF9430B0316bA09C3794E7DEaCE08C00060F427C9';

    // Don't change ProxyAdmin ownership for our test network
    if (network !== 'test') {
        // The owner of the ProxyAdmin can upgrade our contracts
        await admin.transferProxyAdminOwnership(gnosisSafe);
    }
};