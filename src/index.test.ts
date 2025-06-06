import { describe, it, expect } from 'vitest';

import { greet } from '.';

describe('greet', () => {
  it('should return a greeting message', () => {
    const message = greet('Francois');
    expect(message).toBe('Hello, Francois!');
  });
});
