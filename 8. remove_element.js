// Given an integer array nums and an integer val, your task is to remove all occurrences of val from the array in-place and return the count of remaining elements k. The key constraint is that you must do this without using extra memory for another array, meaning you need to modify the original array directly by overwriting the elements you want to remove with the elements you want to keep. Unlike the remove duplicates problem, the array here is not necessarily sorted, and the order of the remaining elements does not need to be preserved in any particular way — the judge will sort the first k elements before comparing them to the expected output, so you have full freedom to rearrange elements however you like as long as the first k positions contain all the non-val elements. For example, given nums = [0,1,2,2,3,0,4,2] and val = 2, you should return 5 and the first five elements of the array should contain 0, 0, 1, 3, 4 in any order. The elements beyond index k - 1 are completely ignored by the judge, so you don't need to worry about cleaning up the tail of the array. The input array can also be empty, in which case you should simply return 0.
var removeElement = function(nums, val){
    let k = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
