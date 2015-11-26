def largest_palindrome(min,max):
    answer_dict = {
        'factor1': [],
        'factor2': [],
        'palindrome_list': [],
        'largest_number': 0,
        'largest_factor1': 0,
        'largest_factor2': 0
    }
    
    #to number to list
    def num_to_list(num):
        array = map(str, str(num))
        return array

    #check palindrome
    def isPalindrome(num):
        array_num = num_to_list(num)
        num_reverse = str("".join(array_num[::-1]))
        array_num = str("".join(array_num))
        
        if array_num == num_reverse:
            return True
        else:
            return False
            
    #2 dimensional loop working backwards to find palindrome
    for i in xrange(max, min, -1):
        for j in xrange(max, min, -1):
            answer = i * j
            if isPalindrome(answer) == True:
                answer_dict['palindrome_list'].append(answer)
                answer_dict['factor1'].append(i)
                answer_dict['factor2'].append(j)
    
    answer_dict['largest_number'] = sorted(answer_dict['palindrome_list'])[-1]
    index_of_largest_number = answer_dict['palindrome_list'].index(answer_dict['largest_number'])
    answer_dict['largest_factor1'] = answer_dict['factor1'][index_of_largest_number]
    answer_dict['largest_factor2'] = answer_dict['factor2'][index_of_largest_number]
    
    return "The largest palindrome is %d. Its largest two factors are %d and %d." % (answer_dict['largest_number'], answer_dict['largest_factor1'], answer_dict['largest_factor2'])
    
                
min = 100
max = 999
print largest_palindrome(min,max)
                
                    
    
    