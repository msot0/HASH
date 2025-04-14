import { singleCharToNumber } from "./hash";

test("single char to number", () => {
  expect(singleCharToNumber("A")).toBe(65);
  expect(singleCharToNumber("B")).toBe(66);
  expect(singleCharToNumber("C")).toBe(67);
  expect(singleCharToNumber("D")).toBe(68);

  expect(singleCharToNumber("a")).toBe(97);
  expect(singleCharToNumber("b")).toBe(98);
  expect(singleCharToNumber("c")).toBe(99);
  expect(singleCharToNumber("d")).toBe(100);
  expect(singleCharToNumber("1")).toBe(49);

  expect(singleCharToNumber("&")).toBe(38);
  expect(singleCharToNumber(" ")).toBe(32);
  expect(singleCharToNumber("!")).toBe(33);
  expect(singleCharToNumber("@")).toBe(64);
  //   expect(singleCharToNumber("🤓")).toBe(55358); // just kidding
  // I'm not sure emoji are going to be consistent across platforms
});
