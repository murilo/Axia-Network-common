"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = void 0;

var _networks = require("../networks.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const defaults = {
  allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
  // publicKey has prefix + 2 checksum bytes, short only prefix + 1 checksum byte
  allowedEncodedLengths: [3, 4, 6, 10, 35, 36, 37, 38],
  allowedPrefix: _networks.availableNetworks.map(({
    prefix
  }) => prefix),
  prefix: 42
};
exports.defaults = defaults;