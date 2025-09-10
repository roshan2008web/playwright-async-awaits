// Demonstrates sequential vs parallel async execution
const { test, expect } = require('@playwright/test');

// Fake API calls
async function fakeApiCall(name, delayMs) {
  await new Promise(res => setTimeout(res, delayMs));
  return `${name} done in ${delayMs}ms`;
}

test.describe('Promise.all parallelism', () => {
  test('Sequential vs parallel', async () => {
    // Sequential execution (runs one after another)
    const t1 = Date.now();
    const result1 = await fakeApiCall('Task A', 200);
    const result2 = await fakeApiCall('Task B', 300);
    const sequentialTime = Date.now() - t1;

    // Parallel execution (runs both together)
    const t2 = Date.now();
    const [res1, res2] = await Promise.all([
      fakeApiCall('Task A', 200),
      fakeApiCall('Task B', 300)
    ]);
    const parallelTime = Date.now() - t2;

    // Validations
    expect(result1).toContain('Task A');
    expect(result2).toContain('Task B');
    expect(res1).toContain('Task A');
    expect(res2).toContain('Task B');

    // Parallel time should be less than sequential
    console.log({ sequentialTime, parallelTime });
    expect(parallelTime).toBeLessThan(sequentialTime);
  });
});
