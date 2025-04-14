import { decimalToBinary } from "./hash";

test("String to binary", () => {
  expect(decimalToBinary(0)).toBe("0");
  expect(decimalToBinary(1)).toBe("1");
  expect(decimalToBinary(2)).toBe("10");
  expect(decimalToBinary(3)).toBe("11");
  expect(decimalToBinary(4)).toBe("100");
  expect(decimalToBinary(5)).toBe("101");
  expect(decimalToBinary(6)).toBe("110");
  expect(decimalToBinary(7)).toBe("111");
  expect(decimalToBinary(8)).toBe("1000");
  expect(decimalToBinary(9)).toBe("1001");
  expect(decimalToBinary(10)).toBe("1010");
  expect(decimalToBinary(11)).toBe("1011");
  expect(decimalToBinary(12)).toBe("1100");
  expect(decimalToBinary(13)).toBe("1101");
  expect(decimalToBinary(14)).toBe("1110");
  expect(decimalToBinary(15)).toBe("1111");
  // 42
  expect(decimalToBinary(42)).toBe("101010");
  // 611
  expect(decimalToBinary(611)).toBe("1001100011");
  // 1023
  expect(decimalToBinary(1023)).toBe("1111111111");
  // 1024
  expect(decimalToBinary(1024)).toBe("10000000000");
});
