###  JSONX:

Update JSON to represent both nodes and attributes. 

Nothing fancy. It's pure javascript (JSON) with some syntax sugar.

But we can replace `JSX` `Sass` `EJS`, even `HTML` and `css` , with `jsonx`.

JSONX gives you both readability and consistency.

#### Functions

```js
JX`html
<div>
  Hello World!
</div>
`

JX`css
/* styles */
`

JX`md
# title 
`
{// jsonx object}


```

#### Reason to change.

1. Really annoying to write XML / HTML to represent tree structure.
2. Inconsisitency between HTML / CSS / JS, where HTML and CSS is merely a long string.
3. HTML is much more about programming rather than composing. Leave writing to markdown or applications.

#### HTML Example:

In:

```javascript
div { style: { color: 'black' }
  h1 { # { 'Hello ' } em { # { 'World' } } }
}
```

Out as JSON: (We can use this JSON to generate any format possible)
```javascript
{
  nodeName: 'div',
  style: {
    color: 'black'
  },
  childNodes: [
    {
      nodeName: 'h1',
      childNodes: [
        {
          nodeName: '#',
          content: 'Hello'
        },
        {
          nodeName: 'em',
          childNodes: [
            {
              nodeName: '#',
              content: 'World'
            }
          ]
        }
      ]
    }
  ]
}
```

Out as HTML:
```html
<div style="color: black">
  <h1>Hello <em>World</em></h1>
</div>
```

#### CSS Example:

```javascript
const dark = '#232741';
body {
 backgroundColor: dark,
 title {
   color: 'white'
 }
}
```

Out: (CSS)
```css
body {
 background-color: #232741
}
body title {
  color: 'white'
}
```

Out: (SCSS)
```css
$dark = #232741;
body {
 background-color: $dark;

 title {
   color: 'white';
 }
}
```

Middle: (We can also use this JSON to generate sass or less)
```javascript
const dark = '#232741';
{
  nodeName: 'body',
  backgroundColor: {
    color: dark
  },
  childNodes: [
    {
      nodeName: 'title',
      color: 'white'
    }
  ]
}
```

#### JSX Example:

```javascript
// jsx
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
// jsonx
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

```javascript
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
```
#### Sass Example:

```css
/* sass */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}
```

```javascript
// jsonx
// it's pure js
const messageShared = {
  border: '1px solid #ccc',
  padding: '10px',
  color: '#333'
}

.message {
  ...messageShared,
}

.success {
  ...messageShared,
  borderColor: 'green'
}
```
#### Object Example:

```javascript
// jsonx
lin { name: 'albert', eye { color: 'brown' }}
// json
{
  nodeName: 'lin',
  name: 'albert',
  childNodes:[
    {
      nodeName: 'eye',
      color: 'brown',
    }
  ]
}
```

```javascript
// jsonx
{ lin { name: 'albert'} }
// json
{
  nodeName: null,
  childNodes:[
    {
      nodeName: 'lin',
      name: 'albert'
    }
  ]
}
```

```javascript
// render to string
const str = JSONX.stringify(jsonx);
const html = JSONX.toHTML(jsonx);
const css = JSONX.toCSS(jsonx);

// string to tree
const jsonx = JSONX.parse('jsonx');
const jsonx = JSONX.fromHTML('html');
const jsonx = JSONX.fromCSS('css');
```
