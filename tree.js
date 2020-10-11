class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    insert_child(value) { // O(1)
        const new_tree = new Tree(value);
        this.children.push(new_tree);
        return new_tree;
    }

    remove_child(value){

    }
}

const myTree = new Tree(1)
console.log(myTree)