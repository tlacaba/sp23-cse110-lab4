## Part 1

1. line 9 prints: "values added: 20"
2. line 13 prints: "final result: 20"
3. line 9 prints: "values added: 20"
4. line 13 results in an error, this is because the variable is a "let" type, which has block scope, so trying to access the variable outside of the block it was written in will result in an error. 
5. The code results in an error, this is because the variable is a "const" type, which cannot have it's value reassigned following it's declaration, so line 9 doesn't print.
6. Again, line 13 doesn't get reached as there is an error already. 