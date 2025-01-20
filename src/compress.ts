
/* IMPORT */

import {DEFAULT_ALGORITHM} from './constants';
import {streamProcess} from './utils';
import type {Algorithm, StreamConstructor} from './types';

/* MAIN */

const compress = ( input: ArrayBuffer | Uint8Array, algorithm: Algorithm = DEFAULT_ALGORITHM ): Promise<Uint8Array> => {

  const CompressionStream: StreamConstructor = globalThis.CompressionStream;
  const buffer = streamProcess ( CompressionStream, input, algorithm );

  return buffer;

};

/* EXPORT */

export default compress;
