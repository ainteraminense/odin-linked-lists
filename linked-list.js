import {Node} from "./node.js"

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(node) {
        if (this.head === null) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.nextNode !== null) {
                temp = temp.nextNode;
            }
            temp.nextNode = node;
        }
    }
}