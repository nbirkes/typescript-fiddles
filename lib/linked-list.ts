main();

function main(): void {
  let list = new LinkedList();
  list.insertAtBeginning('one');
  list.insertAtEnd('three');
  list.insertAt('two', 1);
}

class LinkedList<T> {
  private head?: Node<T>;

  constructor() {
  }

  insertAtBeginning(data: T): Node<T> {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  insertAtEnd(data: T): Node<T> {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let tail: Node<T> = this.head;
    while (tail.next !== undefined) {
      tail = tail.next;
    }

    tail.next = newNode;
    return this.head;
  }

  getAt(index: number): Node<T> | undefined {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return undefined;
  }

  insertAt(data: T, index: number): Node<T> | undefined {
    if (!this.head) {
      this.head = new Node(data);
      return undefined;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return undefined;
    }

    const previous = this.getAt(index - 1);

    if (!previous) return undefined;

    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head
  }

  deleteFirstNode(): Node<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    this.head = this.head.next;
    return this.head;
  }

  deleteLastNode(): Node<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    if (!this.head.next) {
      this.head = undefined;
      return;
    }

    let previous = this.head;
    let tail = this.head.next;

    while (tail.next) {
      previous = tail;
      tail = tail.next;
    }

    previous.next = undefined;
    return this.head;
  }

  deleteAt(index: number): Node<T> | undefined {
    if (!this.head) {
      // this.head = new Node(data);
      return undefined;
    }

    if (index === 0) {
      this.head = this.head.next;
      return undefined;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return undefined;
    }

    previous.next = previous.next.next;
    return this.head
  }

  deleteList(): void {
    this.head = undefined;
  }
}

class Node<T> {
  private readonly data: T;
  next?: Node<T>;

  constructor(data: T, next?: Node<T>) {
    this.data = data;
    this.next = next;
  }
}
