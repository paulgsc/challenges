"""
Write function square_sums_row ( or squareSumsRow or SquareSumsRow ) that, given integer number N (in range 2..43), returns array of integers 1..N arranged in a way, so sum of each 2 consecutive numbers is a square.

Solution is valid if and only if following two criterias are met:

Each number in range 1..N is used once and only once.
Sum of each 2 consecutive numbers is a perfect square.
Example
For N=15 solution could look like this:

[ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]


"""
from itertools import permutations

def is_perfect_square(n):
    """Check if a number is a perfect square."""
    return int(n ** 0.5) ** 2 == n

def squareSumsRow(N):
    """Arrange numbers 1..N such that the sum of each 2 consecutive numbers is a perfect square."""
    for perm in permutations(range(1, N + 1)):
        if all(is_perfect_square(perm[i] + perm[i + 1]) for i in range(N - 1)):
            return list(perm)
    return []

# Example usage:
N = 8
result = squareSumsRow(N)
print(result)
