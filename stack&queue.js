//Stack - Gayle
//k - number of stacks, n - total space in array
function kstacks(k,n){
    var top=[];var next=[];
    var arr = new Array();
    for(var i=1;i<=k;i++)
        top[i]=-1;
    for(var i=0;i<n-1;i++)
        next[i]=i+1;
    next[n-1] = -1;
    var free = 0;
    var isfull = function(){
        if(free==-1)
            return 1;
        else
            return 0;
    }
    var isempty = function(s){
        if(top[s]==-1)
            return 1;
        else 
            return 0;
    }
    this.push = function(stacknum, value){debugger;
        if(isfull())
            return 0;
        var i = free;
        arr[i]=value;
        free = next[i];
        next[i]=top[stacknum];
        top[stacknum] = i; 
    };
    
    this.pop = function(stacknum){debugger;
        if(isempty())
            return null;
        var currtop = top[stacknum];
        var old = arr[currtop];
        top[stacknum] = next[currtop];
        next[currtop] = free;
        free = currtop;
    };
    
}

//function sortStack

function queueUsing2Stacks(){
    function q(){
        this.stack1 = new Array();
        this.stack2 = new Array();
    };
 var queue = new q();
    this.enqueue = function(value){
        if(queue.stack2.length)
        {
            //pop s2 to s1
            while(queue.stack2.length){
                queue.stack1.push(queue.stack2.pop());
            }
        }
        queue.stack1.push(value);
    }
    this.dequeue = function(){
        if(queue.stack2.length) {
            //pop s2 to s1
            return queue.stack2.pop();
        }
        else{
            while(queue.stack1.length){
                queue.stack2.push(queue.stack1.pop());
            }
            return queue.stack2.pop();
        }

    }
    
}
//final output wil have stack is asc order, smallest on top
function sortStack(s1){
    var s2 = [];
    //var s2len = s2.length-1;
    while(s1.length){
        var x = s1.pop();
        while(s2.length && s2[s2.length-1] < x){
            s1.push(s2.pop());
        }
        s2.push(x);
    }
    console.log(s2);
}




/*var ks = new kstacks(3, 15);
ks.push(1,'a');
ks.push(2,'c');
ks.push(3,'x');
ks.push(1,'b');
ks.push(2,'d');
ks.push(2,'e');
ks.push(3,'y');
ks.pop(1);
ks.push(3,'z');
debugger;
var qs = new queueUsing2Stacks();
qs.enqueue(1);
qs.enqueue(2);
qs.enqueue(3);
qs.enqueue(4);
qs.enqueue(5);
console.log(qs.dequeue());
qs.enqueue(6);
console.log(qs.dequeue());*/
var s  = new Array(1,2,3,4,5);
console.log(s);
sortStack(s);
console.log(s);