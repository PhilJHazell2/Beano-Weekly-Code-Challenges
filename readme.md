# Secret Message Coding Challenge

Your mission, should you choose to accept it:

Complete the `decodeMessage()` function in **challenge-code.js** to reveal a hidden phrase.

### Rules
- Each number in the `codes` array represents a letter:
    - A = 1, B = 2, ..., Z = 26, 0 = space.
- BUT there’s a twist — all the numbers have been increased by **1**.
- You’ll need to **decode** them before converting to letters.

### Example
If the code was `[2, 3, 0]`, the decoded values would be `[1, 2, -1]` → "AB ".

### Steps
1. Subtract 1 from each number in the `codes` array.
2. Convert numbers to letters using the alphabet.
3. Return the decoded string.

When you’re ready, run:

```bash
npm start
