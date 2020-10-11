class BinaryTree {
    constructor(question) {
        this.question = question;
        this.yes = null;
        this.no = null;
    }

    insertChild(value) {}

    traverse(func) {
        func(this.question);
        if (this.left) this.yes.traverse(this.left);
        if (this.right) this.no.traverse(func);
        tree.children.forEach((child) => this.traverse(child));
    }

    contains(question) {
        if (this.question === question) {
            return true;
        }

        return (this.yes && this.yes.contains(question)) || (this.no && this.no.contains(question))
    }
}

export default BinaryTree;
