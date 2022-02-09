// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isNumber
 * @summary Tests for a JavaScript number.
 * @description
 * Checks to see if the input value is a valid number.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNumber } from '@axia-js/util';
 *
 * console.log('isNumber', isNumber(1234)); // => true
 * ```
 */
export function isNumber(value) {
  return typeof value === 'number';
}