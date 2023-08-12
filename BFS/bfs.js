function bfs(graph, startNode) {
    const queue = [startNode];
    const visited = new Set();
    const result = [];

    while (queue.length) {
        const vertex = queue.shift();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of graph[vertex]) {
                queue.push(neighbor);
            }
        }
    }

    return result;
}

module.exports = bfs;