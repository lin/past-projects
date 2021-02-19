### Why try to ignore parentheses and curly brackets

#### 1, parentheses and curly brackets are hard to type.

- You have to press `shift` to type `()` and `{}`
- `()` `{}` is at the top right corner of the keyboard.

Where spacebar is very satisfactory to type, cause it is large.

#### 2, it is less stressfull to read, much clearer.

```ruby
add: x -> y -> x + y

add: (x) -> { (x) -> { x + y } }
```

#### 3, drawbacks

```ruby
func = num -> num % 2

func = num( -> num % 2 )
# can be func = num. -> num % 2
func = (num) -> num % 2

how to distinguish?

array = [ x, y -> x + y ]

array = [ x, (y) -> x + y ]
# can't be simplified.
array = [ x, y( -> x + y ) ]
# can be func = x, y. -> x + y
array = [ (x, y) -> x + y ]

how to distinguish?

# sweet
func. x -> x, y
func. x -> x, y -> y
func. x -> (x, y) -> y
$('.button').hover -> $(@).addClass('active'), -> $(@).removeClass('active')
```
