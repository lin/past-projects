# Examples from _why's Potion, the Readme and "Potion: A Short Pamphlet".

# 5 times: "Odelay!" print.

1..5.each -> = "Odelay!"
= "Odelay!" * 5

# add = (x, y): x + y.
# add(2, 4) string print

add = -> x + y
= add 2, 4

# loop: 'quaff' print.

loop print 'quaff'


# ('cheese', 'bread', 'mayo') at (1) print

= ['cheese', 'bread', 'mayo'][1]


# (language='Potion', pointless=true) at (key='language') print

= {language: 'Potion', pointless: true}['language']


# minus = (x, y): x - y.
# minus (y=10, x=6)

minus = -> x - y
minus 6, 10


# foods = ('cheese', 'bread', 'mayo')
# foods (2)

foods = ['cheese', 'bread', 'mayo']
foods[2]


# (dog='canine', cat='feline', fox='vulpine') each (key, val):
#   (key, ' is a ', val) join print.

{dog: 'canine', cat: 'feline', fox: 'vulpine'}.each print "#{key} is a #{val}"

# Person = class: /name, /age, /sex.
# Person print = ():
#   ('My name is ', /name, '.') join print.

Person: -> print: -> print "My name is #{@name}."


# p = Person ()
# p /name string print

p = Person.
= p.name


# Policeman = Person class (rank): /rank = rank.
# Policeman print = ():
#   ('My name is ', /name, ' and I'm a ', /rank, '.') join print.
#
# Policeman ('Constable') print

Policeman: < Person
  rank:
  print: -> = "My name is #{@name} and I'm a #{@rank}."

= Policeman.new 'Constable'


# app = [window (width=200, height=400)
#         [para 'Welcome.', button 'OK']]
# app first name

app =
  window:
    width: 200
    height: 200
  para:    'Welcome.'
  button:  'OK'

app.window


# x = 1
# y = 2
#
# x = 1, y = 2

x = 1
y = 2

x = 1; y = 2


# table = (language='Potion'
#           pointless=true)

table =
  language: 'Potion'
  pointless: yes


# # this foul business...
# String length = (): 10.

# this foul business...
String::length = -> 10


# block = :
#   'potion' print.

block = -> = 'potion'


# if (age > 100): 'ancient'.

if age > 100 -> 'ancient'


# author =
#   if (title == 'Jonathan Strange & Mr. Norrell'):
#     'Susanna Clarke'.
#   elsif (title == 'The Star Diaries'):
#     'Stanislaw Lem'.
#   elsif (title == 'The Slynx'):
#     'Tatyana Tolstaya'.
#   else:
#     '... probably Philip K. Dick'.

switch author
  when 'Jonathan Strange & Mr. Norrell' -> 'Susanna Clarke'
  when 'The Star Diaries'               -> 'Stanislaw Lem'
  when 'The Slynx'                      -> 'Tatyana Tolstaya'
  else                                  -> '... probably Philip K. Dick'


# count = 8
# while (count > 0):
#   'quaff' print
#   count--.

count = 8
while count > 0
  = 'quaff'
  count--


# 1 to 5 (a):
#   a string print.

print a for a in [1..5]


# if (3 ?gender):
#   "Huh? Numbers are sexed? That's amazing." print.

if 3.gender? -> = "Huh? Numbers are sexed? That's amazing."


# HomePage get = (url):
#   session = url query ? at ('session').

HomePage::get = url -> session = url.query?.session


# BTree = class: /left, /right.
# b = BTree ()
# b /left = BTree ()
# b /right = BTree ()

BTree   = ->
b       = BTree.
b.left  = BTree.
b.right = BTree.


# BTree = class: /left, /right.
# b = BTree ()
#
# if (b ? /left):
#   'left path found!' print.

BTree = ->
b = BTree.

if b.left? -> = 'left path found!' 
