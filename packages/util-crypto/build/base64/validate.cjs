"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64Validate = base64Validate;

var _util = require("@axia-js/util");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name base64Validate
 * @summary Validates a base64 value.
 * @description
 * Validates that the supplied value is valid base64
 */
function base64Validate(value) {
  (0, _util.assert)(value && typeof value === 'string', 'Expected non-null, non-empty base64 string input');
  (0, _util.assert)(/^(?:[A-Za-z0-9+/]{2}[A-Za-z0-9+/]{2})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value), 'Invalid base64 encoding');
  return true;
}