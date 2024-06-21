# Documentation

## Limitations

## Don't use 4 or more level nested grouping

Avoid using 4 or more levels of nested grouping in your code. JavaScript currently does not support the recursive flag `((?R))` in regular expressions, which means deep nesting beyond 3 levels can lead to inefficient or unexpected behavior.