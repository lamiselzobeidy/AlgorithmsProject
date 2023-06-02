class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // insert tail
    insert = (value) => {
        this.length++;
        // create the node first
        let newNode = new Node(value);

        if (this.tail) {
            // if linked list is not empty insert the new node as the tail
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode;
        }

        //   if the list has only one node 
        this.head = this.tail = newNode;
        return newNode;
    }

    // remove tail
    remove = () => {
        if (this.tail) {
            // remove 1 for the node being removed
            this.length--;
            const tailNode = this.tail;

            // loop until the node before tail
            let currentNode = this.head;
            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }

            // remove tail an make nodeBeforeTail the new tail
            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;

            // return removed node
            return tailNode;
        }
        // list is empty
        return undefined;
    }

    insertHead = (value) => {
        // add 1 for the node being removed
        this.length++;
        let newNode = new Node(value);

        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }

        //list is empty
        this.head = this.tail = newNode;
        return newNode;
    }

    removeHead = () => {
        if (this.head) {
            this.length--;
            const removedNode = this.head;
            // make the second node in the list thenew head 
            this.head = this.head.next;
            return removedNode;
        }
        // In case the list is empty
        return undefined;
    }

    insertIndex = (value, index) => {
        // error index out of bound
        if (index >= this.length) {
            throw new Error("Insert index out of bounds");
        }
        // insert node at the begining of the list
        if (index === 0) {
            return this.insertHead(value);
        }

        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        const newNode = new Node(value);
        // make the node points to the one that has its index at the list
        newNode.next = currentNode;
        // and make the one before it points at the node we want to insert
        previousNode.next = newNode;
        this.length++;
        return newNode;
    }

    removeIndex = (index) => {
        // error index out of bound
        if (index >= this.length) {
            throw new Error("Remove index out of bounds");
        }
        // index is the head node
        if (index === 0) {
            return this.removeHead();
        }
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }

    print = () => {
        // print all nodes in the list starting from head till tail
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.insert(6);
linkedList.print();
linkedList.insert(7);
linkedList.print();

linkedList.insert(8);
linkedList.insertIndex(20, 1);

console.log("length of the linked list: ", linkedList.length);
console.log("*****after inserting 20 at index 1*****")
linkedList.print();

linkedList.insert(5);
linkedList.insert(22);
linkedList.insert(11);
linkedList.insert(10);
linkedList.removeIndex(2); // remove 8

console.log("length of the linked list: ", linkedList.length);
console.log("*****after removing node at index 2*****")

linkedList.print();


module.exports = {Node, LinkedList}
