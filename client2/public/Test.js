// let obj=[{
//     name:"Sunkanmi",
//     bola:"functijn",
//     age:30,
//     events:["dance" , "play" , "understand"]
// },
// {
//     name:"Sunkami",
//     bola:"functijn",
//     age:30,
//     events:["dance" , "play" , "understand"]
// },
// {
//     name:"Sunkami",
//     bola:"functijn",
//     age:30,
//     events:[  "play" , "understand"]
// },
// {
//     name:"Sunkami",
//     bola:"functijn",
//     age:30,
//     events:[  "play" , "understand"]
// }
// ]

// let arr=[1,2,3,4,5,6]
// var dayy='monday teusday wednesday thursday friday';
// var namee= dayy.split(" ");
// const new__= namee.join(".")
// console.log(dayy.repeat(3))

function reverse(...list){
var new_array=[];
 for( const i in list){
     const reverse_index=list.length-i;
     new_array.push(list[reverse_index-1])
 }
 return new_array;
}
// console.log(reverse(1,2,7,3,5))
function forEach(n , action){
  for(let i =0; i<n; i++){
     action(i)
  }
}

forEach(6, element=>{
    // console.log(element+1)
})

function filter(array , test){
    const new_array=[];
    for(let i of array){
        if(test(i)){
            new_array.push(i)
        }
    }
    return(new_array)
}
console.log(filter([1,2,3,4,5,6] , ()=>{
    return !4
}))