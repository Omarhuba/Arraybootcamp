// ----containsElement----
function containsElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
// let result = containsElement([1,5,8,7,21,2], 3);
// console.log(result);

// ----indexOfElement----
function indexOfElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (element === arr[i]) {
            return 0;
        }
    } return -1;
}
// let x = indexOfElement([1,5,8,7,21,2], 20);
// console.log(x);

// ----min----
function min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}


// ----max----
function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    } return max;
}
// let x = max([1,7,-11,100,500]);
// console.log(x);

// ----sum----
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];      
    }
    return sum;
}
// let result = sum([1,2,3,4,5]);
// console.log(result);

// ----mean----
function mean(arr) {
    let mean = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        mean = sum / arr.length
    }
    return mean;
}
// let result = mean([2, 0, 2, -4, 3, 0]);
// console.log(result);

// ----reverse-----
function reverse(arr) {
    let output = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i]);
    }
    return output;
}
// let result = reverse(["olof", "arne", "bengt"] );
// console.log(result);

// ----filter----
function filter(arr, element) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {  //for(let el of array)
        if (element == arr[i]) {
            output.push(arr[i]);
        }
    }
    return output;
}
// let x= filter([1,7,2,2,2,3,3,3,3,1,0,5], 3);
// console.log(x)

// ----exclude----
function exclude(arr, element) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (element != arr[i]) {
            output.push(arr[i]);
        }
    } return output;
}
// let x = exclude([1,7,2,2,2,3,3,3,3,1,0,5], 3);
// console.log(x)

// ----unique----
function unique(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) { // --> for(let element of arr)
        let element = arr[i]               // 
        if (!elementInArr(output, element)) {
            
            output.push(arr[i]);
        }

    }return output;
}     
function elementInArr(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }     
    }
        return false;
}
// let x = unique([1, 7, 2, 2, 2, 3, 3, 3, 3, 1, 0, 5], 3);
// console.log(x)

// ----reverseStrings----


function reverse(str) {
    let output = "";
    for (let i = str.length-1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}
function reverseStrings(strings) {
    let output = [];
    for (let str of strings) {
        let reversed = reverse(str);
        output.push(reversed);
    }
    return output;
}
// let x = reverseStrings(["Kalle", "Olof", "Gösta"])
// console.log(x)

// ----split----
function split(string,delimiter){
    let output = [];
    let current = ""
    for(let char of string){
      if(char == delimiter){
        output.push(current)
        current = ""
      }else{
        current += char
      }
    }
    output.push(current);
    return output

}
// let result = split("1 6 10 9", " ");
// let result = split("Kalle,Olof,Gösta", "," );
// console.log(result);



// ----join----
function join(array, delimiter){
    let str = "";
    for(let i = 0; i < array.length; i++){
      
      if(i === 0){
        str += array[i];
      }else{
          str = str + delimiter + array[i]
      }
    }
    return str;
  }
//   let result = join (["Kalle", "Olof", "Gösta"],",")
//   let result = join (["1", "6", "10", "9"] , " ")
//   console.log(result)