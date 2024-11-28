const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct object when success is true', () => new Promise/** @type {<TResult = any>(resolve: (value?: TResult | PromiseLike<TResult>) => void, reject: (reason?: any) => void) => void} */((done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch((err) => {
      done(err);
    });
  }));

  it('should return a resolved promise with undefined when success is false', () => new Promise((done) => {
    getPaymentTokenFromAPI(false).then((response) => {
      expect(response).to.be.undefined;
      done();
    }).catch((err) => {
      done(err);
    });
  }));
});
