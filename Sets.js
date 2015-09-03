//Sets
function Set(){
var set={};

    this.add = function(el){
        set[el] = el;
    };
    
    this.get = function(){
        return set;
    };
    
    this.has = function(el){
        return set.hasOwnProperty(el);
    };
    
    this.keys = function(){
        return Object.keys(set);
    };
    
    this.values = function(){
        var values=[];
        for(var prop in set){
            values.push(set[prop]);
        }
        return values;
    };
    
    this.size = function(){
        return Object.keys(set).length;
    }
};

var s = new Set();
s.add(1);
s.add(2);
console.log(s.size());