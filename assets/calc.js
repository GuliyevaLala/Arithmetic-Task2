function ProcessArrayElements(arr,cb) {
        let newArr =[];
        for (let i = 0; i < arr.length; i++) {
            if(cb(arr[i])){
                newArr.push(arr[i])
            }
        }
        return(newArr);
    }


    function  dividebyThree (number) {
            return number % 3==0;
            
    }

    function  dividebyFour (item) { 
        return item % 4==0;
        
}

console.log(ProcessArrayElements ([9, 452, 89, 105, 210],dividebyThree));
    
console.log(ProcessArrayElements ([9, 452, 89, 105, 210],dividebyFour));
