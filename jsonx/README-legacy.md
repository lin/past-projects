###  Write HTML and CSS in JavaScript like Sass

### One Simple Idea, Nothing Fancy, Memorize Nothing (Almost).

### forget magic, remember logic.

Add name and nodes like in sass.

1. you don't need to learn nearly nothing if you are familiar with javascript html and css.

2. you can dynamic change the data in html and css as you will.

3. no framework should you need to remember, how awesome is that. and you can achieve anything, import anything.

---

To modify the html strings, you have to learn rails, react or erb(haml) or ejs

To write css faster, we have to learn that fancy sass, remember `@extend` and `@include` and `@import`

What sucks about html and css? Jsx is ugly.

What sucks about frameworks?

Why we do this, why we can't just use JavaScript only? Because:
```html
<div name='container' style='color: white'>
  <h1 name='header'></h1>
</div>
```
---

```html
<!--  this is ugly -->
render(){
  return <div ref={div => this.ref = div} style={{color: 'white'}} />;
}
<!--  this is fine -->
render(){
  return { div { ref: (e) => { this.ref = e }, style: {color: 'white'} } };
}
```


```html
<!-- ahh... -->
render() {
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
      </div>
    );
}
<!-- how about -->
render() {
    return div {
        TemperatureInput {
          scale: 'c',
          temperature: celsius,
          onTemperatureChange: this.handleCelsiusChange
        }
    };
}
```


---

```javascript
// turn this
{ lin { age: '30' } }
// to
{
  name: 'lin',
  age: '20',
  nodes: []
}
```

```javascript
// turn this
{ lin { age: '30', body { eye: 'brown'}} }
// to
{
  name: 'lin',
  age: '20',
  nodes:[
    {
      name: 'body',
      eye: 'brown',
      nodes:[]
    }
  ]
}
```
---

node.js transfer this json to a file.

use gulp is ok, pipe it to a single file. and then you load it normally from `dist` folder.

use webpack or rollup is also ok.

---

When you write `html` or `css` or anything.

It doesn't care how you did it.

It only cares the default export and transfer that json object to your loving format

Or it can transfer your format back to this json file.

### Why not make everything javascript and JSON-like

Make every data is a json, so we can manipulate it with ease.

Make every logic business a javascript function (subroutine).

You first design the json data, and then you design the parser to have this abstract tree. So basically, everypiece of data can be translate to json.

And we can transform data, manipulate data all in the same way.

Does that neat? we don't need sass or less, we don't need haml or pug.

all we need is a formal js structure that can do anything.

and we use plugins or parser to translate between different files.

learn once and use everywhere strategies.

so it's like javascript is the ultimate language we all use.

Unlike css, it has to be wrapped by {}

#### 1. style.css.js
```js
const em = 13;

export default {
  format: 'css'
  node: {
     body {
      fontSize: 2 * em,
      title {
        color: 'white'
      }
    }
  }
}
```

#### 2. index.html.js
```js
export default {
  html {
    lang: 'en'
    head {
      meta { charset: 'UTF-*' }
      meta { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      title { style: { color: 'white'; } 'Page Title' } // equals to text {'Page Title'} }
    }
    body { div.title { 'Hello' em { 'World' } } } // equals to text {'Hello'} em { text { 'World' } }
  }
}
```

```javascript
const html = html {
    ...config, // ES2018
    head title { 'Hello world!' }
    body div.title { 'Hello' em { 'World' } }
}
```

```javascript
export default { format: 'html', data: html }
```

```javascript
JSONX.render('srcPath').to('destPath'); // to html or css or scss file
JSONX.parse('srcPath').to('destPath'); // parse html or css or scss to js file
```

### TODO

- [ ] a babel plugin to transfer auto-nodes-in-objects.

- [ ] a render function render json object to css or HTML or scss.

- [ ] a parse function that take css or scss or html to a json object.

- [ ] I have a dream one day. That EMCA support this. And the browser will auto transfer this new json format directly to css and html and js.
