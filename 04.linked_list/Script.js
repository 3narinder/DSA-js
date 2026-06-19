//?====================
//? LINKED LIST
//?====================

//?A linked list is a linear Data Structure where elements called nodes, are not stored contiguous in memory, instead each node contains data and reference or link to the next node in sequence.

//*---------------------
//* Create First Node
//*---------------------

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

//*---------------------------
//* Create First Linked List
//*---------------------------

// class LinkedLst {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }
// }

// const myLinkedList = new LinkedLst(1);

// console.log(myLinkedList);

//*---------------------------
//* PUSH method in linked list:
//*---------------------------
//? We need to create a new node at the end of our linked list
//* Three steps to push new node in linked list
//* step 1: create a new node
//* Step 2: Put that node at the end of our list
//* Step 3: Move reference of tail to new node

class LinkedLst {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //** PUSH METHOD */

  push(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }
}

const myLinkedList = new LinkedLst(1);

myLinkedList.push(10);

console.log(myLinkedList);
