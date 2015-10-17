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

function queueUsing2Stacks = function(){
    var queue = function(){
       this.stack1 = new Array();
       this.stack2 = new Array();
    }
    
    this.enqueue = function(value){}
    
}

var ks = new kstacks(3, 15);
ks.push(1,'a');
ks.push(2,'c');
ks.push(3,'x');
ks.push(1,'b');
ks.push(2,'d');
ks.push(2,'e');
ks.push(3,'y');
ks.pop(1);
ks.push(3,'z');
