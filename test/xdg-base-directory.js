'use strict';

require('mocha');
const assert = require('assert').strict;
const xdg = require('..');

describe('xdg-base-directory', () => {
  it('should', () => {
    console.log(xdg());
  });
});
