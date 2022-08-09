function reverse(llist) {
    let head = llist;   // set a reference to head of linked list
    if (head === null ) {
        return;
    }

    let currentNode = head;
    let prevNode = null;
    let nextNode = null;

    //reverse list and adjust links
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = null;
    }

    head = prevNode; //reseting head
    return head;

}

