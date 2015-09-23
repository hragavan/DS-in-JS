// Graphs

function graph() {
    var vertices = [];
    var adjList = {};

    this.addVertex = function (v) {
        vertices.push(v);
        adjList[v] = [];
    };

    this.addEdge = function (v, w) {
        if (v in adjList) adjList[v].push(w);
        if (w in adjList) adjList[w].push(v);
    };
    
    this.addEdgewithWeight = function (v, w, weight) {
        if (v in adjList){ 
            var obj ={};
            obj[w] = weight;
            adjList[v].push(obj);
        }
        if (w in adjList) {
            var obj ={};
            obj[v] = weight;
            adjList[w].push(obj);
        }
    };

    this.printGraph = function () {
        for (var key in adjList) {
            var arr = adjList[key];
            console.log(key + "->");
            for (var i in arr) {
                console.log(arr[i] + ",");
            }
        }
    }

    this.BFS = function (root) {
        debugger;
        var visited = [];
        var queue = new Array();
        queue.push(root);
        visited.push(root);
        while (queue.length) {
            var curr = queue.shift();
            console.log(curr);

            var adjlist = adjList[curr];
            for (var i = 0; i < adjlist.length; i++) {
                if (visited.indexOf(adjlist[i]) < 0) {
                    queue.push(adjlist[i]);
                    visited.push(adjlist[i]);
                }
            }
        }
    }

    this.shortestPath = function (v1) {
        debugger;
        var visited = [];
        var preds = {};

        var queue = new Array();

        queue.push(v1);
        visited.push(v1);
        while (queue.length) {
            var curr = queue.shift();
            // console.log(curr);
            // if(curr==v2)
            //   break;
            var adjlist = adjList[curr];
            for (var i = 0; i < adjlist.length; i++) {
                if (visited.indexOf(adjlist[i]) < 0) {
                    queue.push(adjlist[i]);
                    visited.push(adjlist[i]);
                    preds[adjlist[i]] = curr;
                }
            }
        }
        debugger;
        for (var v in vertices) {
            if (vertices[v] !== v1) {
                var result = "";
                var output = new Array();
                var v2 = vertices[v];
                output.push(v2);
                for (k = v2; k != v1;) {
                    output.push(preds[k]);
                    k = preds[k];
                }
                while (output.length) {
                    result = result + output.pop() + "->";
                }
                console.log("start vertex is" + v1);
                console.log("end vertex is" + v2);
                console.log("path is" + result);
            }
        }
    }
    
    this.isInfinite = function(t1, timeLimit) {
                    var t2 = new Date().getTime();
                    if(t2 - t1 > timeLimit) {
                        return true;
                    } else return false;
                }
    
    this.getmin = function(q, d){
        var min = d[q[0]];
        var element = q[0];
        var pos = 0;
        for(var i=1;i<q.length;i++)
        {
            if(d[q[i]] < min){
                min = d[q[i]];
                element = q[i];
                pos = i;
            }
        }
        q.splice(pos,1);
        return element;
    }
    
    this.dijkstra = function(s, d){debugger;
        var queue = new Array();
        queue.push(s);
        var preds = [];
        var distance = [];
        for(var i in vertices){
            distance[vertices[i]] = Infinity;
            queue.push(vertices[i]);
        }
        preds[s]=undefined;
        distance[s]=0;
        console.log(distance);
        var t1 = new Date().getTime();
        while(queue.length){
            if(this.isInfinite(t1, 1500000)) {
                        alert('Loop stopped after 3 seconds')
                        break;
            }
            var curr = this.getmin(queue, distance);
            var neighbours = adjList[curr];
            for(var i=0;i<neighbours.length;i++)
            {
               var edgeVertex = Object.keys(neighbours[i]);
               var edgeWeight = neighbours[i][edgeVertex];
               var total = distance[curr]+edgeWeight;
               if(total < distance[edgeVertex]){
                   distance[edgeVertex] = total;
                   preds[edgeVertex] = curr;
               }
                
            }
        }
                                   
    };
}
var g = new graph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');
/*g.addEdge('a', 'b');
g.addEdge('a', 'd');
g.addEdge('a', 'e');
g.addEdge('b', 'c');
g.addEdge('d', 'e');
g.addEdge('e', 'f');*/

g.addEdgewithWeight('a', 'b', 1);
g.addEdgewithWeight('a', 'c', 2);
g.addEdgewithWeight('c', 'd', 5);
g.addEdgewithWeight('b', 'c', 1);
g.addEdgewithWeight('b', 'd', 10);
g.dijkstra('a', 'd');


//g.addEdge('c', 'b');
//find shortest path from c to all other vertices in the graph
//g.shortestPath('c');
//g.printGraph();



