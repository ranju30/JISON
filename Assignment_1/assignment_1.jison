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

expression : e EOF { return $$; };

e : e '*' e {$$ = {parent:$2, leftChild:$1, rightChild:$3} }|
    e '/' e {$$ = {parent:$2, leftChild:$1, rightChild:$3} }|
    e '+' e {$$ = {parent:$2, leftChild:$1, rightChild:$3} }|
    e '-' e {$$ = {parent:$2, leftChild:$1, rightChild:$3} }|
    NUMBER;
