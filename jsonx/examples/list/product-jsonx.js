// jsonx
ul {
  ...products.map((p) => li { # { p.name } })
}

// jsx
<ul>
  {
    products.map((p) => <li> { p.name } </li>)
  }
</ul>


// jsonx
ul {
  ...products.map((p) => li { key: p.id, # { p.name } })
}

// jsx
<ul>
  {
    products.map((p) => <li key={p.id}> { p.name } </li>)
  }
</ul>
