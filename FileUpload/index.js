let originalArr=[1,2,3,4,5,6,7,8,9,10];
console.log('------------map---------------');
let arrMap= originalArr.map(item=>{
     return item*2;
 })
 console.log('original',originalArr);
 console.log('result',arrMap);
//  map返回新数组不改变原数组
 let arrForEach=originalArr.forEach(item=>{
     return item*2;
 })
 console.log('------------forEach---------------');
 console.log('original',originalArr);
 console.log('result',arrForEach);
 //  forEach 没有返回值且不改变原数组


// let originalArr=[];
// for(let i=0;i<1000000;i++){
//     originalArr.push(i);
// }
// console.time('forEach')
// originalArr.forEach(item=>{
//     return item*2;
// })
// console.timeEnd('forEach');
// console.time('map')
// originalArr.map(item=>{
//     return item*2;
// })
// console.timeEnd('map');



// let originalArr=[1,2,3,4,5,6,7,8,9,10];
//  console.log('------------filter---------------');
// let arrFilter= originalArr.filter(item=>{
    
//       return item>2;
//  });
//  console.log('original',originalArr);
//  console.log('result',arrFilter);

//  console.log('------------some---------------');

//  let arrSome=originalArr.some(item=>{
     
//      return item>2;
//  })
//  console.log('original',originalArr);
//  console.log('result',arrSome);
//  console.log('------------every---------------');
//  let arrEvery=originalArr.every(item=>{
     
//     return item>2;
// })
// console.log('original',originalArr);
// console.log('result',arrEvery);



// let originalArr=[1,2,3];
//  console.log('------------filter---------------');
// let arrFilter= originalArr.filter((item,index)=>{
//     console.log(item);
//      if(index==1){
//        return false;
//      }
//       return true;
//  });
//  console.log('original',originalArr);
//  console.log('result',arrFilter);

//  console.log('------------some---------------');

//  let arrSome=originalArr.some((item,index)=>{
//     console.log(item);
//     if(index==1){
//         return false;
//     }
//      return true;
//  })
//  console.log('original',originalArr);
//  console.log('result',arrSome);
//  console.log('------------every---------------');
//  let arrEvery=originalArr.every((item,index)=>{
    
//     console.log(item);
//     if(index==1){
//         return false;
//     }
//     return true;
// })
// console.log('original',originalArr);
// console.log('result',arrEvery);
 


