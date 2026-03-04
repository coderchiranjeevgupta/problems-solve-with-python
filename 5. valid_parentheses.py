# The Valid Parentheses problem requires determining whether a given string of parentheses is valid. The string contains only the characters (, ), {, }, [ and ]. A string is considered valid if every opening bracket has a corresponding closing bracket of the same type, the brackets are closed in the correct order, and every closing bracket matches the most recent unmatched opening bracket. If all brackets are properly matched and ordered, the function should return true; otherwise, it should return false.
class Solution:
    def isValid(self, s):
        stack = []

        mapping = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for char in s:
            if char in mapping:
                if not stack or stack[-1] != mapping[char]:
                    return False
                stack.pop()
            else:
                stack.append(char)

        return len(stack) == 0
