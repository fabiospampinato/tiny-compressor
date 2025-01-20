
/* IMPORT */

import {DEFAULT_ALGORITHM} from './constants';
import {streamProcess} from './utils';
import type {Algorithm, StreamConstructor} from './types';

/* MAIN */

const decompress = ( input: ArrayBuffer | Uint8Array, algorithm: Algorithm = DEFAULT_ALGORITHM ): Promise<Uint8Array> => {

  const DecompressionStream: StreamConstructor = globalThis.DecompressionStream;
  const buffer = streamProcess ( DecompressionStream, input, algorithm );

  return buffer;

};

/* EXPORT */

export default decompress;
