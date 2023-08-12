const bfs = require('./bfs');

describe('BFS function', () => {
    test('bfs function returns the order in which the graph was traversed', () => {
        expect(bfs({
            A: ['B', 'D'],
            B: ['A', 'C', 'E'],
            C: ['B'],
            D: ['A', 'E'],
            E: ['B', 'D', 'F'],
            F: ['E'],
        }, 'A')).toEqual(['A', 'B', 'D', 'C', 'E', 'F']);
    });
});