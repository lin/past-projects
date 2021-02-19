### An Introduction to Sweet Programming Language


```javascript
les-print
les-args
les-bracket(this is actually very hard to implement. Since bracket is designed to separate things, make things clear and unique. And what I am doing here is to challenge the logic)
But in real life, we actually use a lot of convention to separate the logic.
les-edge
les-object
```

```javascript
const slide = Slide.create $('#slide'), (tl) =>
  tl.add fade($("#title"))
  tl.add blink($("#star"))
  tl.add wait(1)
```

save strokes, improve readibility

===

Sweet Programming Language is a hypothetical programming language that tries to minimun the keyboard strokes.

It's highly influnced by Ruby, Coffeescript, Scala and Python. It's also a JSON-like programming language.

----

1. It works like coffeescript, and output to javascript only.

2. Like coffeescript, it's built on JISON.

3. Less is more. The features aren't many. But the technique is robust.

---

### Main Features Expected.

#### 1, less `()` or `{}` is better. Use it until you have to. Though it's a good thinking habit of using these.

I consider sweet as a tool for advanced programmer for quick implementation.

```ruby
products.add product
person.run.
person.run
```

Let's give symbols a higher level of meaning.

First, `.` means `execution`, e.g. `person.` it means person does sth by default

Then, `person.run` meaning person's attribute, give me run, that piece of info.

or to say run of person.  person's run. and `.` means `'s`

sometimes we use `person.run.` that means person makes an action called run, a verb is going on.

An ability has been executed.

So if you say `obj.blah` it means give me the defination part of `obj`. Give me the instruction. So to speak.

if you say `obj.blah.` it means do that part of  defination by some example. Operation under the instruction.

Then, how to pass the variables, the arguments, the options.


`4.add 3`, why no `()`, space must mean sth here. it seems like a person is listening a sentence, if it is finished without 3, it means `add` the instruction or info. if he gets a `.` it means execution is expected.

but `4.add 3` is different to `4.add. 3` dot should mean sth. `The end of a sentence`, maybe

4.add 3, x => x + 4

, means separation of information, an array so to speak. things bewteen , , are just similar piece of information.

add x, y => x + y,

I don't like fat arrow, also things using my right baby finger.

what differs () and {}. weird. {} means a list of instruction, a precomposition. and () simply separate itself with outside world.

`System.out.println(plusConcatenated);` is cumbersome. It dulls me in an artist view.

Maybe because I am lazy and dumb, I don't like simple things done complicatedly.

`;` is just another separator like space and comma, OIC, space comma semicolon are three levels of separation.

First we separate using space, then we use comma; Second, this sencence is for semicolon usage demo.

we can also use new line as the third level of separation. why not?

1. it saves keystroke time 2. it looks clean

I understand something, use it when you have to. You have to separate things so you use space first, then you separate things using ; or . or newline.

But with , or ; appears , it means sth else. like dot means the end of some defination.

I have no idea why we use . as the meaning of

cat.ai means an ai file of cat

person.name means the name of that person.

And it normal language context dot means end, no more

Wrapper this

space comma dot semicolon newline are all for definations

space means keep listen.

comma means end of a short piece of information

dot means 1) give me instruction 2) execute that instruction for me

whenever there is a newline is should has a semi colon. unless => or , occur it means continue

=> what this should mean, x => x,

continue symbols: `,  =>  { (`

ending symbols: `. ) } ; \n` and all other chars.

, is the sibling separator.

=> is the separator for in and out.

: is the separator for a name and its defination.

() means the information is separated. if there is , or ; it just means array.

{} means the execution is separated.

{ exeu, exeu, exet, exe }

---

Old stuff written in 2015.


### Language Highlights

What I am trying to create here is to create babel plugins.

#### 1, easy print [why](https://github.com/linyingkui/sweet/blob/master/docs/why/print/README.md)

```ruby
# = means println()
= "Hello world!"
# == means print)
== 'Hello world'
```

#### 2, default arguments

```ruby
# as default, 'each' block will send a `elem` argument automatically.
array.each -> = elem.upper if elem.is_a String

# it will also send a singular form of calling object name
users.each -> = user.name

