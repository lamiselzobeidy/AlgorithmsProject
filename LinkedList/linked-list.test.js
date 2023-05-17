const path = require('path');
const { LinkedList } = require(path.join(
    __dirname,
    "linked-list.js"
));

describe('Linked list', () => {
    test('inserting value in linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList.insert(3)).toEqual({ "next": null, "value": 3 });
        expect(linkedList.insert(4)).toEqual({ "next": null, "value": 4 });
    });

    test('inserting head in linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList.insertHead(3)).toEqual({ "next": null, "value": 3 });
        expect(linkedList.insertHead(4)).toEqual({ "next": { "next": null, "value": 3 }, "value": 4 });
    });

    test('inserting at certain index in linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(6);
        linkedList.insert(7);
        linkedList.insert(8);
        expect(linkedList.insertIndex(20, 1)).toEqual({"next": {"next": {"next": null, "value": 8}, "value": 7}, "value": 20});
    });

    test('removing value from linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(3);
        linkedList.insert(7);
        linkedList.insert(5);
        linkedList.insert(4);
        linkedList.insert(9);
        expect(linkedList.remove(3)).toEqual({ "next": null, "value": 9 });
        expect(linkedList.remove(9)).toEqual({ "next": null, "value": 4 });
    });

    test('removing head from linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(3);
        linkedList.insert(7);
        expect(linkedList.removeHead()).toEqual({ "next": { "next": null, "value": 7 }, "value": 3 });
        expect(linkedList.removeHead()).toEqual({ "next": null, "value": 7 });
    });

    test('removing value from a certain index in linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(6);
        linkedList.insert(7);
        linkedList.insert(8);
        expect(linkedList.removeIndex(2)).toEqual({"next": null, "value": 8});
    });
})

