//Recursive Binary Search
//Given a sorted array and a value, recursively determine whether value is found within array. 
//rBinarySearch([1,3,5,6],4) = false; 
//rBinarySearch([4,5,6,8,12],5) = true.

function rBinarySearch(arr, value, start = 0, end = null){
    if( end === null){
        end = arr.length - 1;
    }
    if(start > end){
        return false;
    }
    var middle = Math.floor((start + end)/2);
    if(arr[middle]=== value){
        return true;
    }
    if(value < arr[middle]){
        return rBinarySearch(arr,value,start,middle-1);
    }else{
        return rBinarySearch(arr, value, middle+1, end)
    }
}
console.log(rBinarySearch([2,4,6,8,10],5))
console.log(rBinarySearch([2,4,6,8,10],6))


//Greatest Common Factor
//Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor 
//(the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

//gcf(a,b) == a, if a == b;
//gcf(a,b) == gcf(a-b,b), if a>b;
//gcf(a,b) == gcf(a,b-a), if b>a.
//Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. 
//You should  be able to compute rGCF(123456,987654).

function rGCF(a,b){
    if(a == b){
        return a;
    }
    if(a>b){
        return rGCF(a-b,b);
    }
    if(b>a){
        return rGCF(a,b-a);
    }
}
console.log(rGCF(8,60));