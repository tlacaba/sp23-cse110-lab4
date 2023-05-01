## Part 2

1. At line 12, "3" will be printed, this is because i is a "var" variable type, which has function scope. The reason the value is 3 specifically is because the loop terminates when i is no longer less than prices.length, which is 3, and so i terminated when it was equal to 3.
2. At line 13, "150" will be printed. Again, discountedPrice has function scope. The reason the value is 150 is because in the last iteration of the loop, discountedPrice is the result of 300 * (1 - 0.5).
3. At line 14, "150" will be printed. finalPrice has function scope. The reason it has the value of 150 is because in the last iteration of the loop, the value is rounded to 150.
4. The function will return a list containing the values [ 50, 100, 150 ]. That is because the function was creating a list of the prices after being discounted.
5. The code causes an error because it tries to access i, which is a let variable type, outside of it's block scope.
6. The code causes an error because it tries to access discountedPrice, which is a let variable type, outside of it's block scope.
7. At line 14, "150" is printed. This is because finalPrice is accessed in the same block that it was declared in.
8. The function will return a list containing the values [ 50, 100, 150 ]. There was no difference in the results from the code in question 4 and question 8, because the variables declared as let instead of as vars only needed to be accessed in the block scope, and thus had no need to be vars type.
9. The code causes an error because i is declared as a let type, and line 11 tries to access i out of block scope.
10. At line 12, "3" is printed. This is able to occur as the value of length never changes, and thus there is no issue in accessing it.
11. The function will return a list containing the values [ 50, 100, 150 ]. There is no issue in running this code because discounted is a list, and is therefore mutable as an object. length and discountedPrice are fine as consts as they are never reassigned values after their declarations.
12. Question 12
    - console.log(student.name); 
    - console.log(student['Grad Year']);
    - student.greeting();
    - console.log(student['Favorite Teacher'].name);
    - console.log(student.courseLoad[0]);
13. Question 13
    - '3' + 2: '32'; This is because the string will lead to the + operator being interpreted as concatenation, and the operand 2 will be converted into a string for concatenation.
    - '3' - 2: 1; this is because the - operator will be interpreted as arithmetic subtraction, and so '3' will be converted into a number for arithemetic subtraction.
    - 3 + null: 3; this is because null is converted into 0, so 3 + 0 = 3
    - '3' + null: 3null; this is because null is converted into 'null' for string concatenation.
    - true + 3: 4; This is because true will be converted into 1 and 1 + 3 = 4
    - false + null: 0; This is because false will be converted into 0 and null so is null, so 0 + 0 = 0
    - '3' + undefined: '3undefined'; this is because undefined will be converted into a string for string concatenation.
    - '3' - undefined: NaN; this is because the - operator is interpreted as arithmetic subtraction, and while '3' can be converted into an number, undefined can only be converted into NaN (Not a Number).
14. Question 14
    - '2' > 1: true; this is because '2' is converted into a number to be compared to 1.
    - '2' < '12': false, this is because string comparisons compare the ASCII values from left to right, and the ASCII value of '2' is greater than '1'
    - 2 == '2': true; this is because '2' is converted to a number for the comparison.
    - 2 === '2': false; 2 and '2' are different types, and so === will not attempt to make the conversion between the two.
    - true == 2: false; this is because true is converted to 0 for the comparison.
    - true === Boolean(2): true; this because Boolean(2) returns true, and so the === operator allows for this comparison, which results in a true.
15. The == operator performs an equality comparison, allowing for type conversions, while === does not attempt type conversions, and if there is a type difference, === will result in false, regardless of potential conversions.
16. in part2-question16.js
17. The result will be an array with the values: [ 2, 4, 6 ]. This is the case because the elements of newArr are just determined from the results of the callback function (which in this case, is doSomething) on all of the elements in [1,2,3]. Since doSomething just multiplies values by 2, newArr is just going to have each of the elements multiplied by two.
18. in part2-question18.js
19. The output of the code are the number 1, 4, 3, and 2 printed on separate lines. This is because 1 is written to print first. 2 is to be printed after a second delay, 3 is to be printed in the next event cycle, and 4 is to print with no delays. As a result, 1 prints first, followed by 4, then the next event cycle allows for 4 to print, then finally, 2 will print after the second delay.