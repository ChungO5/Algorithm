def solution(my_string):
    answer = my_string.split(' ')
    return list(filter(lambda x : len(x) > 0, answer))