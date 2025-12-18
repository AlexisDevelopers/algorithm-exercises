function twoSum(nums: number[], target: number): number[] {
    if (!nums || nums.length < 2) {
        return [];
    }
    
    const numToIndex = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
        
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement)!, i];
        }
        
        numToIndex.set(currentNum, i);
    }
    
    return [];
}
