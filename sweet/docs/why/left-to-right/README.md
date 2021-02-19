### Left to right rule

``` ruby
add 3 4
# means
(add(3))(4)

product.price.to_string.uppercase
# means
((product.price).to_string).uppercase
```

`, ` sign is for a set, will ignore parentheses automatically and keep move to next.

```ruby
add = x, y -> x + y
# means
add = (x, y) -> x + y

add = x, y 4
# means
add = (x, y(4))
```

`. ` will introduce a pair of parentheses until it hits argument ending.
```ruby
run.
# means
run()

add = x, y. -> x + y
# means
add = x, y( -> x + y )
```

` .` will end a pair of parentheses.
```
moon.turn 360 .shapes[3].move x: 45, y: 30 .position['top'].offset 'x'
# means
moon.turn(360).shapes[3].move(x: 45, y: 30).position['top'].offset('x')
```

