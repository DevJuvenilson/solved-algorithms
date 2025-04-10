/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function twoSum(nums, target) {
    let numMap = {}; // Dicionário para armazenar números e seus índices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Calcula o complemento necessário

        if (numMap[complement] !== undefined) {
            return [numMap[complement], i]; // Retorna os índices
        }

        numMap[nums[i]] = i; // Armazena o número no dicionário com seu índice
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]