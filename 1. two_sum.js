// Given an array of integers and a target value, your task is to find two numbers within the array that add up to the target and return their indices. For example, if you have the array [2, 7, 11, 15] and the target is 9, you should return [0, 1] because nums[0] + nums[1] equals 9. You are guaranteed that exactly one valid answer always exists, and you cannot use the same element twice — meaning you can't just double a single number to reach the target. The answer indices can be returned in any order. As a follow-up challenge, try to solve it in better than O(n²) time complexity, meaning avoid the naive approach of checking every possible pair with nested loops.
var twoSum = function(nums, target){
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if (map.has(complement)){
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};
