// I think this should be called nodes format
// so we can always use javascript anywhere.
// what I am doing here is to expand json to nodes expression
// and inspired by sass
// and what is cool is we can always export things and same data to a varible.
// calculate things as we want it.

// make it all json
// you are not learning too much new everything is like old stuff.

const products = [
  {name: 'apple', price: 3},
  {name: 'banana', price: 4},
  {name: 'pineapple', price: 5}
];

export default html {
  lang: 'en',
  head {
    meta { charset: 'UTF-*' }
    meta { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    title { style: { color: 'white'; } 'Page Title' }
    // equals to text {'Page Title'}
  }
  body {
    div.title { 'Hello' em { 'World' } }
    // equals to text {'Hello'} em { text { 'World' } }
    ul.products {
      childNodes: products.map((p) => {
        return li.product { `${p.name} + ${p.price}`   }
      })
    }
  }
}

// compile to this:
export default {
  name: 'html',
  lang: 'en',
  nodes: [
    {
      name: 'head',
      nodes: [
        {
          name: 'meta',
          charset: 'UTF-*'
        },
        {
          name: 'meta',
          content: 'width=device-width, initial-scale=1.0'
        },
        {
          name: 'title',
          style: {
            color: 'white';
          },
          nodes: [
            {
              name: 'text',
              content: 'Hello World'
            }
          ]
        }
      ]
    },
    {
      name: 'body',
      nodes: [
        {
          name: 'div',
          class: 'title',
          nodes: [
            {
              name: 'text',
              content: 'Hello'
            },
            {
              name: em,
              nodes: [
                {
                  name: 'text',
                  content: 'World'
                }
              ]
            }
          ]
        },
        {
          name: 'ul',
          nodes: products.map((p) => {
            return {
              name: 'li',
              nodes: [
                {
                  name: 'text',
                  content: `${p.name} + ${p.price}`
                }
              ]
            }
          })
        }
      ]
    }
  ]
}
