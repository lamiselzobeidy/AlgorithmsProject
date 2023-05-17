class TreeNode {
    public value: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    public root: TreeNode | null;
    constructor(root?: TreeNode) {
        this.root = root || null;
    }

    //recursive function to insert in the tree
    public insert(node: TreeNode | null = this.root, value:number): TreeNode {
        // base case
        if(node === null) {
            const root = new TreeNode(value);
            return root;
        }
        else {
            //insert smaller than head value to the left
            if(value<node.value) {
                node.left = this.insert(node.left, value);
            }
            //insert bigger than head value to the right
             else {
                node.right = this.insert(node.right, value);
            }
            return node;
        }
    }

    public search(node:TreeNode | null = this.root, value: number): TreeNode | null {
        let temp = node;
        if(temp === null){
            return null;
        }
        else if (temp.value === value){
            return temp;
        } else {
            if(value < temp.value) {
                return this.search(temp.left, value);
            } else {
                return this.search(temp.right, value);
            }
        }
    }

    //traversing the tree
    public inOrderTraversal(root: TreeNode | null = this.root): void {
        let dummy = root;
        if(dummy !== null) {
            this.inOrderTraversal(dummy.left);
            console.log(dummy.value);
            this.inOrderTraversal(dummy.right);
        }
    }

    public preOrderTraversal(root: TreeNode | null = this.root): void {
        let dummy = root;
        if(dummy !== null) {
            console.log(dummy.value);
            this.preOrderTraversal(dummy.left);
            this.preOrderTraversal(dummy.right);
        }
    }

    public postOrderTraversal(root: TreeNode | null = this.root): void {
        let dummy = root;
        if(dummy !== null) {
            this.postOrderTraversal(dummy.left);
            this.postOrderTraversal(dummy.right);
            console.log(dummy.value);
        }
    }

}

const head = new TreeNode(50);
head.left = new TreeNode(35);
head.right = new TreeNode(60);

const BSTT = new BST(head);


//insert function should only take value
BSTT.insert(BSTT.root, 30);
BSTT.insert(BSTT.root, 20);
BSTT.insert(BSTT.root, 40);
BSTT.insert(BSTT.root, 70);
BSTT.insert(BSTT.root, 60);
BSTT.insert(BSTT.root, 80);

// BSTT.preOrderTraversal();

//test cases to test insertion and traversal

console.log(BSTT.search(BSTT.root, 70));

module.exports = {TreeNode, BST}
