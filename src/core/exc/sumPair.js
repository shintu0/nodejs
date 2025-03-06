/*


target=6, numbers={1,2,3,4,5}
 
output=[[1,5], [2,4]]
*/

const numbers=[1,2,3,4,5]

// op=[[1,5],[2,4]];

function findSumPair(arr=[1,2,3,4,5],target=6){
    let obj={};
    arr.forEach(e=>{
        obj[e]=e;
    })
    let diffArr=arr.map(e=>target-e);//O(n)
    let op=[];
    let opObj={};
    for(let i=0;i<diffArr.length;i++){
        const e=diffArr[i];
        if(obj[e]){ // O(1)
            if(!opObj[`${e},${arr[i]}`] && !opObj[`${arr[i]},${e}`]){
                op.push([e,(arr[i])]);
                opObj[`${e},${arr[i]}`]=`${e},${arr[i]}`
            }
        }
    } // O(n)
    return {op,opObj}
}

console.log(Object.keys(findSumPair().opObj));
console.log(Object.keys(findSumPair([4,2,3,5,2,1],8).opObj));
console.log(Object.keys(findSumPair([1,5,3,2,4],6).opObj));
