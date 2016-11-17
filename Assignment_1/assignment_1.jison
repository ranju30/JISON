%lex
%%

\s+          /* skip whitespace */
[0-9]+       return 'NUMBER'
"/"          return '/'
"*"          return '*'
"+"          return '+'
"-"          return '-'
<<EOF>>      return 'EOF'
/lex

%left '-'
%left '+'
%left '*'
%left '/'

%start expression
%%

expression : e EOF { console.log("Result: ",$$) };

e : e '*' e { $$ = "(" + $1 + $2 + $3 + ")" }|
    e '/' e { $$ = "(" + $1 + $2 + $3 + ")" }|
    e '+' e { $$ = "(" + $1 + $2 + $3 + ")" }|
    e '-' e { $$ = "(" + $1 + $2 + $3 + ")" }|
    NUMBER;
