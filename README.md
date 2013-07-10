simple-stream-helpers
=====================

Helpers that aid in unit tests for simple-stream based projects.

## Sources

### binarySource(buffer, [chunkSize=42]) -> stream&lt;binary>

Create a stream from a single buffer broken up into chunks.

### arraySource(array) -> stream

Create a stream from an array of items.

## Filters

### slow(stream, [ms=10]) -> stream

Simulate latency into a stream.  Can be used right after sources to simulate slow sources and right before sinks to simulate slow sinks.

## Sinks

### each(stream, [onItem]) -> continuable

Consume a stream as fast as possible calling onItem for each value in the stream (not including undefined at the end).

This can consume large sync streams without blowing the stack.

The continuable resolves when the stream is done or has an error.

### consume(stream) -> continuable&lt;items>

Consume a stream and collect all the events.

