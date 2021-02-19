### Events: repaint based on non-natural actions.

1. `when` you want to repaint the view.

   This is the question of what is the `EventListener`

2. what you want to repaint, based on what `state` values with `event` value.


As in Vue, event is triggered even when you change `data`(vue) or `props`(React)

While that's cool, since we do want to bind view with the data. And as fast as possible.


```javascript
this.li.eq(1).on.click(){
  
}
```
