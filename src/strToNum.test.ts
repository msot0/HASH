import { stringToNumber } from "./hash";

test("string to number", () => {
  expect(stringToNumber("A")).toBe(65); // 65
  expect(stringToNumber("AB")).toBe(131); // 65 + 66
  expect(stringToNumber("ABC")).toBe(198); // 65 + 66 + 67
  expect(stringToNumber("ABCD")).toBe(266); // 65 + 66 + 67 + 68
  expect(stringToNumber("ABCDE")).toBe(335); // 65 + 66 + 67 + 68 + 69
  expect(stringToNumber("a")).toBe(97);
  expect(stringToNumber("ab")).toBe(195);
  expect(stringToNumber("abc")).toBe(294);
  expect(stringToNumber("abcd")).toBe(394);
  expect(stringToNumber("this is the best string ever")).toBe(2668);
});
