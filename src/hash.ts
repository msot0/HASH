// hash.ts

/**
 * This returns what is arguably the simplest hash function: the modulo hash. It
 * takes a number and returns the remainder when dividing it by the table size.
 * Going back to elementary school, you might remember being asked to divide
 * numbers ande give the answer in the form of a quotient and a remainder. For
 * example, 11 divided by 3 has a quotient of 3 and a remainder of 2. The modulo
 * operator (%) gives you the remainder. So, 11 % 3 = 2.
 *
 * Most programming languages that I am aware of have a modulo operator, and its
 * syntax is just like the division operator. So literally:
 *
 * console.log(11 % 3); // prints out 2
 */
export const simpleModuloHash = (
  numerator: number,
  denominator: number
): number => {
  // IMPLEMENT
  return NaN;
};

/**
 * In order to work with text as data, we have to turn it into numbers. In
 * languages like Javascript you can turn individual characters in a string into
 * numbers using the 'charCodeAt' method on strings.
 *
 * For example, "A".charCodeAt(0) returns 65, "B".charCodeAt(0) returns 66, and
 * so on. The "A" and "B" in these examples are just strings. If you have a
 * string you can use charCodeAt on that string. The argument to the function in
 * this example was just 0, which means 'the first character'. If you had more
 * characters you could pass in bigger numbers as well.
 *
 * For this function, all you need to do is return the character code at zero.
 */
export const singleCharToNumber = (oneChar: string): number => {
  // IMPLEMENT
  return NaN;
};

/**
 * This function takes a string and turns it into a number. It does this by
 * taking each character in the string, turning it into a number using the
 * singleCharToNumber function, and then adding them all together.
 *
 * For example, "AB" would be 65 + 66 = 131.
 *
 * This is not a very good hash function at all. For starters, it doesn't give
 * you a very good spread of numbers. For example, "AB" and "BA" would both hash
 * to 131. But it is a good example of how to use convert a potentially long
 * string into a number.
 */
export const stringToNumber = (str: string): number => {
  // IMPLEMENT
  return NaN;
};

/**
 * "Binary" sounds scary, but it just means "two". Binary numbers are numbers
 * that are made up of two digits: 0 and 1.
 *
 * You're already used to base ten ("decimal") numbers, which are made up of the
 * usual digits, zero through nine. You start at zero and start counting up.
 * When you roll past nine, what do you do? You add a digit to the left and
 * start counting again. So, after 9 comes 10, and after 19 comes 20, etc. And
 * you use the same logic when the "tens" column rolls over to the next one.
 * After 99, you add a digit to the next column and roll over those nines to
 * zero. So after 99 you get 100.
 *
 * In binary, you do the same thing, but you only have two digits to work with.
 * So after you count to 1, you add a digit to the next column and roll your
 * current column down to zero. So the first six binary numbers are: 0, 1, 10,
 * 11, 100, 101.
 *
 * Binary numbers are special when using digital computers because that's the
 * only representation that makes sense to them.
 *
 * In this function, take a decimal integer and print out a string
 * representation of that number in binary. So for example, if you get the
 * number 5, you'll convert that into the string "101". If you get the number
 * 42, you'll convert it into "101010".
 *
 * Note that there is a built-in JS function to do this in one line. Google it
 * for the win. You can also do this the hard way.
 */
export const decimalToBinary = (num: number): string => {
  // IMPLEMENT
  return "";
};

/**
 * The binary representation of a number has some interesting properties. You
 * can "shift" the string to the left or right by some amount to multiply or
 * divide the number by two. For example, if you have the number 5, which is
 * "101" in binary, and you shift it to the left by one, you get "1010", which
 * is 10 in decimal. If you shift "101" to the right by one, you get "10", which
 * is 2 in decimal.
 *
 * Notice that when shifting to the right, you lose the last digit. We know that
 * the real number 5 divided by 2 is actually 2.5, but the binary representation
 * doesn't have a way to represent that. So you lose the last digit. This is
 * called "truncation".
 *
 * When you shift to the left, you add a zero to the end of the string. In
 * standard integer formats, you have a limited number of bits, like 32 or 64.
 * So this means that when you shift to the left, you can overflow the number -
 * those bits just drop off the planet, and you lose that information entirely.
 *
 * Shifting binary numbers left and right is a common operation in hashing
 * algorithms, so I figured it would be great fun to give you a question on
 * this.
 *
 * For this function, you'll take an integer, a shift amount, and a direction
 * (left or right), and return the integer that is the result of the shift.
 */
export const shiftNumber = (
  num: number,
  amount: number,
  dir: "left" | "right"
): number => {
  // IMPLEMENT
  return NaN;
};

/**
 * Now that you understand many of the basic ideas with hashing, we can
 * implement a "real" hash function: the DJB2 hash. This is a simple hash
 * function that is not super great for all applications, but it is often good
 * enough for what you're likely to need.
 *
 * http://www.cse.yorku.ca/~oz/hash.html
 *
 * This hash function was passed around a lot in the early days of the internet
 * and sort of became canonized as "the way to do it". If you have insomnia I
 * recommend reading the neckbeards of the internet tearing this one apart.
 *
 * Pseudocode is included below, in case the original C code linked above isn't
 * your cup of coffee. One difference is that your code must be sure to return a
 * positive number, possibly with the cunning use of Math.abs().
 *
 * If you're looking for a project, and this mathy stuff piques your interest,
 * you could work up implementations of other hash functions like Murmur3 and
 * such.
 */
export const djb2Hash = (str: string): number => {
  // IMPLEMENT

  /*
    Pseudocode:

    hash = 5381
    for each character c in str:
      hash = ((hash << 5) + hash) + c
    
    return hash
  */

  return NaN;
};
