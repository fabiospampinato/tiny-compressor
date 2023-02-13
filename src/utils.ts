
/* IMPORT */

import concat from 'uint8-concat';
import type {Algorithm, Stream, StreamConstructor} from './types';

/* MAIN */

const streamFrom = ( Stream: StreamConstructor, algorithm: Algorithm, input: ArrayBuffer | Uint8Array ): Stream => {

  const stream = new Stream ( algorithm );

  streamWrite ( stream, input );

  return stream;

};

const streamProcess = async ( Stream: StreamConstructor, input: ArrayBuffer | Uint8Array, algorithm: Algorithm ): Promise<Uint8Array> => {

  const stream = streamFrom ( Stream, algorithm, input );
  const chunks = await streamRead ( stream );
  const buffer = concat ( chunks );

  return buffer;

};

const streamRead = async ( stream: Stream ): Promise<Uint8Array[]> => {

  const reader = stream.readable.getReader ();
  const chunks: Uint8Array[] = [];

  while ( true ) {

   const result = await reader.read ();

   if ( result.done ) break;

   chunks.push ( result.value );

  }

  return chunks;

};

const streamWrite = ( stream: Stream, input: ArrayBuffer | Uint8Array ): Stream => {

  const writer = stream.writable.getWriter ();

  writer.write ( input );
  writer.close ();

  return stream;

};

/* EXPORT */

export {streamFrom, streamProcess, streamRead, streamWrite};
