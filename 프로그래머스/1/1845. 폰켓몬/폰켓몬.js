function solution(nums) {
    const uniqueArr = [...new Set(nums)];
    
    return uniqueArr.length >= nums.length / 2 ? nums.length / 2 : uniqueArr.length;
}