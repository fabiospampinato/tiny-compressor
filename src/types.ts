
/* MAIN */

type Algorithm = 'gzip' | 'deflate' | 'deflate-raw';

type Stream = {
  readable: ReadableStream,
  writable: WritableStream
};

type StreamConstructor = {
  new ( algorithm: Algorithm ): Stream
};

/* EXPORT */

export type {Algorithm, Stream, StreamConstructor};
