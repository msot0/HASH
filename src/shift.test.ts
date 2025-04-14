import { shiftNumber } from "./hash";

test("Shift numbers left or right", () => {
  // right
  expect(shiftNumber(42, 1, "right")).toBe(21); // 42 >> 1 = 21
  expect(shiftNumber(42, 2, "right")).toBe(10); // 42 >> 2 = 10
  expect(shiftNumber(42, 3, "right")).toBe(5); // 42 >> 3 = 5
  expect(shiftNumber(42, 4, "right")).toBe(2); // 42 >> 4 = 2
  expect(shiftNumber(42, 5, "right")).toBe(1); // 42 >> 5 = 1

  // left
  expect(shiftNumber(42, 1, "left")).toBe(84); // 42 << 1 = 84
  expect(shiftNumber(42, 2, "left")).toBe(168); // 42 << 2 = 168
  expect(shiftNumber(42, 3, "left")).toBe(336); // 42 << 3 = 336
  expect(shiftNumber(42, 4, "left")).toBe(672); // 42 << 4 = 672
  expect(shiftNumber(42, 5, "left")).toBe(1344); // 42 << 5 = 1344
});
