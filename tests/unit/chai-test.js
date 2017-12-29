import { describe, it } from 'mocha';
import { expect } from 'chai';
import RSVP from 'rsvp';
import sinon from 'sinon';
// import td from 'testdouble';

describe('Chai.js', function() {
  it('works', function() {
    expect(true).to.be.true;
    expect(() => expect(true).to.be.false).to.throw();
  });

  it('works with chai-as-promised (resolved promise)', function() {
    return expect(timeout(10)).to.be.fulfilled;
  });

  it('works with chai-as-promised (rejected promise)', function() {
    return expect(RSVP.reject(new Error('foo'))).to.be.rejected;
  });

  it('works with sinon-chai', function() {
    let spy = sinon.spy();
    spy();
    expect(spy).to.have.been.called;
  });

  // DISABLED due to conflict with sinon-chai
  //
  // it('works with testdouble-chai', function() {
  //   let func = td.function();
  //   func();
  //   expect(func).to.have.been.called;
  // });
});

function timeout(ms) {
  return new RSVP.Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
