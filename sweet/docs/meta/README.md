### Meta (Dynamic) Programming
===

```ruby
# meta programming

# define var or method programmatically
def "method_name", -> = it.to_s
def "var_name", [1, 2, 3]

# only define a new var or method if it doesn't exist.
def? "method_name", -> = it.to_s
def? "var_name", [1, 2, 3]

# if missing method, use missing to delegate
missing: (name) -> it.call name
have: (name) -> name ~= /^name+/i || super

# more to a class
product.class.more ->
  sold: -> They.filter { -> it.state == "sold" }
product.more ->
  name: String
product.alias "method name", "to another method name"
  

# method, call a method by method name
product.call "method_name", first_param, second_param
product.call "price"
product.public_call "private_method" # => Error
method = product.method "a_method_name" # assign a method to a variable
method # call that method

# define methods
Tweet
  states: ["draft", "posted", "deleted"]
  states.each -> def? state, it.status = state
```
