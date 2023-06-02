const path = require('path');
const { WeightedGraph } = require(path.join(
    __dirname,
    "dijkstra.js"
));
const graph = new WeightedGraph();

describe('Dijkstra', () => {
    test('add vertex function', () => {
        expect(graph.addVertex("A")).toEqual({ "A": [] });
        expect(graph.addVertex("B")).toEqual({ "A": [], "B": [] });
        expect(graph.addVertex("C")).toEqual({ "A": [], "B": [], "C": [] });
        expect(graph.addVertex("D")).toEqual({ "A": [], "B": [], "C": [], "D": [] });
        expect(graph.addVertex("E")).toEqual({ "A": [], "B": [], "C": [], "D": [], "E": [] });
    });
    test('add edge function', () => {
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");
        expect(graph.addEdge("A", "B", 4)).toEqual({"A": [{"node": "B", "weight": 4}], "B": [{"node": "A", "weight": 4}], "C": [], "D": [], "E": [], "F": []});
    });
    test('add edge function', () => {
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");
        graph.addEdge("A", "B", 4);
        graph.addEdge("A", "C", 2);
        graph.addEdge("B", "E", 3);
        graph.addEdge("C", "D", 2);
        graph.addEdge("C", "F", 4);
        graph.addEdge("D", "E", 3);
        graph.addEdge("D", "F", 1);
        graph.addEdge("E", "F", 1);
        expect(graph.Dijkstra("A", "E")).toEqual(["A", "C", "D", "F", "E"]);
    });

});