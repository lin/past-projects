
// form jsonx object
const obj = jx`css
body {
  color: white;
}
`
const obj = jx(str, 'html');

// to other object
const html = jx.html(obj);// html string
const css = jx.css(obj);// html string
