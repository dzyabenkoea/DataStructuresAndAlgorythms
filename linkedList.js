
const nodePrototype = {
    value: undefined,
    next: undefined,
    prev: undefined
}

const Node = function (value) {
    const node = Object.create(nodePrototype);
    node.value = value;
    return node;
}

const linkedListPrototype = {
    head: undefined,
    tail: undefined,
    size: 0,
    append: function (value) {
        const newNode = Node(value);
        if (this.head === undefined) {
            this.head = newNode;
        } else
            this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    },
    prepend: function (value) {
        const newNode = Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    },
    length: function () {
        return this.size;
    },
    generateNNodes(numberOfNodes) {
        for (let i = 0; i < numberOfNodes; i++) {
            const value = Math.floor(Math.random() * 20);
            this.append(value);
        }
    },
    at: function (index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
            if (node === undefined)
                break;
        }
        return node || null;
    },
    contains: function (value) {
        let node = this.head;
        while (node) {
            if (node.value === value)
                return true;
            node = node.next;
        }
        return false;
    },
    toString: function () {
        let outString = '';
        let node = this.head;
        while (node) {
            outString += `[${node.value}] ${node.next !== undefined ? "-> " : ""}`;
            node = node.next;
            if (node === undefined)
                break;
        }
        console.log(outString);
    },
    find: function () {
        let node = this.head;
        while (node) {
            if (node.value === this.value)
                return node;
            node = node.next;
            if (node === undefined)
                break;
        }
        return null;
    }
}

const LinkedList = function () {
    return Object.create(linkedListPrototype);
}

const list = LinkedList();
list.generateNNodes(5);
list.toString();

console.log(`List length: ${list.length()}`);
list.append(111);
list.prepend(222);
list.toString();

console.log(`List length: ${list.length()}`);

console.log(`First element in list: [${list.head.value}]`);
console.log(`Last element in list: [${list.tail.value}]`);

const index = 6;
const node = list.at(index);
console.log(`Element at index ${index}: [${node ? node.value : "not found"}]`);

console.log(`List contains 123: ${list.contains(123)}`);
console.log(`List contains 111: ${list.contains(111)}`);
list.toString();

const valueToFind = 123;
const valueIndex = list.find(valueToFind);
if (valueIndex !== null) {
    console.log(`Value "${valueToFind}" found at index ${valueIndex}`);
}
else {
    console.log(`Value "${valueToFind}" was not found`);
}