### Class
===

#### Basic

```ruby
ClassName:
  
  # variable
  # accessable inside class
  
  @instance_variable = ""
  @@class_variable   = ""
  
  # attributes
  # accessable outside class
  # product.name, product.price
  instance_attribute:
  _protected_instance_attribute:
  __private_instance_attribute:
  
  # Product.fix_tax
  class.attribute:
  class._protected_attribute:
  class.__private_attribute:
  
  # self is implicit as an argument
  instance_method:  ->
  _protected_method:  ->
  __private_method: ->
  
  # static class method
  class.method: ->
  class._protected_method: ->
  class.__private_method: ->
```

#### Example
```ruby
Tweet:
  # instance fields
  id:, user:, text:
  
  # instance methods
  url: -> "/#{user.name}/tweets/#{id}"
```

#### Module
```ruby
# module is defined by two colons.
Math::
  Power::
    power: x -> y -> x**y
  Trigonometric::
    tan: x -> sin x / cos x


# submodule is defined by two colons too
Math::Power::
  power: x -> y -> x**y
```
