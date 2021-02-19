```html
<div id="app">
  <div class='product'>
    <div class="product-image">
      <img :src="image" alt=""> <!-- v-bind -->
    </div>

    <div class="product-info">
      <h1>{{product}}</h1>
      <p v-if='inStock'>Instock</p>
      <p v-else>Out of Stock</p>
    </div>
  </div>

  <h1> {{ product }} </h1>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './product.png',
    inStock: false
  }
})
```
For jsonx, you only need to know three things:

1. we add nodes

2. `...spread` introduced in ES2018. Learn javascript, not new frameworks.

3. `# {}` is special node to output text

All others are optional.

```javascript
// data
const product = 'Socks'
const image = './product.png'
const inventory = 100;

// logic
const stockMessage = inventory > 10 ? 'In Stock' :
  inventory < 10 ? 'Almost sold out' :
  'Out of Stock';


// output
const stock = p { #{ stockMessage } }
const color = 'blue';
const inStock = false;

var app = div { className: 'product',
  div { className: 'product-image'
    img { src: image, alt: ''}
  }
  div { className: 'product-info', style: {backgroundColor: color}
    h1 { # { product } }
    ...stock
  }
  button { clas: 'btn btn-primary' + inStock ? ' disabled' : "",
           disabled: inStock }
}

$("#app").append(app.html());
```

OR:
```javascript
var app = div { className: 'product',
  div { className: 'product-image'
    img { src: image, alt: ''}
  }
  div { className: 'product-info'
    h1 { # { product } }
    // if you wish to just add complexity direct into your code.
    ...( p { #{
      () => {
        if (inventory > 10) {
          return 'In Stock'
        } else if (inventory < 10) {
          return 'Almost sold out'
        } else {
          return 'Out of Stock'
        }
      }()
    }} )
  }
}
```

OR:
```javascript
var app = div { className: 'product',
  div { className: 'product-image'
    img { src: image, alt: ''}
  }
  div { className: 'product-info'
    h1 { # { product } }
    // if you wish to just add complexity direct into your code.
    ...(true && p { #{'Nice!'} })
  }
}
```
