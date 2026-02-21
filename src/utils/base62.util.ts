export class Base62Utils {
  private static readonly CHARS =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  /**
   * Converts a base-10 integer into a Base62 string.
   * Base62 uses 0-9, a-z, and A-Z to represent values.
   */
  static base62encoder(idToEncode: number) {
    try {
      // The character set used for encoding.
      // The length of this string (62) defines our new base.

      // Edge case: If the ID is 0, return the first character ('0') immediately.
      if (idToEncode === 0) {
        return this.CHARS[0];
      }

      let res = '';

      // Process the number until it has been fully converted
      while (idToEncode > 0) {
        /**
         * 1. Get the remainder of the ID when divided by 62 (idToEncode % 62).
         * This index points to the corresponding character in the CHARS string.
         * 2. Prepend this character to the result string (res).
         * We prepend because we are calculating the "least significant" digits first.
         */
        res = this.CHARS[idToEncode % 62] + res;

        /**
         * Divide the ID by 62 and round down to move to the next "place value."
         * This is equivalent to shifting the number one position to the right in base-62.
         */
        idToEncode = Math.floor(idToEncode / 62);
      }

      return res;
    } catch (err) {
      // Catch-all for unexpected errors (e.g., passing a non-number type)
      throw new Error(err);
    }
  }

  static base62decoder(encodedId: string) {
    try {
      if (encodedId === '0') {
        return 0;
      }

      let result = 0;

      for (const char of encodedId) {
        const indexOfChar = this.CHARS.indexOf(char);
        result = result * 62 + indexOfChar;
      }

      return result;
    } catch (err) {
      throw new Error(err);
    }
  }
}
