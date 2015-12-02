# Leap year program
def find_leap_years(year, number_of_leap_years):
    leap_year_list = []
    answer = ""
    
    # find leap year
    def leap_year(year):
        if year % 4 == 0 and year % 100 == 0:
            if year % 400 == 0:
                return year
            else:
                return 0
        elif year % 4 == 0:
            return year
        else:
            return 0
    
    # find variable number of leap years after variable year
    year_counter = year
    while(len(leap_year_list) < number_of_leap_years):
        if leap_year(year_counter) == 0:
            year_counter += 1
            continue
        else:
            leap_year_list.append(leap_year(year_counter))
            year_counter += 1
    
    # order leap years
    def order_leaps(leap_year_list):
        string_output = ''
        number_length = len(leap_year_list)
        
        for i in range(1, number_length + 1):
            string_output += "\n" + str(i) + ": " + str(leap_year_list[i-1]) 
            
        return string_output
        
    answer = order_leaps(leap_year_list)
    return answer

year = 2015
number_of_leaps = 25
problem_answer = find_leap_years(year, number_of_leaps)
print problem_answer


            
        
    