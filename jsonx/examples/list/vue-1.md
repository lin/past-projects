```html
<div id="app">
  <h1> {{ product }} </h1>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks'
  }
})
```

```javascript
// jsonx
const product = 'Socks'

var app = h1 {
  # { product }
}

$("#app").append(app.html());
```

The drawback of vue is setting instead of full control of yourself.

You keep configuring, but never have the freedom of do whatever you want.

The tool is fixed.

```html
<product></product>
```
```jsonx
$('product').append(html);
```
