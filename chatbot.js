class Tree {
    constructor(question) {
        this.question = question;
        this.yes = null;
        this.no = null;
        this.recommendation = this.recommendation;
    }

    insert_child(question, side) {
        // O(1)
        const new_question = new Tree(question);
        this[side] = new_question;
        return new_question;
    }

}

const myTree = new Tree(1);
console.log(myTree);
