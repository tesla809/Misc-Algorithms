
def largest_number(*number):
    largest = max(number)
    return largest

def smallest_number(*number):
    smallest = min(number)
    return smallest

def sum_of_all_numbers(*number):
    sum_of_all = sum(number)
    return sum_of_all

def absolute_value(numbers):
    value = abs(numbers)
    return value

def type_check(array_of_values):
    type_output = type(array_of_values)
    return type_output

print largest_number(1,2,3,4,5,19,0)
print smallest_number(1,2,3,4,5,19,0)
print sum_of_all_numbers(1,2,3,4,5,19,0)
print absolute_value(-10)

values_array = ["Hello", 20, True, 3.14]
print type_check(values_array)
print type_check(values_array[1])

print values_array[0:len(values_array)]
# can choose element, then slice string element
print values_array[0][:3]

# get index value of element in list/array
value_index = values_array.index(20)
print value_index
#insert new value in that position of value_index
#so finding 20 and inserting 30 in that position
values_array.insert(value_index, 30)
print values_array
#replaces value in value_index
values_array[value_index] = "replaced 30 with this 40"
print values_array


#for loops in Python
number_array = [1,2,3,4,5,6,7,8]
new_number_array = []

def add_two(array):
    for number in array:
        print number + 2
    return array
    
print add_two(number_array)

#new list
def add_two_new(array):
    for number in array:
        new_number_array.append(number ** 2)
    return new_number_array
    
print add_two_new(number_array)
    
#sorting lists/arrays
animal_list = ["aavark","fenec","dingo","salamander","beagles"]
print animal_list
animal_list.sort()
print animal_list


#dictionaries/objects
residents = {"Python" : 101, "Cobra" : 102, "Rattler" : 103}
print residents["Python"]

#re-assigned values
residents["Cobra"] = 105
print residents["Cobra"]

#adding key-value pairs to list
food_list = {}
#outputting decimals with starting 0, like 0.99 is not straight forward
food_list["shit suprise"] = format(99.0/100.0, '.2f')
food_list["come fiesta special"] = 14.99
food_list["Not Your Cheese"] = format(6.99, '.2f')
food_list["Health Inspector Suprise"] = format(29.99, '.2f')
print food_list
print "There are " + str(len(food_list)) + " items on the menu"

del food_list["Health Inspector Suprise"]
print food_list
print "Now, there are " + str(len(food_list)) + \
" items on the menu"

food_list["Sea man's salsa"] =  "free with a wink and a tug ... boat"

print food_list

print "Now, there are " + str(len(food_list)) + \
" items on the menu again"

#dictonaries/objects
items = {"gold": 500,
"pouch": ["coins","ether","keystone"],
"backpack": ["guns","map","health kit"],
"pipBoy":["info","keygen","upgrades"]}

print items
items["backpack"].sort()
print items["backpack"]
#add to backpack list/array
items["backpack"].append("rocket launcher")
print items["backpack"]

#removes element from array/list
items["backpack"].remove("guns")
print items["backpack"]


shopping_list = ["banana", "orange", "apple"]

stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}
    
prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

print prices['banana']

def sum_prices(food):
    total = 0
    for key in food:
        if stock[key] > 0:
            total += prices[key]
            stock[key] -= 1
    return total
    
print sum_prices(shopping_list)

#using dictionaries as list
lloyd = {
    "name": "Lloyd",
    "homework": [90.0, 97.0, 75.0, 92.0],
    "quizzes": [88.0, 40.0, 94.0],
    "tests": [75.0, 90.0]
}
alice = {
    "name": "Alice",
    "homework": [100.0, 92.0, 98.0, 100.0],
    "quizzes": [82.0, 83.0, 91.0],
    "tests": [89.0, 97.0]
}
tyler = {
    "name": "Tyler",
    "homework": [0.0, 87.0, 75.0, 22.0],
    "quizzes": [0.0, 75.0, 78.0],
    "tests": [100.0, 100.0]
}

students = [lloyd, alice, tyler]

#outputs each students info
for kid in students:
    print kid['name']
    print kid['homework']
    print kid['quizzes']
    print kid['tests']


def average(numbers):
    total = float(sum(numbers)) / len(numbers)
    return total

def get_average(student):
    homework = average(student["homework"]) * float(0.10)
    quizzes = average(student["quizzes"]) * float(0.30)
    tests = average(student["tests"]) * float (0.60)
    
    return homework + quizzes + tests

def get_letter_grade(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'

lloyd_score = get_average(lloyd)
get_letter_grade(lloyd_score)

def get_class_average(students):
    results = []
    for student in students:
        results.append(get_average(student))
    return average(results)

students = [lloyd, alice, tyler]
class_average = get_class_average(students)
print class_average

get_class_letter_grade = get_letter_grade(class_average)
print get_class_letter_grade


#list/array functions
n = [1,2,3,5]

#different ways to remove element
#remove element at index given, and return it to you 
n.pop(3)
print n

#remove actual element given
n.remove(2)

#removes element at index, but does not return it
del(n[2])

#append element to end
n.append(3)

#ranges can be used to subsitute list
#range(4) -> [0,1,2,3]
#range(0,3) -> [0,3]
    #gives a limit n-1
#range(0,10,2) -> [0,2,4,6,8]
    #last parameter is pattern to skip numbers by
def my_function(x):
    for i in range(0, len(x)):
        x[i] = x[i] * 2
    return x
    
print my_function(range(0,3)) # Add your range between the parentheses!








