//LinkedList problems
var result;var count = 0;

function LinkedList(){
    this.head = null;
   
    var createnode = function(data){
        return {data: data, next: null};
    };
    this.insert = function(data){
        if(this.head == null)
        {
            this.head = createnode(data);
            return this.head;
        }
        else{
            var temp = this.head;
            while(temp.next!=null)
                temp=temp.next;
            temp.next = createnode(data);
            return temp.next;
        }
       
    };
    
    this.insertBefore = function(data){
        if(this.head == null)
        {
            this.head = createnode(data);
        }
        else{
            var temp = createnode(data);
            temp.next = this.head;
            this.head = temp;
        }
    };
    
    this.removeDup = function(){debugger;
        var prev = null;
        var curr = this.head;
        var visited = {};
        while(curr!=null){
            if(!visited.hasOwnProperty(curr.data)){
               
                visited[curr.data] =1;
                prev=curr;
                curr=curr.next;
            }
            else{
                prev.next=curr.next;
                delete curr;
                curr=prev.next;
            }
                        
              
        }
    }
    //Linear 2 pointer
    this.kthFrmLast = function(k){
        var p1 = this.head;
        var p2 = this.head
        var i = 0;
        if(k==0)
            k=1;
        while(i<k && p2!=null){
            i++;
            p2=p2.next;
        }
        while(p2!=null)
        {
            p1=p1.next;
            p2=p2.next;
        }
        return p1.data;
    }
    
    this.kthFrmLastRec = function(curr,k){
        if(curr==null)
            return 0;
        var count = this.kthFrmLastRec(curr.next, k);
        count++;
        if(count == k)
           alert(curr.data);
        return count;
    }
    
    this.kthFrmLastRec1 = function(curr,k){
        if(curr==null)
            return null;
        result = this.kthFrmLastRec1(curr.next, k);
        count++;
        if(count == k)
           result = curr;
        return result;
    }
    // only a pointer to node to be deleted is given
    //if input is last node or the only node then cant make it null, instead make data and next values null - special case
    this.deleteNode = function(del){debugger;
      if(del!=null){
        var prev = null;
		while(del.next!=null)
        {
            del.data = del.next.data;
            prev = del;
            del=del.next;
        }
        //delete del;
        if(prev)
        	prev.next = null;
        else{
            delete del.data;
            delete del.next;
        }
    }
  };
    
    this.mergeTwo = function(list1, list2){debugger;
        var l1 = list1, l2 = list2;
                                           
        if(l1!=null){
        	while(l1.next!=null)
           		 l1=l1.next;
        	l1.next = l2;
        	return list1;
        }
        return l2;       
    };
    
    this.partitionByX = function(x){
        var curr = this.head;
        var before = new LinkedList();
        var after = new LinkedList();
        while(curr!=null){
            if(curr.data<=x){
                if(curr.data==x)
                	before.insert(curr.data);
                else
                    before.insertBefore(curr.data);
            }                              
            else
                after.insert(curr.data);
            curr=curr.next;                        
        }    
        var result = this.mergeTwo(before.head, after.head); 
        return result;
    };
    //space effiecient, modifying links instead of saving in new list
    this.partitionByX1 = function(x){debugger;
        var after = null, before = null;
        var curr = this.head;
        var next = null;
        while(curr!=null){
            next = curr.next;
            if(curr.data>x){
                curr.next = after;
                after = curr;            
            }
            else{
                curr.next= before;
                before = curr;
            }
            curr = next;
        }
        var result = this.mergeTwo(before, after);
    };
    //Reverse order in LL
    this.sumNumbersRec = function(l1, l2, result, rem){
        debugger;
        if(l1==null && l2==null)
        {
            if(rem!=0)
                result.insert(rem);
            return result;
        }
            
        var sum = 0;
        if(l1!=null)
            sum+=l1.data;
        if(l2!=null)
            sum+=l2.data;
        sum=sum+rem;
        result.insert(Math.floor(sum%10));
        if(sum>9)
           rem = Math.floor(sum/10);
        else
           rem = 0;
        this.sumNumbers(l1?l1.next:null, l2?l2.next:null, result, rem);
        return result;
    };
    
    
    //Numbers is straight order
    //function to add 2 linked list with same length
    this.sumNumbers = function(l1, l2){debugger;
        var result = new LinkedList();
        var sum;
        var rem=0;
        while(l1!=null || l2!=null){
            sum = 0;
            sum = sum+(l1?l1.data:0)+(l2?l2.data:0);  
            sum = sum+rem;
            if(sum>9)
                rem = 1;
            else 
                rem = 0;
            
            result.insert(sum%10); 
            if(l1)
                l1=l1.next;
            if(l2)
                l2=l2.next;
        }
        if(rem>0)
            result.insert(rem);
    	return result;
    };
    
    this.addCarryToRemaining = function(l1, count, diff, carry, result){        
       if(count<diff){
            carry = this.addCarryToRemaining(l1.next,++count,diff, carry, result);           
        }
        var sum = l1.data+carry;
        result.insertBefore(sum%10);
        carry = sum>9?1:0;
        return carry;
        
    }
    //
    this.sum = function(l1,l2,carry,r){
        if(l1==null || l2==null)
            return 0;
		//while(l1 && l2)
        carry = this.sum(l1.next, l2.next, carry,r);
        var s = l1.data+l2.data+carry;
        r.insertBefore(Math.floor(s%10));
        
        if(s>9)
            carry=1;
        else
            carry=0;
        return carry; 
    }
    
    this.findlen = function(l){
        var len=0;
        var list = l;
        while(list!=null)
        {
            len++;
            list=list.next;
        }
        return len;
    };
    
    this.sumNum = function(l1, l2){debugger;
        var len1=0,len2=0;
        var list1=l1,list2=l2;
        var count=0,diff=0;
        var res = new LinkedList();
        
        len1 = this.findlen(list1);
        len2 = this.findlen(list2);
        diff=Math.abs(len1-len2);
        
		if(len2>len1){
            list1=l2;
            list2=l1;
        }
       	while(count<diff){              	
                	count++;
                	list1=list1.next;
            	}
            
            	if(list1 && list2)
            		var carry = this.sum(list1, list2,0, res);   
            carry = this.addCarryToRemaining(len2>len1?l2:l1,1,diff,carry, res);
            if(carry>1)
                res.insertBefore(carry);
            
       return res; 
    };
    
    
    this.easySum = function(l1,l2){debugger;
        var num1='';
        var num2='';
        while(l1!=null){
            num1+=l1.data;
           	l1=l1.next;
        }
        while(l2!=null){
            num2+=l2.data;
           	l2=l2.next;
        }
        num1 = parseInt(num1);
        num2=parseInt(num2);
        return num1+num2;
    };
    
    this.cycleBegin = function(fast){
        var slow = this.head;
        while(slow!=fast){
            slow=slow.next;
            fast=fast.next;
        }
        return slow;
    };
    
    this.cycle = function(){debugger;
        var slow=this.head;
        var fast = this.head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
            if(slow==fast)
               return this.cycleBegin(fast);
        }     
            return 0;
    };
    
    this.checkPalin = function(slow,stack){
        while(slow!=null)
        {
            if(slow.data != stack.pop())
                return 0;
            slow=slow.next;
        }
        return 1;
    };
    
    this.palindrome = function(){debugger;
        var slow=this.head;
        var fast = this.head;
        var stack = new Array();
        while(fast!=null && fast.next!=null){
            stack.push(slow.data);
            slow=slow.next;
            fast=fast.next.next;
        }
        if(fast==null)
            return this.checkPalin(slow,stack);
 		else
        	return this.checkPalin(slow.next,stack);
    }
    
    this.palinRecUtil = function(head, n){debugger;
        if(n==null)
            return head;
        var result = this.palinRecUtil(head, n.next);
        if(result==null)
            return null;
        
        if(result.data==n.data)
            return head.next;
        else
            return null;
    };
    
    this.palinRec = function(){debugger;
        if(this.head==null)
            return 0;
        return this.palinRecUtil(this.head, this.head.next);
    }

}


var ll1 = new LinkedList();
var ll2 = new LinkedList();
ll1.insert(1);
ll1.insert(2);
ll1.insert(2);
ll1.insert(1);
//ll1.insert(1);
//ll1.insert(3);
ll2.insert(1);
ll2.insert(2);
var third = ll2.insert(3);
ll2.insert(4);
ll2.insert(5);
ll2.insert(6);
var last = ll2.insert(7);
last.next = third;
debugger;
console.log("hi");
alert(ll1.palinRec());
//ll.removeDup();
//console.log(ll.kthFrmLast(0));
//console.log(ll.kthFrmLastRec1(ll.head, 3).data);
//ll.deleteNode(ll.head.next.next.next.next);
//ll.partitionByX1(4);
//console.log(ll1.sumNum(ll1.head,ll2.head));
//console.log(ll1.easySum(ll1.head, ll2.head));
//console.log(ll1.sumNumbers(ll1.head, ll2.head));
