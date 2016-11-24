%lex
%%

\s+          /* skip whitespace */
[0-9]+                    return 'NUMBER'
[a-zA-Z]+                 return 'IDENTIFIER'
'+'|'*'|'/'|'^'|'-'       return 'OPERATOR'
"="                       return 'ASSIGNMENT'
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
    var Tree = require(path.resolve("./src/tree.js"));
    var variable;
%}


%start expression
%%

expression : tree EOF { return $$ };

tree
  : tree e ';'
    {$1.push($2)}
  | tree assignment
    {$1.push($2)}
  | {$$ = [];};

assignment
    : IDENTIFIER ASSIGNMENT e ';'
      {
        identifier = node.createIdentifierNode($1)
        variable = node.createAssignmentNode(identifier,$2,$3)
      }
    | IDENTIFIER OPERATOR e ';'
      {
        operation = node.createOperatorNode($2)
        $$ = new Tree(operation,variable.evaluate(),$3)
      }

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
  | e OPERATOR e
    {
      operator = node.createOperatorNode($2)
      $$ = new Tree(operator,$1,$3)
    }

  ;
