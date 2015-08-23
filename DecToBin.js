
function convertDecToBin(a){
    var stack = new Array();
    var input = a;
    var output;
    var dec="";
    
    while(input > 0)
    {
        output = input%2;
        stack.push(output);
        input = Math.floor(input/2);
    }
    
    while(stack.length){
         dec+=stack.pop().toString();
    }
    alert(dec);
    
}
convertDecToBin(0);