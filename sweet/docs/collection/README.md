### Data
===

#### String

```ruby
string = "Say hello"
new_string = "#{string} world!"
string.upper # => "SAY HELLO"
string.lower # => "say hello"
string.capitalize # => "Say Hello"

# access chars
string.0    = "S"
string.4..  = "hello"
string.0..2 = "Say"
```

#### Array

```ruby
# array
new_array = [] # the same as Array.new()
sample_array = [1, "hello world", ["array", "inside", "array"]]

# access array elements
array = [1, 2, 3, 4]
array.2   # => 3,         the same as array[2]
array.1:1 # => [2],       the same as array[1:1]
array.1:3 # => [2, 3, 4], the same as array[1:3]
```

#### Hash

```ruby
# hash
hash = key: "value", "special-key": { another: "hash"}
hash = {} # same as hash = Hash.new.
hash =
  key: "value",
    alias: "another_name"
  "special-key":
    another: "hash"
  method: ->
    = "Hello"
    alias: ["another_name", "other_name"]

# access hash
value        = hash.key
method       = hash.method
return_value = hash.method.
```
