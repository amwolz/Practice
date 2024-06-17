# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def searchBST(self, root, val):
        """
        :type root: TreeNode
        :type val: int
        :rtype: TreeNode
        """

        if not root:
            return None

        if val < root.val:
            return self.searchBST(root.left, val)
        elif val > root.val:
            return self.searchBST(root.right, val)
        else:
            return root
        
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def insertIntoBST(self, root, val):
        """
        :type root: TreeNode
        :type val: int
        :rtype: TreeNode
        """
        if not root:
            return TreeNode(val)

        if val > root.val:
            root.right = self.insertIntoBST(root.right, val)
        elif val < root.val:
            root.left = self.insertIntoBST(root.left, val)
        return root
    
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def findmin(self, root):
        curr = root
        while curr and curr.left:
            curr = curr.left
        return curr

    def deleteNode(self, root, key):
        """
        :type root: TreeNode
        :type key: int
        :rtype: TreeNode
        """
        if not root:
            return root
        
        if key < root.val:
            root.left = self.deleteNode(root.left, key)
        elif key > root.val:
            root.right = self.deleteNode(root.right, key)
        else:
            if not root.left:
                return root.right
            elif not root.right:
                return root.left
            else:
                min = self.findmin(root.right)
                root.val = min.val
                root.right = self.deleteNode(root.right, min.val)
        
        return root

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        lst = []
        
        def inorder(root):
            if not root:
                return
            inorder(root.left)
            lst.append(root.val)
            inorder(root.right)
        
        inorder(root)
        return lst
    
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        queue = deque()
        output = []

        queue.append(root)
        
        while queue:
            level = []
            for i in range(len(queue)):
                current = queue.popleft()
                if current:
                    level.append(current.val)
                    queue.append(current.left)
                    queue.append(current.right)
            if level:
                output.append(level)
        
        return output
    
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def canReachLeaf(root):
    if not root or root.val == 0:
        return False
    
    if not root.left and not root.right:
        return True
    if canReachLeaf(root.left):
        return True
    if canReachLeaf(root.right):
        return True
    return False

def leafPath(root, path):
    if not root or root.val == 0:
        return False
    path.append(root.val)

    if not root.left and not root.right:
        return True
    if leafPath(root.left, path):
        return True
    if leafPath(root.right, path):
        return True
    path.pop()
    return False

class Solution(object):
    def hasPathSum(self, root, sum):
        if not root:
            return False
        de = [
            (root, sum - root.val),
        ]
        while de:
            node, curr_sum = de.pop()
            if not node.left and not node.right and curr_sum == 0:
                return True
            if node.right:
                de.append((node.right, curr_sum - node.right.val))
            if node.left:
                de.append((node.left, curr_sum - node.left.val))
        return False
        
def push(self, val):
    self.heap.append(val)
    i = len(self.heap) - 1

    # Percolate up
    while i > 1 and self.heap[i] < self.heap[i // 2]:
        tmp = self.heap[i]
        self.heap[i] = self.heap[i // 2]
        self.heap[i // 2] = tmp
        i = i // 2

def pop(self):
    if len(self.heap) == 1:
        return None
    if len(self.heap) == 2:
        return self.heap.pop()

    res = self.heap[1]   
    # Move last value to root
    self.heap[1] = self.heap.pop()
    i = 1
    # Percolate down
    while 2 * i < len(self.heap):
        if (2 * i + 1 < len(self.heap) and 
        self.heap[2 * i + 1] < self.heap[2 * i] and 
        self.heap[i] > self.heap[2 * i + 1]):
            # Swap right child
            tmp = self.heap[i]
            self.heap[i] = self.heap[2 * i + 1]
            self.heap[2 * i + 1] = tmp
            i = 2 * i + 1
        elif self.heap[i] > self.heap[2 * i]:
            # Swap left child
            tmp = self.heap[i]
            self.heap[i] = self.heap[2 * i]
            self.heap[2 * i] = tmp
            i = 2 * i
        else:
            break
    return res

def heapify(self, arr):
    # 0-th position is moved to the end
    arr.append(arr[0])

    self.heap = arr
    cur = (len(self.heap) - 1) // 2
    while cur > 0:
        # Percolate down
        i = cur
        while 2 * i < len(self.heap):
            if (2 * i + 1 < len(self.heap) and 
            self.heap[2 * i + 1] < self.heap[2 * i] and 
            self.heap[i] > self.heap[2 * i + 1]):
                # Swap right child
                tmp = self.heap[i]
                self.heap[i] = self.heap[2 * i + 1]
                self.heap[2 * i + 1] = tmp
                i = 2 * i + 1
            elif self.heap[i] > self.heap[2 * i]:
                # Swap left child
                tmp = self.heap[i]
                self.heap[i] = self.heap[2 * i]
                self.heap[2 * i] = tmp
                i = 2 * i
            else:
                break
        cur -= 1

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # base case if len(stones) < 1

        while len(stones) > 1:
            
            sorted = self.sort(stones)

            print(sorted)

            if sorted[0] == sorted[1] and len(sorted) == 2:
                return 0
            elif sorted[0] == sorted[1]:
                stones.pop(1)
                stones.pop(0)
            else:
                sorted[0] = sorted[0] - sorted[1]
                sorted.pop(1)

            stones = sorted
        
        return stones[0]
                
    def sort(self, input_list: List[int]) -> List[int]:
        n = len(input_list)
        for i in range(n):
            for j in range(0, n-i-1):
                if input_list[j] < input_list[j+1]:
                    # Swap if the element found is less than the next element
                    input_list[j], input_list[j+1] = input_list[j+1], input_list[j]
        return input_list

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minHeap = []
        for x, y in points:
            dist = (x ** 2) + (y ** 2)
            minHeap.append((dist, x, y))
        
        heapq.heapify(minHeap)
        res = []
        for _ in range(k):
            _, x, y = heapq.heappop(minHeap)
            res.append((x, y))
        return res
    
class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        nums = [-num for num in nums]
        minHeap = heapq.heapify(nums)

        kthnum = 0
        for i in range(k):
            kthnum = heapq.heappop(nums)

        return -kthnum