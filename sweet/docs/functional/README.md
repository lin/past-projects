### Functional Programming
===

Examples:

```coffee
module_split: mudule_path, separator = "::" ->
  modules = module_path.split separator
  modules.length..1.map -> modules.first elem .join separator
  
module_split "W::X::Y::Z"
```

```coffee
# map
add = x -> y -> x + y
map = func -> array -> array.each -> result?! << func a
map add(8) [1, 2, 3] # ==> [ 9, 10, 11 ]

# filter
odd = num -> num % 2
filter = func -> array -> array.each result?! << a if func a
filter odd 1..10

# fold
fold = func -> init -> array -> array.each result = func result ?? init a

add = x -> y -> x + y
multiple = x -> y -> x * y

sum = fold add 0
factorial = x -> fold multiple 1 1..x

sum 1..43   # => 946
factorial 6 # => 120
```
