# Hashing

**NOTE:** for general advice on how to get, edit, and submit homework, check out
the [GENERAL.MD](GENERAL.MD) file. That will be the case for all homeworks.

## Overview

The term 'hashing' refers to converting some data into a number, according to
some algorithm. Different hashing algorithms will give different results.

This can be used in cryptography, and for that you'll need to use a
cryptographic hash function that has added requirements. We're not going into
that here.

The more mundane use of hash functions is that if you can turn any data into a
single number (its 'hash') you can use that hash as a way to reference the
original data, but in a quick and usually accurate way.

There are many uses for hashes, but the use I want to call out is for a kind of
data structure called a Hash Table. Hash tables give you **constant time
operations** for most everything - adding data, looking up data, removing data.
And that makes them incredibly powerful because they're so efficient. Hash
tables are one possible implementation of the "Map" abstract data type. Hashes
can also be used for other ADTs like sets.

You can use a data object's hash as a key in a hash table to get this constant
time performance. So the quality and efficiency of a hash function is really
important for using hash tables.

Languages like Javascript provide map and set types that will compute hashes
without making you think too hard. Some other languages give you the ability
(and often impose a requirement) to provide a hash function yourself.

This homework is all about understanding the basic ingredients of how to make a
hash function, including:

- The modulo operator
- Binary representations
- Converting string data to binary and into integers
- Shifting binary numbers left and right

This all culminates in implementing a hash function called DJB2 (named after its
creator, Daniel J Bernstein).

For each of these, there is more information than you probably want in the
implementation file, `hash.ts`.
