# Tiny Compressor

A tiny isomorphic compression library that leverages [`CompressionStream`](https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream) and [`DecompressionStream`](https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream).

This library exists because compressing and decompressing a `Uint8Array` with `CompressionStream` and `DecompressionStream` directly is _extremely_ inconvenient to write.

## Install

```sh
npm install --save tiny-compressor
```

## Usage

```ts
import Compressor from 'tiny-compressor';

const buffer = new Uint8Array ([ 1, 2, 3, 4, 5 ]);
const compressed = await Compressor.compress ( buffer, 'gzip' );
const decompressed = await Compressor.decompress ( compressed, 'gzip' );

console.log ( decompressed ); // Uint8Array [ 1, 2, 3, 4, 5 ]
```

## License

MIT © Fabio Spampinato
