class NodeTree {
    data;
    leftNode;
    rigthNode;
    constructor(data) {
        this.data = data;
        this.leftNode = null;
        this.rigthNode = null;
    }
}

class Tree {
    root;
    constructor(data) {
        this.root = new NodeTree(data)
    }

    #ordainedRecurvise(node) {
        if (node !== null) {
            this.#ordainedRecurvise(node.leftNode);
            console.log(node.data);
            this.#ordainedRecurvise(node.rigthNode);
        }

    }

    ordained() {
        this.#ordainedRecurvise(this.root);
    }

}



/**
          A
       /    \
      B      C
    /  \   /  \
   H    J  D   E
 */
const rootTree = new Tree('A');
const tr1 = new NodeTree('B');
const tr2 = new NodeTree('C');
const tr1S1 = new NodeTree('H');
const tr1S2 = new NodeTree('J');
const tr2S1 = new NodeTree('D');
const tr2S2 = new NodeTree('E');

rootTree.root.leftNode = tr1;
rootTree.root.rigthNode = tr2;

tr1.leftNode = tr1S1; 
tr1.rigthNode = tr1S2;

tr2.leftNode = tr2S1; 
tr2.rigthNode = tr2S2;

rootTree.ordained();