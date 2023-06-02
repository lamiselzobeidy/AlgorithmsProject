class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    //insert divided into two function to recursively insert node to the tree
    insert(value) {
        const newNode = new TreeNode(value);

        // tree is empty, make current node root
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
        return this.root;
    }

    insertNode(node, newNode) {
        //if value is smaller than node then go left
        if (newNode.value < node.value) {
            // if left is empty insert here
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                // recusively search on the left side of the tree
                this.insertNode(node.left, newNode);
            }
        }

        // if value is bigger than node then go right
        else {
            // if right is empty insert here
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                // recusively search on the right side of the tree
                this.insertNode(node.right, newNode);
            }
        }
    }

    //remove divided into two function to recursively remove node from the tree
    remove(value) {
        this.root = this.removeNode(this.root, value);
        return this.root;
    }

    removeNode(node, value) {

        // tree is empty, return null
        if (node === null) {
            return null;
        }

        //if value is smaller than node then go left
        else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        }

        //if value is bigger than node then go left
        else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        }

        // if value is the current node
        else {
            // node has no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            //node has one child
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // node has two children
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }

    //traversing the tree
    inOrderTraversal(root) {
        let dummy = root;
        if (dummy !== null) {
            this.inOrderTraversal(dummy.left);
            console.log(dummy.value);
            this.inOrderTraversal(dummy.right);
        }
    }

    preOrderTraversal(root) {
        let dummy = root;
        if (dummy !== null) {
            console.log(dummy.value);
            this.preOrderTraversal(dummy.left);
            this.preOrderTraversal(dummy.right);
        }
    }

    postOrderTraversal(root) {
        let dummy = root;
        if (dummy !== null) {
            this.postOrderTraversal(dummy.left);
            this.postOrderTraversal(dummy.right);
            console.log(dummy.value);
        }
    }

    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    search(node, data) {
        // if tree is empty return null
        if (node === null) {
            return null;
        }

        // if value is smaller than node then go left
        else if (data < node.value) {
            return this.search(node.left, data);
        }

        // if value is bigger than node then go right
        else if (data > node.value) {
            return this.search(node.right, data);
        }

        // found node
        else {
            return node;
        }
    }
}

const BSTT = new BST();


//insert function should only take value
BSTT.insert(30);
BSTT.insert(20);
BSTT.insert(40);
BSTT.insert(70);
BSTT.insert(60);
BSTT.insert(80);

module.exports = { TreeNode, BST }