# besides with the first letter of the calling object name
users.each -> = u.name
```

#### 3, try to ignore () and {} as much as possible

```ruby
# prefer this
add: x -> y -> x + y
# over this
add: (x) -> { (x) -> { x + y } }
```

```ruby
# prefer this
order.charge.
# over this
order.charge()

# prefer this
order.charge. user
# over this
order.charge(user)
```

``` ruby
# prefer this
odd = num -> num % 2
filter = func -> array -> array.each -> result?! << a if func a
filter odd 1..10
# over this
odd = (num) -> { num % 2 }
filter = (func) -> {(array) -> { array.each( (a) -> { result?! << a if func(a) } ) }}
filter(odd)(1..10)
```
#### 4, easy edge problems checking

```ruby
# check nil or not
# prefer this
if product
if product?
# over this
if product != nil
if !product.is_nil

# check empty or not
# a deeper check, not only nil, but also 0, "", {}, []
# prefer this
if product??
# over this
if !product.is_nil && !product.is_blank

# check nil or not, then execute the following
# prefer this
compare_at_price? > default_price? ? compare_at_price : default_price
# over this
if compare_at_price && default_price && compare_at_price > default_price
  compare_at_price
else
  default_price

# check empty or not, then execute the following
products.uniq.sort_by -> product.name??.lower
products.uniq.sort_by -> product.name.lower if product.name && product.name != ""

# ?!, check if it is nil, if so use default value: 0, "", [], {}
# prefer this
color_value = product.color?!
# over this
color_value = product.color? ? product.color : ""

# injection example
array = ["hello", "world"]
array.each -> result?! << a.upper
result # => ["HELLO", "WORLD"]
```

#### 5, Block is a first-class citizen, function is a named block

```ruby
add = x -> y -> x + y
map = func -> array -> array.each -> result?! << func a
map add(8) [1, 2, 3] # => [ 9, 10, 11 ]
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
`map` is a function that takes a block as input, and returns a function as output. Inside of this returned block, which take an array as input, we are using `each` function, which takes a block as input, and returns an array as output.

#### 6, Everything is object. Class is defined in a JSON way

```ruby
# class defined as a word starting with
# a uppercase letter and a colon at the end
User:

# inherence is defined as following
# User < Human:

  # instance attributes
  # they are setters and getters like:
  # user.name, user.email
  name:, email:

  # instance methods
  # defined with a colon after a word
  # use -> to distinguish itself with variables
  # -> means from data to data
  power: x -> y -> x ** y

  # initialization
  new: name, email -> its name, email = name, email

  # instance itself is represented as it
  # to emphasize that it is a singular instance.
  details: -> it.name + it.email

  # its is a helper function to it dot
  details: -> its name + its email

```

#### 7, reduce the duplication

```ruby
# the following two are the same
santize_body_html body_html
santize_ body_html

# also true for
santize_body_html: body_html
santize_: body_html

# also true for
santize_body_html = body_html
santize_ = body_html
```

### Compare sweet to other languages

#### 1, Ruby

```ruby
# sweet
ActionView:: -> class.version: -> gem_version

# ruby
module ActionView
  def self.version
    gem_version
  end
end
```

#### 2, Coffeescript

```coffee
# sweet
odd = num -> num % 2
filter = func -> array -> array.each -> result?! << a if func a
filter odd 1..10

# coffee
odd = (num) -> num % 2
filter = (f) -> (list) ->
  result = []
  for x in list
      result.push x if f x
  return result
filter(odd)([1..10])
```

#### 3, Java

```java
# sweet
__on_drag: -> animator.cancel. if this?.is_running.

# java
private void onDrag() {
  if (animator != null) {
    if (animator.isRunning()) {
      animator.cancel();
    }
  }
}
```

===

### More

1, [basic](https://github.com/linyingkui/sweet/tree/master/docs/basic)

2, [function](https://github.com/linyingkui/sweet/tree/master/docs/function)

3, [class](https://github.com/linyingkui/sweet/tree/master/docs/class)

4, [edge](https://github.com/linyingkui/sweet/tree/master/docs/edge)

5, [functional](https://github.com/linyingkui/sweet/tree/master/docs/functional)

6, [meta](https://github.com/linyingkui/sweet/tree/master/docs/meta)

7, [conventions](https://github.com/linyingkui/sweet/tree/master/docs/convention)

8, [load](https://github.com/linyingkui/sweet/tree/master/docs/load)
