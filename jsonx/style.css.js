export default nav {
  ul {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }

  li { display: 'inline-block' }

  a {
    display: 'block',
    padding: '6px 12px',
    textDecoration: 'none'
  }
}

// which is:
{
  name: 'nav',
  nodes: [
    {
      name: 'ul',
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    {
      name: 'li',
      display: 'inline-block'
    },
    {
      name: 'a',
      display: 'block',
      padding: '6px 12px',
      textDecoration: 'none'
    }
  ]
}

// no long sass
@mixin transform($property) {
  -webkit-transform: $property;
}

.box { @include transform(rotate(30deg)); }

// but in real js
function transform(p) {
  return {
    _webkitTransform: p,
    _msTransform: p,
    transform: p
  }
}

// https://github.com/tc39/proposal-object-rest-spread/blob/master/Spread.md
.box {
  ...transform(p)
}

// and also try
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

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}

// in pure javascript
const messageShared = {
  border: '1px solid #ccc';
  padding: '10px';
  color: '#333';
}

.message {
  ...messageShared,
}

.success {
  ...messageShared,
  borderColor: 'green'
}

.error {
  ...messageShared,
  borderColor: 'red'
}

.warning {
  ...messageShared,
  borderColor: 'yellow'
}
