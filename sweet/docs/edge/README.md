### Edge
===

```ruby
# nil check, not define is also nil.
# following are equivalent
if product
if product?
if !product.nil
if product.exist
if product != nil
  
# empty check, "", 0, nil, [], {}, false
# double check, deeper check
if product??
if !product.nil && !product.blank
  
# check nil first, if nil return false or ignore the following

# example one
compare_at_price? > default_price? ? left : right
  
if compare_at_price && default_price && compare_at_price > default_price
  compare_at_price
else
  default_price

# example two
decrease_: quantity ->
  it.quantity -= quantity if it.quantity? >= quantity
decrease_quantity: quantity ->
  it.quantity -= quantity if it.quantity? >= quantity
decrease_quantity: quantity ->
  it.quantity -= quantity if it.quantity && it.quantity >= quantity

# example three
products.uniq.sort_by -> product.name??.downcase
products.uniq.sort_by -> product.name.downcase if product.name && product.name != ""

# ?!, check if it is nil, if so use default value, 0, "", [], {}
# less
color_value = product.color?!

# more
color_value = product.color? ? product.color : ""

# also good for injecting
array = ["hello", "world"]
array.each -> result?! << a.upper
= result # => ["HELLO", "WORLD"]

# if we want to set default value to be another value, as in ruby
color_value = product.color || "No value available"
```
