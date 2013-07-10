simple-stream-helpers
=====================

Helpers that aid in unit tests for simple-stream based projects.

## Sources

### binarySource(buffer, [chunkSize=42]) -> stream&lt;binary>

Create a stream from a single buffer broken up into chunks.

### arraySource(array) -> stream

Create a stream from an array of items.

## Filters

### slow(stream, [ms=1]) -> stream

Simulate latency into a stream.  Can be used right after sources to simulate slow sources and right before sinks to simulate slow sinks.

## Sinks

### each(stream, [onItem]) -> continuable

Consume a stream as fast as possible calling onItem for each value in the stream (not including undefined at the end).

This can consume large sync streams without blowing the stack.

The continuable resolves when the stream is done or has an error.

### consume(stream) -> continuable&lt;items>

Consume a stream and collect all the events.

## License

The MIT License (MIT)

Copyright (c) 2013 Tim Caswell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

