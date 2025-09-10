# Playwright Async Labs 🚀

This repo is a hands-on lab for **QA engineers and testers** learning JavaScript async/await and `Promise.all` using Playwright.

## 🌟 What You’ll Learn
- Why forgetting `await` breaks your code
- How `await` actually resolves a Promise
- How `Promise.all` runs multiple tasks in parallel (and saves time)

## 📂 Project Layout
```
tests/
  01_asyncAwait.spec.js   # Broken vs fixed await
  02_promiseAll.spec.js   # Sequential vs parallel
```

## ⚡ Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npm test
   ```

3. Watch the console logs for timings:
   ```
   { sequentialTime: 503, parallelTime: 304 }
   ```

   Parallel execution finishes faster ✅

## 🔬 Labs

### Lab 1: Async/Await
- Open `tests/01_asyncAwait.spec.js`
- Run `npm test`
- See how the **BROKEN test** fails because the result is still a Promise.
- Compare with the **FIXED test** where `await` resolves the value.

### Lab 2: Promise.all
- Open `tests/02_promiseAll.spec.js`
- Run `npm test`
- Compare sequential vs parallel times in console output.
- Notice how `Promise.all` overlaps tasks and saves time.

## 🧩 Next Steps
- Add error handling with `try/catch`
- Simulate failures and see how `Promise.all` behaves
- Extend to real API calls later (auth, schema validation, etc.)
