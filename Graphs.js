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
}
var g = new graph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');
g.addEdge('a', 'b');
g.addEdge('a', 'd');
g.addEdge('a', 'e');
g.addEdge('b', 'c');
g.addEdge('d', 'e');
g.addEdge('e', 'f');
//g.addEdge('c', 'b');
//find shortest path from c to all other vertices in the graph
g.shortestPath('c');
//g.printGraph();