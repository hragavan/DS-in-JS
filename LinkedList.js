//if anything inside this function is declared as var, ex var count, then it wont be avaiable for the objects of this class, cos var means LOCAL
function LinkedList(){
    this.count=0;
    this.head = null;
    
    this.createNode = function(data){
        this.count++;
        var node = { data: data, next: null};
        return node;
    }
}

LinkedList.prototype.append = function(element){
    if(this.head == null)
    {
        this.head = this.createNode(element);
    }
    else {
        var temp = this.head;
        while(temp.next != null)
            temp = temp.next;
        temp.next = this.createNode(element);
    }
}

LinkedList.prototype.insertAt = function(position, element) {debugger;
if(position>=0 && position<=this.count) {
    var prev = null;
    var temp = this.head;                                                        
    var newnode = this.createNode(element);
    for(var i =0;i<position;i++)
    {
        prev = temp;
        temp = temp.next;
    }
    newnode.next = temp;
    if(prev!=null)
        prev.next=newnode;
    else
        this.head = newnode;
}
}

LinkedList.prototype.remove = function(element) {
    var temp = this.head;
    var prev = null;
    while(temp!=null && temp.data!=element)
    {
        prev = temp;
        temp=temp.next;
    }
    if(temp == null)
        alert("nothing to remove");
    else{
        if(prev == null)
            this.head = temp.next;
        else
        	prev.next = temp.next;
        delete temp;
        this.count--;
    }
}

LinkedList.prototype.toString = function(){

    var current = this.head, //{1}
        string = '';    //{2}

    while (current) {   //{3}
        string += current.data; //{4}
        current = current.next;   //{5}
    }
    return string;                //{6}
};
var ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.insertAt(1,0);
ll.remove(0);
console.log(LinkedList.count);
