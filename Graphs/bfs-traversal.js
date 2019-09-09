/* Graphs: Breadth-first search */
// Youtube Video: https://www.youtube.com/watch?v=wu0ckYkltus
// Code Copied from: https://codepen.io/beaucarnes/pen/XgrXvw?editors=0012 


/**
 * Breadth First Search function
 * @param {*} graph : Array representation of the graph.
 * @param {*} root : Element from where we need to find the lenght.
 */
function bfs(graph, root) {
    var nodesLen = {};

    console.log(graph.length);
    for (var i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }

    // Element will have ddistance of 0 from itself.
    nodesLen[root] = 0;

    var queue = [root];
    var current;

    console.log(queue);
    console.log(nodesLen);


    while (queue.length != 0) {
        current = queue.shift();

        var curConnected = graph[current];
        var neighborIdx = [];
        var idx = curConnected.indexOf(1);
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }

        for (var j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }

    console.log(queue);
    return nodesLen;
};

var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 1));

console.log(parseInt('100', 2));