// Linked List TypeScript

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private size: number = 0;

  get length(): number {
    return this.size;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Append a new node with a given `value` of type `T` to the end of
   * the linked list.
   *
   * @param {T} value - The value to be appended to the linked list.
   * @returns {this} The linked list instance.
   */
  append(value: T): this {
    const node = new Node(value);

    // Check if the linked list is empty
    if (this.tail) {
      // Not empty, append new node to the tail
      this.tail.next = node;
    } else {
      // Empty, set the new node as the head
      this.head = node;
    }

    // Update the tail as the last node
    this.tail = node;
    // Update the size of the linked list
    this.size++;

    return this
  }
}

export { LinkedList };
