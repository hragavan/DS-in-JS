//Hashtable

function LinkedList(){
    this.head = null;
    this.count = 0;
    this.node = function(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    };
    this.createnode = function(key, value){
        var node = {key: key, value: value, next: null};
        this.count++;
        return node;
    };
    this.append = function(key, value){
        if(this.head == null)
            this.head = new this.node(key, value);
        else{
            var temp = this.head;
            while(temp.next!=null)
            {
                temp = temp.next;
            }
            temp.next = new this.node(key, value);   
        }
    };
    this.getHead = function(){
        return this.head;
    };
}
function Hashtable(){
this.students=[];
    
    this.Hash = function(key){
        var hashval = 0;
        for(var i =0;i<key.length;i++)
        {
            hashval += key.charCodeAt(i);
        }
        return hashval%5;
    };
    
    this.keyValuePair = function(key, value){
      //  var node = {
    };
    this.set = function(key, value){
       // console.log(this);
        var position = this.Hash(key);
        //list.append(key, value)
        //console.log(list);
        if(this.students[position] == undefined){
            this.list = new LinkedList();
            console.log(this.list.append(key, value));
        	this.students[position] = this.list ;
        }
        else{
            var temp = this.students[position];
           	temp.append(key, value);
        }
    };
  	this.get = function(key){
        var position = this.Hash(key);
        var list = this.students[position];
        var head = list.head;
        while(head!=null){
            if(head.key == key)
                return head;
            else
                head=head.next;
        }
        return null;
    };
    
  	this.getAll = function(){
        return this.students;
    };
};

var h = new Hashtable();
h.set("harini", "maths");
h.set("riniha", "sciene");
h.set("rajul", "indus");
debugger;
var output = h.get("riniha");
console.log(output);