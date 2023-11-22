"""
Question: Implement a First In First Out (FIFO) queue using two stacks. 
The queue should support the following operations: enqueue (insert element), 
dequeue (remove and return the front element), and peek (return the front element without removing it).

"""


class QueueUsingStacks:
    def __init__(self):
        self.stack1 = []  # For enqueue
        self.stack2 = []  # For dequeue/peek

    def enqueue(self, element):
        # Push elements into stack1
        self.stack1.append(element)

    def dequeue(self):
        # If stack2 is empty, transfer elements from stack1
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())

        # Pop the front element from stack2
        if self.stack2:
            return self.stack2.pop()
        else:
            return None

    def peek(self):
        # If stack2 is empty, transfer elements from stack1
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())

        # Return the front element from stack2 without popping it
        if self.stack2:
            return self.stack2[-1]
        else:
            return None


# Example usage:
queue = QueueUsingStacks()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

print(queue.peek())  # Output: 1
print(queue.dequeue())  # Output: 1
print(queue.dequeue())  # Output: 2
print(queue.peek())  # Output: 3
