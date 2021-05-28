import { DataNode } from "./node.js";

export class LinkedList {
  head = null
  constructor () {
    // Create initial internal Node that will be the placeholder for future operations
    this.head = new DataNode("")
    this.head.next = null
    this.head.prev = null
  }

  InsertEnd(data) {
    let tmpNode = this.head
    while(tmpNode.prev != null) {
      tmpNode = tmpNode.prev
    }
    // tmpNode must be the tail
    let newNode = new DataNode(data)
    tmpNode.prev = newNode
  }

  InsertHead(node) {

  }

  InsertAt(node, pos) {

  }

  PrintList() {
    let tmp = this.head
    while(tmp.prev != null) {
      tmp = tmp.prev
      console.log(`Data: ${tmp.data}`)
    }

  }
}



/*
The LinkedList object can create and manage chained Nodes that refer to each other
HOW TO BUILD A LINKED LIST
   - The LinkedList object maintains a property that refers to the first [Node] in the list. 
   - The first Node inserted will have its [Prev] property set Null to indicate that it's the last in the LinkedList

Node
A node contains a value/data and a reference to surrounding Nodes. 

<-[Next] is towards the Head, Prev is towards the tail [Prev]->
*/

/*
InsertEnd():
  - Find the current last Node by asking each Node if its prev property is null
  - If a Node has a prev property of null, do the following
    - That Nodes prev property will now be set to the Node being inserted
    - The Node being inserted will have its prev property set to null and its next property set to the current tail Node 
*/