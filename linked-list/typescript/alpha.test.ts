// Linked List Test TypeScript, Alpha

import { LinkedList } from "./linked-list";

// -----------------
// Tiny Test Harness
// -----------------

// Registration
type TestFn = () => void;
const caseArray: Array<{ name: string; fn: TestFn }> = [];

function test(name: string, fn: TestFn): void {
  caseArray.push({ name, fn });
}

// Assertion
function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

function assertEqual<T>(actual: T, expected: T, label = "value"): void {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${String(expected)}, got ${String(actual)}`);
  }
}

function assertArrayEqual<T>(
  actual: readonly T[],
  expected: readonly T[],
  label = "array",
): void {
  const equal =
    actual.length === expected.length && actual.every((v, i) => v === expected[i]);
  if (!equal) {
    throw new Error(
      `${label}: expected [${expected.join(", ")}], got [${actual.join(", ")}]`,
    );
  }
}

function run(): void {
  let passed = 0;
  let failed = 0;
  for (const { name, fn } of caseArray) {
    try {
      fn();
      passed++;
      console.log(`  ok    ${name}`);
    } catch (err) {
      failed++;
      console.log(`  FAIL  ${name}\n          ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) throw new Error(`${failed} test(s) failed`);
}

// ----
// Test
// ----

test("Create and Initialize Linked List", () => {
  const linkedList = new LinkedList<number>();

  assert(linkedList.isEmpty, "Linked List Not Empty.");
});
