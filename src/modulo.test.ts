import { simpleModuloHash } from "./hash";

test("simple modulo test", () => {
  // n % 3 gives us 0, 1, or 2
  expect(simpleModuloHash(11, 3)).toBe(2);
  expect(simpleModuloHash(10, 3)).toBe(1);
  expect(simpleModuloHash(9, 3)).toBe(0);
  expect(simpleModuloHash(8, 3)).toBe(2);
  expect(simpleModuloHash(7, 3)).toBe(1);
  expect(simpleModuloHash(6, 3)).toBe(0);

  // n % 4 gives us 0, 1, 2, or 3
  expect(simpleModuloHash(11, 4)).toBe(3);
  expect(simpleModuloHash(10, 4)).toBe(2);
  expect(simpleModuloHash(9, 4)).toBe(1);
  expect(simpleModuloHash(8, 4)).toBe(0);
  expect(simpleModuloHash(7, 4)).toBe(3);
  expect(simpleModuloHash(6, 4)).toBe(2);

  // n % 5 gives us 0, 1, 2, 3, or 4
  expect(simpleModuloHash(11, 5)).toBe(1);
  expect(simpleModuloHash(10, 5)).toBe(0);
  expect(simpleModuloHash(9, 5)).toBe(4);
  expect(simpleModuloHash(8, 5)).toBe(3);
  expect(simpleModuloHash(7, 5)).toBe(2);
  expect(simpleModuloHash(6, 5)).toBe(1);
});
