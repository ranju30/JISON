%lex
%%

\s+          /* skip whitespace */
[0-9]+                    return 'NUMBER'
[a-zA-Z]+                 return 'IDENTIFIER'
"+"					              return '+'
"-"					              return '-'
"*"					              return '*'
"/"					              return '/'
"^"					              return '^'
"="                       return '='
";"                       return ';'
<<EOF>>                   return 'EOF'
/lex

%left '-','+'
%left '*','/'
%left '^'
%right '='
%left ';'

%{
    var path = require('path');
    var node = require(path.resolve("./src/node.js"));
    var Tree = require(path.resolve("./src/Tree.js"));
    var Trees = require(path.resolve("./src/Trees.js"));
    var AssignmentTree = require(path.resolve("./src/AssignmentTree.js"));
%}


%start expression
%%

expression : tree EOF { return $$ };

tree
  : tree e ';'
    {$1.addTree($2)}
  | {$$ = new Trees();};

end
    :
      e ';'
    ;

e
  : NUMBER
    {
      $$ = node.createNumberNode($1);
    }
  | IDENTIFIER
    {
      $$ = $1;
    }
  | e '+' e
    {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    }
  | e '-' e
    {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    }
  | e '*' e
    {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    }
  | e '/' e
    {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    }
  | e '^' e
    {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    }
  | e '=' e
    {
      operator = node.createIdentifierNode($1)
      $$ = new AssignmentTree(operator,$1,$3);
    }

  ;
