
/* IMPORT */

import compress from './compress';
import decompress from './decompress';
import type {Algorithm} from './types';

/* MAIN */

const Compressor = {
  compress,
  decompress
};

/* EXPORT */

export default Compressor;
export type {Algorithm};
