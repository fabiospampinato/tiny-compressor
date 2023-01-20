
/* IMPORT */

import {describe} from 'fava';
import Compressor from '../dist/index.js';

/* MAIN */

describe ( 'Tiny Compressor', it => {

  it ( 'can compress and decompress correctly', async t => {

    for ( const algorithm of ['gzip', 'deflate'] ) {

      const encode = str => new TextEncoder ().encode ( str );
      const decode = buffer => new TextDecoder ().decode ( buffer );

      const input = String ( Math.random () );
      const compressed = await Compressor.compress ( encode ( input ), algorithm );
      const decompressed = decode ( await Compressor.decompress ( compressed, algorithm ) );

      t.is ( input, decompressed );

    }

  });

});
