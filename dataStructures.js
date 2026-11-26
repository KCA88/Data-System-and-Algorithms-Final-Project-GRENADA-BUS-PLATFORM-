//DOUBLY LINKED LIST START
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

//Gathers the Information and Moves it Accordingly
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
    }
//Checks that the information is correct and returns it to the list
    display() {
        let current = this.head;
        let stops = [];

        while (current != null) {
            stops.push(current.data);
            current = current.next;
        }
        return stops;
    }
}

//QUEUE START
class Queue {
    constructor() {
        this.item = [];
    }
//Adds a Bus to the back of the queue
enqueue(bus) {
    this.item.push(bus);
}
//Remove The Bus At The Front When Needed
dequeue() {
    if (this.items.length == 0) {
        return null;
    }
    return this.items.shift();
    }
//Return all waiting Buses to the Queue
display() {
    return this.items;
}
}
//BST (THE BINARY SEARCH TREE) START

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
// Adds a Bus Stop to the tree
insert(data) {
        let newNode = new TreeNode(data);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

insertNode(node, newNode) {
    let value = newNode.data.toLowerCase();
    let current = node.data.toLowerCase();

    if (value < current) {
    if (node.left == null) {
        node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else if (value > current) {
        if (node.right == null) {
            node.right = newNode;
        } else {
               this.insertNode(node.right, newNode);
        }
    }
}

//Searches For Anaother Bus Stop
search(name) {
    return this.searchNode(this.root, name.toLowerCase());
}

searchNode(node, name) {
    if (node == null) {
        return false;
    }
    if (name == node.data.toLowerCase()) {
        return true;
    }
    if (name < node.data.toLowerCase()) {
        return this.searchNode(node.left, name);
    } else {
        return this.searchNode(node.right, name);
    }
}

// Displays Every bus Stop Alphabetically
getAll(node = this.root, stops = []) {
        if (node != null) {
            this.getAll(node.left, stops);
            stops.push(node.data);
            this.getAll(node.right, stops);
        }
        return stops;
    }
}
