// Given the heads of two individually sorted linked lists, your task is to merge them into a single sorted linked list and return its head. The important constraint is that you must splice together the actual nodes from the two input lists rather than creating new nodes with copied values — meaning you are rewiring the next pointers of the existing nodes to build the merged result. For example, if you have [1, 2, 4] and [1, 3, 4], you should return [1, 1, 2, 3, 4, 4] by interleaving the nodes from both lists in the correct sorted order. The merging process is similar to the merge step in merge sort, where you repeatedly compare the front nodes of both lists and pick the smaller one to append to your result, advancing that list's pointer forward until one of the lists is exhausted, at which point you can simply attach the remaining portion of the other list since it is already sorted. Edge cases to consider include both lists being empty which should return null, or one list being empty while the other has nodes in which case you simply return the non-empty list as is. Both lists are guaranteed to be sorted in non-decreasing order, and each list can have anywhere from zero to fifty nodes with values ranging from -100 to 100.
var mergeTwoLists = function(list1, list2){
    let dummy = new ListNode(-1);
    let curr = dummy;

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            curr.next = list1;
            list1 = list1.next;
        }
        else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    curr.next = list1 !== null ? list1 : list2;

    return dummy.next;
};
