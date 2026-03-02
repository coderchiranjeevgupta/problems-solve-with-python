# The Roman to Integer problem requires converting a Roman numeral into its corresponding integer value. Roman numerals are represented using seven symbols: I, V, X, L, C, D, and M, which correspond to the values 1, 5, 10, 50, 100, 500, and 1000 respectively. Roman numerals are generally written from largest to smallest from left to right, and their values are added together. However, in certain cases, a smaller numeral appears before a larger one to indicate subtraction, such as IV representing 4 and IX representing 9. Given a valid Roman numeral string within the range of 1 to 3999, the task is to compute and return its integer equivalent.
class Solution:
    def romanToInt(self, s: str) -> int:
        
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        total = 0

        for i in range(len(s)):
            if i + 1 < len(s) and roman[s[i]] < roman[s[i + 1]]:
                total -= roman[s[i]]
            else:
                total += roman[s[i]]

        return total
