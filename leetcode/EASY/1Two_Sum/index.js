/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function twoSum(nums, target) {
    let numMap = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
    }
};

// Test the function with an example input
console.log(twoSum([2, 7, 11, 15], 9));