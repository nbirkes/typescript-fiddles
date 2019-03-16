
export class LinkedList<T> {
  private head?: Node<T>;

  constructor(initialValue?: T[]) {
    if (!initialValue) return;
    initialValue.forEach(it => this.append(it));
  }

  prepend(data: T): Node<T> {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  append(data: T): Node<T> {
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

  getValueAt(index: number): T | undefined {
    let node = this.getNodeAt(index);
    if (!node) return undefined;
    return node.data;
  }

  private getNodeAt(index: number): Node<T> | undefined {
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

  insertAt(index: number, data: T): Node<T> | undefined {
    if (index < 0) throw new Error('Index out of bounds');

    if (!this.head) {
      this.head = new Node(data);
      return undefined;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return undefined;
    }

    const previous = this.getNodeAt(index - 1);

    if (!previous) throw new Error('Index out of bounds');

    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head;
  }

  deleteFirst(): Node<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    this.head = this.head.next;
    return this.head;
  }

  deleteLast(): Node<T> | undefined {
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

    const previous = this.getNodeAt(index - 1);

    if (!previous || !previous.next) {
      return undefined;
    }

    previous.next = previous.next.next;
    return this.head
  }

  clear(): void {
    this.head = undefined;
  }

  toArray(): T[] {
    const nodes: T[] = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  length(): number {
    return this.toArray().length;
  }
}

class Node<T> {
  readonly data: T;
  next?: Node<T>;

  constructor(data: T, next?: Node<T>) {
    this.data = data;
    this.next = next;
  }
}
