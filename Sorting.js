//Sorting

function swap(arr, i, j){
    var temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;    
}

function getmax(arr)
{
    var max = arr[0];
    for(var i=1;i<arr.length;i++)
    {
        if(arr[i]>max)
            max=arr[i];
    }
    return max;
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

//Order n square, best case o(n) outer loop and 1 comparison inside, no swapping
function insertionSort(arr){debugger;
    for(var i=0;i<arr.length-1;i++)
    {
        var j = i;
        while(j>=0 && arr[j]>arr[j+1])
        {
            swap(arr, j,j+1);
            j--;
        }
    }
}

function sort(a, s1, mid, s2)
{debugger;
    var k = 0;
    var tempArray = [];
    var i=s1;var j = mid+1;

       while(i<=mid && j<=s2)
        {
            if(a[i]<a[j])
            {
               tempArray[k]=a[i];
               i++;
               k++;
            }
            else
            {
                tempArray[k]=a[j];
                j++;
                k++;
            }
        }
        while(i<=mid)
            {
                tempArray[k]=a[i];
               	i++;
                k++;
            }
       while(j<=s2)
            {
                tempArray[k]=a[j];
               	j++;
                k++;
            }
    var temp = s1;
    k=0;
    for(var temp=s1;temp<=s2;temp++)
    {
        a[temp] = tempArray[k];
        k++;
    }
}

function mergeSortUtil(arr, start, end)
{debugger;
    if(start==end)
        return start;
    var mid = Math.floor((start+end)/2);
    mergeSortUtil(arr, start, mid);
    mergeSortUtil(arr, mid+1, end);
    sort(arr, start, mid, end);
}

function mergeSort(arr){
    mergeSortUtil(arr,0,arr.length-1);
}

function quicksortUtil(arr, start, end)
{	debugger;
 if(arr.length>1) {
    var mid = Math.floor((start+end)/2);
    var pivot = arr[mid];
    var i = start, j = end;
    while(i<=j)
    {
        while(arr[i]<pivot)
            i++;
        while(arr[j]>pivot)
            j--;
        if(i<=j){
            swap(arr,i,j);
            i++;
            j--;
        }
    }
    if(start<j)
       quicksortUtil(arr, start, j);
    if(i<end)
        quicksortUtil(arr, i, end);
 }
}

function quickSort(arr)
{
    quicksortUtil(arr, 0, arr.length-1); 
    
}

function radixsortUtil(arr, mul){debugger;
    var output=[];
     var count=[];
                             ////    for(var i = 0;i<=9;i++)
                                //     count[i]=0;
     var count = new Array(10).fill(0);
    var n = arr.length;
    for(var i=0;i<n;i++){
        var digitnum = Math.floor((arr[i]/mul))%10;
     //   count[digitnum] = 0;
        count[digitnum]++;
    }
    for(var i=1;i<=9;i++)
    {
     ////   if(count[i]==undefined)
        //    count[i]=0;
        count[i]=count[i]+count[i-1];
    }
    
    for(var i=n-1;i>=0;i--)
    {
        var digitnum =  Math.floor((arr[i]/mul))%10;
        var newvalue = count[digitnum]-1;
        output[newvalue] = arr[i];
         count[digitnum]--;
    }
    for(var i=0;i<n;i++)
    {
        arr[i]=output[i];
    }
}

function radixsort(arr){debugger;
    var num = getmax(arr);
    var mul = 1;
    while(num>0){
        radixsortUtil(arr, mul);
        num=Math.floor((num/10));
        mul=mul*10;
    }
}
var arr = [170, 45, 75, 90, 802, 24, 2, 66];
radixsort(arr);
console.log(arr);


