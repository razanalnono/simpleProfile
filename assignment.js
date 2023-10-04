// Solution 1 :- without Map

function twoSum(nums, target) {
    const comp = {}; 

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (complement in comp) {
            return [comp[complement], i];
        }

        comp[num] = i;
    }
}
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);







// Solution 2:- Using Map 
// function twoSum(nums, target) {
    //     let comp = new Map();

    // for (let i = 0; i < nums.length; i++) {
    //     let complement = target - nums[i];

    // if (comp.has(complement)) {
    //       return [comp.get(complement), i];
    //     }

    // comp.set(nums[i], i);
    //   }
    // }

    // let nums = [2, 7, 11, 15];
    // let target = 9;
    // let result = twoSum(nums, target);
    // console.log(result);  // Output: [0, 1]
