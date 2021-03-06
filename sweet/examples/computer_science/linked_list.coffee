# "Classic" linked list implementation that doesn't keep track of its size.
class LinkedList

  constructor: ->
    @_head = null # Pointer to the first item in the list.


  # Appends some data to the end of the list. This method traverses the existing
  # list and places the value at the end in a new node.
  add: (data) ->

    # Create a new node object to wrap the data.
    node = data: data, next: null

    current = @_head or= node

    if @_head isnt node
      current = current.next while current.next
      current.next = node

    this


  # Retrieves the data at the given position in the list.
  item: (index) ->

    # Check for out-of-bounds values.
    return null if index < 0

    current = @_head or null
    i = -1

    # Advance through the list.
    current = current.next while current and index > ++i

    # Return null if we've reached the end.
    current and current.data


  # Remove the item from the given location in the list.
  remove: (index) ->

    # Check for out-of-bounds values.
    return null if index < 0

    current = @_head or null
    i = -1

    # Special case: removing the first item.
    if index is 0
      @_head = current.next
    else

      # Find the right location.
      [previous, current] = [current, current.next] while index > ++i

      # Skip over the item to remove.
      previous.next = current.next

    # Return the value.
    current and current.data


  # Calculate the number of items in the list.
  size: ->
    current = @_head
    count = 0

    while current
      count += 1
      current = current.next

    count


  # Convert the list into an array.
  toArray: ->
    result  = []
    current = @_head

    while current
      result.push current.data
      current = current.next

    result


  # The string representation of the linked list.
  toString: -> @toArray().toString()


# Tests.
list = LinkedList.

list.add "Hi"
= list.size.  == 1
= list.item 0 == "Hi"
= list.item 1 == null

list = new LinkedList
list.add "zero" .add "one" .add "two"
= list.size()     == 3
= list.item(2)    == "two"
= list.remove(1)  == "one"
= list.item(0)    == "zero"
= list.item(1)    == "two"
= list.size()     == 2
= list.item(-10)  == null
