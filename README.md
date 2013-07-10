simple-stream-helpers
=====================

Helpers that aid in unit tests for simple-stream based projects.

## eachFast(stream, onItem) -> continuable

Consume a stream as fast as possible calling onItem for each value in the stream (not including undefined at the end).

This can consume large sync streams without blowing the stack.

The continuable resolves when the stream is done or has an error.

## eachSlow(stream, onItem, ms) -> continuable

Same as eachFast, except has a small delay between read calls to simulate a slow client.

## binarySourceFast(buffer, chunkSize) -> stream<binary>

Create a binary data stream from a buffer.  This will call the read callback before returning.

## binarySourceSlow(buffer, chunkSize, ms) -> stream<binary>

Same as before, but pauses before calling the callback to simulate a slow source.

## consumeFast(stream) -> continuable<items>

Consume a stream and collect all the events.

## consumeSlow(stream, ms) -> continuable<items>

Same as fast, but slow.
