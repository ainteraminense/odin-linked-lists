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

console.log("The size of the list is:");
console.log(list.size());

console.log("The head is:");
console.log(list.listHead());

console.log("And tail...");
console.log(list.tail());

console.log("At index 2 should return cat");
console.log(list.at(2));

console.log("Pop should pop rat");
console.log(list.pop());
console.log(list.toString());

console.log("Contains dog should return true");
console.log(list.contains("dog"));
console.log("Contains tiger should return false");
console.log(list.contains("tiger"));


console.log("Find index of parrot should return 2");
console.log(list.findIndex("parrot"));




