# The Merge Two Sorted Lists problem requires combining two sorted linked lists into a single sorted linked list. You are given the heads of two linked lists, list1 and list2, where each list is already sorted in non-decreasing order. Your task is to merge these two lists by comparing their nodes and arranging them in a way that the resulting linked list remains sorted. The merged list should be formed by connecting the existing nodes from both lists rather than creating new nodes. Finally, return the head of the newly merged sorted linked list.
class Solution:
    def mergeTwoLists(self, list1, list2):
        dummy = ListNode(0)
        current = dummy

        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next

            current = current.next

        if list1:
            current.next = list1
        else:
            current.next = list2

        return dummy.next
