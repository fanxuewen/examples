let obj = { name: '张三', 1: 'Sencond', age: 19, 0: 'First' }
console.log('**************for...in**************');
for (item in obj) {
    console.log(item, '-----', obj[item]);
}
console.log('**************for...of**************');
for (item of obj) {
    console.log(item, '-----', obj[item]);
}



// const obj = {
//     count: 0,
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {

//                 if (obj.count <= 2) {
//                     return {
//                         value: obj.count++,
//                         done: false
//                     };
//                 } else {
//                     return {
//                         value: 0,
//                         done: true
//                     };
//                 }

//             }
//         };
//     }
// };
// for (item of obj) {
//     console.log(item);
// }



// let obj = { name: '张三', 1: 'Sencond', age: 19, 0: 'First' }
// for(const [key, value] of Object.entries(obj)){
//     console.log('key:',key,' value:',value);
// }

// let obj = { name: '张三', 1: 'Sencond', age: 19, 0: 'First' }
// Object.prototype.theacher = '花花'
// Reflect.defineProperty(Object.prototype, 'class', {
//     value: '一班',
//     enumerable: false,
//     configurable: true,
//     writable: true

// })
// console.log('**************for...in************');
// for (key in obj) {
//     console.log(`key:${key}-----value:${obj[key]}`);
// }
// console.log('**************for...of************');
// for (const [key, value] of Object.entries(obj)) {
//     console.log('key:', key, ' value:', value);
// }

// var arr=[6,7,8];
//     arr.name='王八蛋';
// console.log('*************for...in*********');
// for(key in arr){
//     console.log(`key:${key}`);
// }
// console.log('*************for...of*********');
// for(key of arr){
//     console.log(`key:${key}`);
// }