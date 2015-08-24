function DoublyLL() {
    var count = 0;
    var head = null;
    var createnode = function (data) {
        count++;
        var node = {
            data: data,
            next: null,
            prev: null
        };
        return node;
    };

    this.insert = function (data) {debugger;
        debugger;
        if (head == null) head = createnode(data);
        else {
            var temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = createnode(data);
            temp.next.prev = temp;
        }
    };
    
    this.insertAt = function(position, data){
        if(position>=0 && position<=count)
        {
            var newnode = createnode(data);
            count++;
            if(position==0){              
                newnode.next = head;
                head = newnode;
            }
            else{ 
                var temp = head;
                var prev = null;
                var i = 0;
                while(i<position)
                {
                    prev=temp;
                    temp=temp.next;
                    i++;
                }
                newnode.next = temp;
                newnode.prev = prev;
                prev.next=newnode;
            }
        }
    }
    
    this.print = function(){
        console.log(head);
    }
}


var dl = new DoublyLL();
dl.insert(1);
dl.insert(3);
dl.insert(4);
dl.insertAt(1,2);
console.log(dl.print());