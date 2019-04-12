// ***********concat、push******************//

var sourceArr1=[1,2,3,4];
var sourceArr2=[5,6,7,8];
console.log('--------------concat 数组-----------');
console.log('result',sourceArr1.concat(sourceArr2));
console.log('sourceArr1',sourceArr1);
console.log('sourceArr2',sourceArr2);
console.log('--------------concat 参数列表-----------');
console.log('result',sourceArr1.concat(...sourceArr2));
console.log('sourceArr1',sourceArr1);
console.log('sourceArr2',sourceArr2);


// ***********push******************//
// var pushArr1=[1,2,3,4];
// var pushArr2=[5,6,7,8];
// console.log('--------------push 数组-----------');
// console.log('result',pushArr1.push(pushArr2));
// console.log('pushArr1',pushArr1);
// console.log('pushArr2',pushArr2);
// console.log('--------------push 参数列表-----------');
// console.log('result',pushArr1.push(...pushArr2));
// console.log('pushArr1',pushArr1);
// console.log('pushArr2',pushArr2);


