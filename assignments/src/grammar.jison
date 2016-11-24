%lex
%%

\s+          /* skip whitespace */
[0-9]+       return 'NUMBER'
[a-zA-Z]+    return 'IDENTIFIER'
"+"          return '+'
"-"          return '-'
"*"          return '*'
"/"          return '/'
"^"          return '^'
"="          return '='
";"          return ';'
<<EOF>>      return 'EOF'
/lex

%left '-','+'
%left '*','/'
%left '^', '='

%{
    var path = require('path');
    var node = require(path.resolve("./src/node.js"));
    var Tree = require(path.resolve("./src/tree.js"));
    var variable;
%}


%start expression
%%

expression : tree EOF {return $$ };

tree
  : tree e ';'
    {$1.push($2)}
  | tree allIdentifier
    {$1.push($2)}
  | {$$ = [];};

allIdentifier
    : IDENTIFIER '=' e ';'
      {
        identifier = node.createIdentifierNode($1)
        variable = node.createAssignmentNode(identifier,$2,$3)
      }
    | IDENTIFIER '+' e ';'
      {
        operator = node.createOperatorNode($2)
        $$ = new Tree(operator,variable.evaluate(),$3)
      };

e
  : e '+' e
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
  | NUMBER
    {
      $$ = node.createNumberNode($1);
    }

  ;
