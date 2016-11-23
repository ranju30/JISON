%lex
%%

\s+          /* skip whitespace */
[0-9]+       return 'NUMBER'
"+"          return '+'
"-"          return '-'
"*"          return '*'
"/"          return '/'
"^"          return '^'
<<EOF>>      return 'EOF'
/lex

%left '-','+'
%left '*','/'
%left '^'

%{
    var path = require('path');
    var node = require(path.resolve("./src/node.js"));
    var Tree = require(path.resolve("./src/tree.js"));
%}


%start expression
%%

expression : e EOF { return $$ };

e :
    e '+' e {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    } |
    e '-' e {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    } |
    e '*' e {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    } |
    e '/' e {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    }
    |
    e '^' e {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    }
    | NUMBER {$$ = node.createNumberNode($1);};
