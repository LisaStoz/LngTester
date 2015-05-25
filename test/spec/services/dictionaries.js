'use strict';

describe('Service: dictionaries', function () {

  // load the service's module
  beforeEach(module('lngTesterApp'));

  // instantiate service
  var dictionaries;
  beforeEach(inject(function (_dictionaries_) {
    dictionaries = _dictionaries_;
  }));

  it('should do something', function () {
    expect(!!dictionaries).toBe(true);
  });

});
