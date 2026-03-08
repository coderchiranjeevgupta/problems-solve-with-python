// Given an array of strings, your task is to find the longest common prefix shared among all the strings and return it. A prefix is the beginning part of a string, so for example if you have the array ["flower", "flow", "flight"], the longest common prefix is "fl" because all three strings start with "fl" but diverge after that. If there is no common prefix at all among the strings, like in the case of ["dog", "racecar", "car"] where no single starting character is shared across all words, you should return an empty string "". The key challenge here is to find the longest prefix that every single string in the array starts with — not just some of them, but all of them. Keep in mind that the array can contain up to 200 strings and each string can be up to 200 characters long, and the strings will only consist of lowercase English letters. Edge cases to watch out for include an empty string being present in the array, which would immediately make the common prefix empty, as well as an array containing only one string, in which case the entire string itself is the answer.
var longestCommonPrefix = function(strs){
    if(strs.length === 0) 
        return "";

    let prefix = strs[0];

    for(let i = 1; i <strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1);
            if(prefix === "")
                return "";
        }
    }

    return prefix;
};
