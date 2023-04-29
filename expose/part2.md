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
12. A. console.log(student.name); 
<br>B. console.log(student['Grad Year']);
<br>C. student.greeting();
<br>D. console.log(student['Favorite Teacher'].name);
<br>E. console.log(student.courseLoad[0]);