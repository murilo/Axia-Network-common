// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import nacl from 'tweetnacl';
/**
 * @name naclDecrypt
 * @summary Decrypts a message using the supplied secretKey and nonce
 * @description
 * Returns an decrypted message, using the `secret` and `nonce`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclDecrypt } from '@axia-js/util-crypto';
 *
 * naclDecrypt([...], [...], [...]); // => [...]
 * ```
 */

export function naclDecrypt(encrypted, nonce, secret) {
  return nacl.secretbox.open(encrypted, nonce, secret) || null;
}