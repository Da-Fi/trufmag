import moment from 'moment';
import Application from 'polkastarter-js/models';

/* Test Version */
let app = new Application({ test: true });

/* Create Contract */
let swapContract = app.getFixedSwapContract({ tokenAddress: '0xeaad65885fea47a3b1258935f4ce83aab06fdd3a', decimals: 18 });

/* Deploy */
await swapContract.deploy({
    tradeValue: 0.15,
    tokensForSale: 100,
    startDate: moment().add(6, 'hours'),
    endDate: moment().add(16, 'hours')
});