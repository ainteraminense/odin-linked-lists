import {Node} from "./node.js"

export class LinkedList {
    constructor() {
        this.head = undefined;
    };

    append(value) {
        const node = new Node(value, null);
        if (this.head === undefined) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            } 
            temp.next = node;
        }
    };

    prepend(value) {
        const node = new Node(value, null);
        if (this.head === undefined) {
            this.head = node;
        } else {
        node.next = this.head;
        this.head = node;
        }
    };

    size() {
        if (this.head === undefined) {
            return 0;
        } else {
            let temp = this.head;
            let count = 0;
            while (temp.next != null) {
                temp = temp.next;
                count++;
            }
            return count;
        }
    };

    listHead() {
        return this.head.value;
    };

    tail() {
        if (this.head === undefined) {
            return undefined;
        } else {
            let temp = this.head;
            while(temp.next != null) {
                temp = temp.next;
            }
            return temp.value;
        }
    }

    at(index) {
        if (this.head == undefined) {
            return undefined;
        } else {
            let count = 0;
            let temp = this.head;
            while (count != index) {
                temp = temp.next;
                count++;
            }
            return temp.value;
        }
    }

    pop() {
        if (this.head === undefined) {
            return undefined;
        } else {
            let pop = this.head;
            this.head = this.head.next;
            return pop.value;
        }
    }

    contains(value) {
        if (this.head === undefined) {
            return false;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                if (temp.value === value) {
                    return true;
                }
                temp = temp.next;
            }
            return false;
        }
    }

    findIndex(value) {
        if (this.head === undefined) {
            return -1;
        } else {
            let count = 0;
            let temp = this.head;
            while (temp.next != null) {
                if (temp.value === value) {
                    return count;
                }
                temp = temp.next;
                count++;
            }
            return -1;
        }
    }

    toString() {
        let result = '';
        let temp = this.head;
        while (temp.next != null) {
            result = result + `( ${temp.value} ) -> `;
            temp = temp.next;
        }
        result = result + `( ${temp.value} )`;
        return result;
    }
}