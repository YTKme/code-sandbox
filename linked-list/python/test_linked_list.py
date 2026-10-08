import unittest

from linked_list import LinkedList

LINKED_LIST_DATA = [
    64,
    79,
    31,
    7,
    87,
    63,
    83,
    92,
    66,
    53,
    50,
    2,
    90,
    6,
    44,
    4,
    40,
    78,
    26,
    84,
]


class TestLinkedList(unittest.TestCase):
    @classmethod
    def setUpClass(cls): ...

    def test_create_initialized(self):
        linked_list = LinkedList()

        self.assertIsNotNone(linked_list)
        print(f"Linked List Length: {linked_list.length}")
        self.assertEqual(linked_list.length, 0)

    def test_append(self):
        linked_list = LinkedList()

        for value in LINKED_LIST_DATA:
            linked_list.append(value)

        self.assertEqual(linked_list.length, len(LINKED_LIST_DATA))

    def test_find_first(self):
        linked_list = LinkedList()

        for value in LINKED_LIST_DATA:
            linked_list.append(value)

        find_first_value = 53

        node = linked_list.find(find_first_value)

        self.assertIsNotNone(node)
        assert node is not None
        self.assertEqual(node.value, find_first_value)

    def test_find_none(self):
        linked_list = LinkedList()

        for value in LINKED_LIST_DATA:
            linked_list.append(value)

        find_none_value = 100

        node = linked_list.find(find_none_value)

        self.assertIsNone(node)

    def test_index_first(self):
        linked_list = LinkedList()

        for value in LINKED_LIST_DATA:
            linked_list.append(value)

        find_first_value = 53

        self.assertEqual(9, LINKED_LIST_DATA.index(find_first_value))

    def test_index_none(self):
        linked_list = LinkedList()

        for value in LINKED_LIST_DATA:
            linked_list.append(value)

        find_none_value = 100

        self.assertEqual(-1, linked_list.index(find_none_value))

    def test_reverse(self):
        linked_list = LinkedList()

        for value in LINKED_LIST_DATA:
            linked_list.append(value)

        reversed_head = linked_list.reverse()

        self.assertIsNotNone(reversed_head)
        assert reversed_head is not None
        self.assertEqual(reversed_head.value, LINKED_LIST_DATA[-1])

    def test_cycle(self):
        linked_list = LinkedList()

        for value in LINKED_LIST_DATA:
            linked_list.append(value)

        # Create a cycle in the linked list
        if linked_list.head and linked_list.tail:
            linked_list.tail._next = linked_list.head

        self.assertTrue(linked_list.cycle())


def suite():
    """Test Suite"""

    test_case_list = (TestLinkedList,)

    # Create the Unit Test Suite
    suite = unittest.TestSuite()

    # Add the Unit Test
    for test_case in test_case_list:
        test_list = unittest.defaultTestLoader.loadTestsFromTestCase(test_case)
        suite.addTests(test_list)

    # Return the Test Suite
    return suite


if __name__ == "__main__":
    runner = unittest.TextTestRunner()
    runner.run(suite())
