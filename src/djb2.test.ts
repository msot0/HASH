import { djb2Hash } from "./hash";

test("djb2 hash test", () => {
  expect(djb2Hash("A")).toBe(177638);
  expect(djb2Hash("Alda")).toBe(2088930519);
  expect(djb2Hash("The blank spaces matter ")).toBe(3630280742);
  expect(djb2Hash("The blank spaces matter  ")).toBe(3835147462);
  expect(djb2Hash("a")).toBe(177670);
  expect(djb2Hash("I will always regret selling my Guild hollowbody")).toBe(
    300161260
  );
  console.log(
    "Long text:", djb2Hash(
      "An interesting property of hash functions is that they " +
        "always return you a number that fits within the valid range for that " +
        "number. Even if the input is stupidly long, like this text or maybe an " +
        "entire book, or even an entire library."
    )
  );
  expect(djb2Hash("")).toBe(5381);

});
