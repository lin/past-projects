### Conventions

#### functions that return boolean, their names start with "is_"

```ruby
if package.is_safe
if "Hello".is_a String
```

#### the meaning of bang

```ruby
# if it is after a method, it means it will modify the object.
string = "Hello"
string.lower!
string # => "hello"

# if it is after a field, it means it will save it to database, and return true or false
user.name! = "Sweet"
# means
user.name = "Sweet"
user.save

# !! will raise an error if not valid
user.name!! = "Sweet"
user.name = "Sweet"
user.save! # like in ActiveRecord
```
