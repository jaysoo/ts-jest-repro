# Repro for ts-jest issue

Run `yarn` and `yarn test` to see error.

You'll see an error like the following.

```
$ jest --env=node --colors
 FAIL  src/index.spec.ts
  ✕ ApiProductFamilyCategory (2ms)

  ● ApiProductFamilyCategory

    TypeError: Cannot read property 'ACCESSORIES' of undefined

      2 |
      3 | test('ApiProductFamilyCategory', () => {
    > 4 |   expect(b.ApiProductFamilyCategory.ACCESSORIES).toBeDefined();
        |                                     ^
      5 | })
      6 |

      at Object.<anonymous> (src/index.spec.ts:4:37)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.928s, estimated 2s
Ran all test suites.
error Command failed with exit code 1.
```

However, if you open up [`./src/generated/products_client/index.ts`](./src/generated/products_client/index.ts) and just add a newline or a comment in it, then run `yarn test` again the test will pass.

The `generated` code is copied from an actual project where we generate classes and interfaces using bazel. The problem is that the index.ts files all have the same content, thus is causing issue with ts-jest's caching scheme (which only uses file extension and content).

## Workaround

Disable jest cache for now, and the caching logic will not be used, which results in tests passing.
