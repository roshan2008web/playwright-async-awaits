// Demonstrates the difference between missing await and using await correctly
const { test, expect } = require('@playwright/test');

// Utility to simulate async work (like an API call)
async function fakeApiCall(name, delayMs) {
  await new Promise(res => setTimeout(res, delayMs));
  return `${name} done in ${delayMs}ms`;
}

test.describe('Async/Await basics', () => {
  test('BROKEN: missing await', async () => {
    // ❌ forgot to await
    const result = fakeApiCall('Task A', 200);
    // result is a Promise, not the actual string value
    expect(String(result)).toContain('Promise');
  });

  test('FIXED: with await', async () => {
    // ✅ await resolves the Promise into the value
    const result = await fakeApiCall('Task A', 200);
    expect(result).toBe('Task A done in 200ms');
  });
});
