### Function
===

```ruby
# -> means execuable block, before -> is the params
# the last line is return by default
(some, input) -> output

# normally with a colon after function name 
add: a, b -> a + b

# assign a variable to a function
add = a, b -> a + b

# () and {} are optional
add: (a, b) -> { a + b }

# also support indentation definition
add: a, b ->
  a + b
  
# call a function by send params
add a, b
post '/posts', -> render 'posts'

# for functions with a single argument
say: -> = "Hello"
say   # will return the function as data, as a piece of information
say.  # will call the function
say() # will also work
person.walk. # is same as person.walk()

# alias is super recommended
add: a, b ->
  a + b
  , alias: ["add_two_number", "add_two_string"]

# alias is also avaible to data variables too
price: 12, alias: "how_much_money_it_will_take"
  
# implicit generate function name if function name ends with _
add_: product        -> Product.add product
add_product: product -> Product.add product

# also works for = definition
add_ = product -> Product.add product

# also works function call
add_ product

# dynamic or default argument

# as default, 'each' block will send a `elem` argument automatically.
array.each -> = elem.upper if elem.is_a String

# it will also send a singular form of calling object name
users.each -> = user.name

# besides with the first letter of the calling object name
users.each -> = u.name

# here is a pseudo implementation 
Array:
  each: block ->
    block.args.0 << "elem", "e"
    # this is why 'a' is also working
    block.args.0 << args.0.0 if block.args??

    while counter?! < it.length
      block.call it.counter
      counter ++
```
