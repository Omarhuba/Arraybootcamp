



// // ----containsElement----

// let arr=[7,6,2,1,5,4,7]

// function containsElement (arr, element){

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === element){
//             return true
//         }
//     }return false

// }
// function main(){
// let x=containsElement(arr,9)

// }
// main();


// // ----indexOfElement----


// function indexOfElement(arr,element){
//     let output="";
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===element){
//             return output=true;
//         }
//     }output=false;
// }
// function main(){
//     let arr=[1,7,9,3,2]
//     let x=indexOfElement(arr,0)
// }
// main();





// //  ---min---


// function min(arr){
//     let min=arr[0];
//     for(let i=0; i < arr.length; i++){
//         if(min > arr[i]){
//             min = arr[i];
//         }

//     }return min;
// }
// function main(){
//      let arr=[9,6,5,12,1,2]
//      let x = min(arr)
// }
// main();

function min(...numbers){
  let minimum = numbers[0]
  for (let num of numbers){
    if(num < minimum){
      minimum = num
    }
  }
  return minimum
}

min(9,5,2,-4,7,2,6,1,-1)
console.log(min)


// // ----max----

// function min(arr){
//     let min=arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(min < arr[i]){
//             min = arr[i];
//         }

//     }return min;
// }
// function main(){
//      let arr=[9,6,5,12,1,2]
//      let x = min(arr)
// }
// main();



// // ----Sum----

// function sum(arr){
//     let output=0;
//     for(let i=0; i<arr.length; i++){
//         output=output+arr[i];
//     }return output;
// }
// function main(){
//     let arr = [1,7,2,5,0]
//     let x=sum(arr);
// }
// main();


// // ----reverse----

// function reverse(array){
//     let result = [];
//     for(let i = array.length; i >= 0; i--){
//         result.push(array[i]);
//     }
//     return result;
// }
// function main(){
//      let arr=[9,6,5,12,1,2]
//      let x = reverse(arr)
// }
// main();



// // ----filter----



// function filter(arr, element) {
//     let result = [];
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] === element) {
//                 result.push(element);
//         }
//     }
//     return result
// }

// function main() {
//         let arr = [3, 5, 9, 4, 3, 2, 1, 5, 3]
//     let element = 3;
//     let x = filter(arr, element)
// }
// main();


// ----exclude----



// function exclude(arr,element){
//         let result = [];
//         for(let i=0; i<=arr.length-1; i++){
//         if(arr[i]!==element){
//                 result.push(arr[i]);
//             }
//         }
//         return result
//     }
//     function main(){
//             let arr=[3,2,1,3,4,3,1,3,5]
//             let element= 3
//     let x=exclude(arr,element)
// }
// main();





// // ----unique----

// function unique(arr) {
//         let result = [];
//     for (let i = 0; i < arr.length ; i++) {
//             let element = arr[i];
//             if (elementInArray(arr, element)) {
//                  result.push(arr[i])
//                  }
//             }
//     function elementInArray(arr, element) {
//             for (let i = 0; i < arr.length - 1; i++) {
//             if (result[i] == element) {
//                     return false;
//             }
//         } return true;
//     }
//     return result;
// }
// function main() {
//     let arr = [1, 7, 1, 0, 5, 0, 5]
//     let x = unique(arr)
// }
// main();




// s


// // ----reverseStrings----

// let names = ["Kalle", "Olof", "G??sta"]

// reverseStrings(names) 
// reverseStrings( ["lol","100", "omg", ""])
// function reverse(str){
//     let output = "";
//     for(let i = str.length-1; i>=0; i--){
//       output += str[i];
//     }
//     return output;
//   }
// function reverseStrings(strings){
//     let output = []
//     for(let str of strings){
//       let reversed = reverse(str)
//       output.push(reversed)
//     }
//     return output
// }
// function main() {
//     let names = ["Kalle", "Olof", "G??sta"]
//     let x= reverseStrings(names)
// }
// main();




// -----Split----

// function split(str, delimiter){
//     let output = []
//     let current = ""
//     for(let char of str){
//       if(char === delimiter){
//         output.push(current)
//         current = ""
//       }else{
//         current += char
//       }
//     }
//     return output
//   }
// function main() {
//     let str = "Kalle,Olof,G??sta"
//     let x= split(str, delimiter)
// }
// main();




// // -----Join-----


// function join(array, delimiter){
//     let str = "";
//     for(let i = 0; i < array.length; i++){
//       str += element;
//       if(i < array.length-1){
//           str += delimiter;
//       }
//     }
//     return str;
//   }
//   function main() {
//       let arr = ["Kalle", "Olof", "G??sta"]
//       let x=join(arr, delimiter)    
//   }
//   main();