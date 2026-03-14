// Given an integer array that is already sorted in non-decreasing order, your task is to remove the duplicates in-place such that each unique element appears only once, and return the count of unique elements k. The important constraint here is that you must do this in-place without allocating extra memory for another array, meaning you need to modify the original array itself by overwriting duplicate values with the next unique elements. The relative order of the unique elements must be preserved, so the first k positions of the array should contain all the unique numbers in sorted order after your function runs — whatever values remain beyond index k - 1 do not matter and can be ignored by the judge. For example, given [0,0,1,1,1,2,2,3,3,4], you should return 5 and the first five elements of the array should be [0,1,2,3,4]. The key insight that makes this problem approachable is that since the array is already sorted, all duplicate values are guaranteed to be grouped together next to each other, meaning you only ever need to compare a current element with the one immediately before it to know whether it is a duplicate or a new unique value.
var removeDuplicates = function(nums){
    let k = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
