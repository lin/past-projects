```html
<ul>
  <li v-for='detail in details' :key='detail.id'>{{ detail }}</li>
</ul>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    details: ["cotton", 'polyester', 'gender-neutral']
  }
})
```

```javascript
// data
const details: ["cotton", 'polyester', 'gender-neutral']

var app = ul {
  ...details.map((detail) => {
    li { key: detail.id, #{detail} }
  })
}

$("#app").append(app.html());
```


Both jsx and vue are hybrid. That means they modified the html static data dynamicly.

jsonx is actually dynamic.
