// conditioanal add attributes
object = {
  ...( true && { name: 'albert' } )
}

// dynamic attribute name
object = {
  ['albert ' + surname]: 'coding'
}

// add array of attributes
object = {
  ...products.map((p) => {name: p.name})
}

// normal stuff, dynamic attribute value
object = {
  backgroundColor: color
}

// add basically anything you can construct.
object = {
  ...(// at your command.)
}
