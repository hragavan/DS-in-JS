//Sorting

function swap(arr, i, j){
    var temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;    
}
//Improved by using either flag or arr.length-1-i (preferred than flag)
//Order n square, outer loop runs n times, inner loop almost n for each outer loop
function bubbleSort(arr){
    for(var i=0;i<arr.length;i++)
    {
      //  var flag = false;
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            //    flag=true;
            }
        }
     ///   if(flag==false)
        //    break;
    }
}

//Order n square, outer loop runs almost n times, inner loop almost n for each outer loop
function selectionSort(arr){
    for(var i=0;i<arr.length-1;i++)
    {
        var min = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min!=i)
            swap(arr, i, min);
    }
}
var arr = [1,-5,4,2,0];
selectionSort(arr);
console.log(arr);
