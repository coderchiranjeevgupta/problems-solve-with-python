# The Longest Common Prefix problem requires finding the longest prefix string that is common among all the strings in a given array of lowercase English words. A prefix is defined as the starting portion of a string. You must compare the strings and determine the longest sequence of characters from the beginning that appears in every string in the array. If no common prefix exists among all the strings, the function should return an empty string (""). The solution must handle cases where the array contains one or more strings, and each string may have different lengths.
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""

        prefix = strs[0]

        for string in strs[1:]:
            while not string.startswith(prefix):
                prefix = prefix[:-1]
                if prefix == "":
                    return ""

        return prefix
