from __future__ import annotations

from typing import Generic, TypeVar

T = TypeVar("T")


class Node(Generic[T]):
    def __init__(self, value: T):
        self._value: T = value
        self._next: Node[T] | None = None

    @property
    def value(self) -> T:
        return self._value

    @property
    def next(self) -> Node[T] | None:
        return self._next


class LinkedList(Generic[T]):
    def __init__(self):
        self._head: Node[T] | None = None
        self._tail: Node[T] | None = None
        self._length: int = 0

    @property
    def head(self) -> Node[T] | None:
        return self._head

    @property
    def tail(self) -> Node[T] | None:
        return self._tail

    @property
    def length(self) -> int:
        return self._length

    def append(self, value: T) -> None:
        node = Node(value)

        if self._tail:
            self._tail._next = node
        else:
            self._head = node

        self._tail = node
        self._length += 1

    def find(self, value: T) -> Node[T] | None:
        current = self._head

        while current:
            if current.value == value:
                return current
            current = current.next

        return None

    def index(self, value: T) -> int:
        current = self._head
        index = 0

        while current:
            if current.value == value:
                return index
            current = current.next
            index += 1

        return -1

    def reverse(self) -> Node[T] | None:
        """Reverse

        Reverse the linked list, return the new head of the reversed
        linked list.

        Returns:
            Node[T] | None: The new head of the reversed linked list.
        """
        previous = None
        current = self._head

        while current:
            next = current.next
            current._next = previous
            previous = current
            current = next

        return previous

    def cycle(self) -> bool:
        slow = self._head
        fast = self._head

        while fast and fast.next:
            assert slow is not None
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                return True

        return False
