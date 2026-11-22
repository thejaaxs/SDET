// Two Sum 
function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

// Remove Duplicates & Return the count of unique numbers
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0;
    let write = 1;
    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[write - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write;
}
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Return the count of the values not equal to val ;
function removeElement(nums, val) {
    let write = 0;
    for (let num of nums) {
        if (num !== val) {
            nums[write] = num;
            write++;
        }
    }
    return write;
}
console.log(removeElement([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 5));

// Insert the element !
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

// Maximum Sub-Array !
function maxSubArray(nums) {
    let current = nums[0];
    let best = nums[0];
    
}  