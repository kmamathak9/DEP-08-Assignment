/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(nums.length==k){
        return nums;
    }
    const freqMap ={};
    for(let i=0;i<nums.length;i++){
        const r=nums[i];
        if(freqMap[r]){
            freqMap[r]++;
        }
        else{
            freqMap[r]=1;
        }
    }
    const freqArray=Object.entries(freqMap);
    freqArray.sort((a,b)=> b[1]-a[1]);
    const arr=[];
    for(let i=0;i<k;i++){
        arr.push(parseInt(freqArray[i][0]));
    }
    return arr;


};