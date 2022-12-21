
const Node = function (newValue) {
    const value = newValue;
    let left = undefined,
        right = undefined;

    return { value, left, right };
}

const Tree = {
    firstNode: undefined,
    addNode: function (value) {
        const newNode = Node(value);

        if (this.firstNode === undefined) {
            this.firstNode = newNode;
            return;
        }

        let currentNode = this.firstNode;

        while (currentNode !== undefined) {
            if (value < currentNode.value) {
                if (currentNode.left === undefined) {
                    currentNode.left = newNode;
                    break;
                }
                else
                    currentNode = currentNode.left;
            }
            else {
                if (currentNode.right === undefined) {
                    currentNode.right = newNode;
                    break;
                }
                else
                    currentNode = currentNode.right;
            }
        }
    },
    fromArray: function (array) {
        array.forEach(el => {
            this.addNode(el);
        })
        return this;
    },
    get: function (value) {
        if (this.firstNode === undefined)
            return null;

        let currentNode = this.firstNode;
        while (currentNode !== undefined) {

            if (value === currentNode.value)
                return currentNode;

            if (value > currentNode.value)
                currentNode = currentNode.right;
            else if (value < currentNode.value)
                currentNode = currentNode.left;
        }

        return null;
    }
}

const array = [5, 2, 3, 4, 5, 1, 1, 2, 12, 3, 5, 65, 6, 13];
const tree = Object.create(Tree);
tree.fromArray(array);
console.log(tree);

const searchResult = tree.get(222);
console.log(`Search result: ${searchResult !== null ? searchResult.value : "not value found"}`);
