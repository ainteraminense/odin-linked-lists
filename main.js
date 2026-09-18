import { LinkedList } from "./linked-list.js";
import { Node } from "./node.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("After append...");
console.log(list.toString());

console.log("Prepend rat...");
list.prepend("rat");
console.log(list.toString());




