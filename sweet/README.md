### An Introduction to Sweet Plugins for Babel

> Readability is the king.

> Less stroke is the prince.

1. `les-print`

Why? Because in development and testing, we use `console.log()` a lot, why not make it easy to type.

Why `=` sign? In Haml(ERB) or EJS, `=` means output some string. And `-` means execute some logic.


```javascript
// = means console.log()
= "Hello world!"
```

2. `les-bracket` always auto closing, `. ` will trigger a mechanism to auto closing. 

`noun` and `verb.`, `noun` means data. and `verb.` means operations.

Why? more brackets means more strokes, and more strokes means less cool and hard to understand.

But we can't reduce too much to make it confusing. Ignore the first level bracket will just fine.

```javascript
const timeline = Timeline.create. $('#element'), (tl) =>
  tl.add. fade. $. "#title" // tl.add fade $("#title") produces a little bit of confuse.
  tl.add. blink. $. "#star" // if you have to much of the brackets level, it might be you problem to make things complex.
  tl.add. wait. 1 // it read from left to right
  return tl // how about name return as ==
```

```javascript
// prefer this
order.charge.
//  over this
order.charge()
```

The argument brackets can't be ignored, cause it makes me confusing about function and arguments.

```ruby
# this is very readable.
odd = (num) => num % 2
# this is hard to read by nature, no matter whatever you write is.
filter = (func) =>
  (array) =>
    const result = []
    array.each () => # the empty bracket is also great, without it, we lose consistency. Even though we know here is a callback, but normally, call backs provides us arguments, so we use bracket to express we don't need args
      result.push a if func a // if is special, cause we all know it is waiting a boolean

# a one liner? Better not. It's confusing.
// the curly bracket can be add implicitly.
filter = (func) => (array) => array.each (a) => result?!.push a if func a
// three-lines is OKAY at least to me.
filter = (func) =>
  (array) =>
    array.each (a) => result.push a if func a
filter(odd)(1..10)
```

3. `les-check`


```ruby
if product # if product undefined or null or empty or false.
if product? # if product undefined or null or empty then execute
if product??
# if product undefined or null then execute, like in coffeescript
# the other question mark is like R U sure? double check it.
```

```ruby
price = compare_at_price? > default_price? ? compare_at_price : default_price
# means
if compare_at_price && default_price && compare_at_price > default_price
  compare_at_price
else
  default_price
```

```ruby
# more examples. this is very much like in swift.
products.uniq.sort_by -> product.name?.lower # if check is false, do nothing.
products.uniq.sort_by -> product.name.lower if product.name && product.name != ""
```

```ruby
add = (x) -> (y) -> x + y
map = (func) ->
  (array) ->
    array.each (a) -> (result?! = []).push func(a)
    return result
map(add(8)) [1, 2, 3] # => [ 9, 10, 11 ]
```

Let's analyse `map` function, if we write it in a verbose way, it would be like:
```javascript
map = function(func) {
  return function(array) {
    var i, len, results, x;
    results = [];
    for (i = 0, len = array.length; i < len; i++) {
      x = array[i];
      results.push(func(x));
    }
    return results;
  };
};
```
