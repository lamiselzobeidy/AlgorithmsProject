const path = require('path');
const { TreeNode, BST } = require(path.join(
  __dirname,
  "BST.js"
));

describe('Binary Search Tree', () => {
  test('inserting value in binary search tree', () => {
    const bst = new BST();
    expect(bst.insert(3)).toEqual({ "left": null, "right": null, "value": 3 });
    expect(bst.insert(5)).toEqual({ "left": null, "right": { "left": null, "right": null, "value": 5 }, "value": 3 });
  });

  test('removing value from binary search tree', () => {
    const bst = new BST();
    bst.insert(3);
    bst.insert(5);
    expect(bst.remove(3)).toEqual({ "left": null, "right": null, "value": 5 });
  });

  test('find minimum node in binary search tree', () => {
    const bst = new BST();
    bst.insert(3);
    bst.insert(5);
    bst.insert(9);
    bst.insert(1);
    bst.insert(8);
    expect(bst.findMinNode(bst.root)).toEqual({"left": null, "right": null, "value": 1});
  });

  test('search binary search tree', () => {
    const bst = new BST();
    bst.insert(3);
    bst.insert(5);
    bst.insert(9);
    bst.insert(1);
    bst.insert(8);
    expect(bst.search(bst.root,5)).toEqual({"left": null, "right": {"left": {"left": null, "right": null, "value": 8}, "right": null, "value": 9}, "value": 5});
  });
})