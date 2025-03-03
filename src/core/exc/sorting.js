const arr=[
    {
        name:"sintu",
        age:27
    },
    {
        name:"abhay",
        age:28
    },
    {
        name:"gaurav",
        age:29
    },
    {
        name:"shivam",
        age:21
    },
];

const sorted=arr.sort((a,b)=>{
    if(a.age>b.age) return 1;
    else if(a.age<b.age) return -1;
    else return 0;
})
console.log(sorted)
console.log(arr.filter(e=>e.age>25));
