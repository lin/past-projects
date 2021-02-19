

1. design the sketch.

Skeleton of the app. Just the relationship of the containers.

```javascript
const app = box {
  searchBar {}
  messages {
    message {} * 3
  }
  tabBar {
    tab {} * 4
  }
}
```

2. design the mock version (in sketch or illustrator)

```javascript
const app = box { style:
  searchBar { style: 'backgroundColor: blue'}
  messages { style: 'backgroundColor: blue'
    message { style: 'backgroundColor: blue' }
    message { style: 'backgroundColor: blue' }
    message { style: 'backgroundColor: blue' }
  }
  tabBar { style: 'backgroundColor: blue'
    tab1 { style: 'backgroundColor: blue' }
    tab2 { style: 'backgroundColor: blue' }
    tab3 { style: 'backgroundColor: blue' }
  }
}
```

3. add style in CSS or DRY way.

Make it DRY.
```javascript
const blueBg = 'backgroundColor: blue';
const app = box { style: blueBg,
  searchBar { style: blueBg }
  messages { style: blueBg
    message { style: blueBg  }
    message { style: blueBg  }
    message { style: blueBg  }
  }
  tabBar { style: blueBg
    tab1 { style: blueBg  }
    tab2 { style: blueBg  }
    tab3 { style: blueBg  }
  }
}
```

Or use css class

```javascript
const style = box {

}
const app = box { className: 'box'
  searchBar { className: 'searchBar' }
  messages { className: 'messages'
    message { className: 'message' }
    message { className: 'message'   }
    message { className: 'message' }
  }
  tabBar {  className: 'tabBar'
    tab1 { className: 'tab' }
    tab2 { className: 'tab' }
    tab3 { className: 'tab' }
  }
}
```

3. make it dynamic using props ( appearance in illustrator )

```javascript
const app = (props) => {
  return box { className: 'box'  + (props.size && `box-${props.size}`)
    searchBar { className: 'searchBar' }
    messages { className: 'messages'
      message { className: 'message' }
      message { className: 'message'   }
      message { className: 'message' }
    }
    tabBar {  className: 'tabBar' + (props.color && `tabBar-${props.color}`)
      tab1 { className: 'tab' }
      tab2 { className: 'tab' }
      tab3 { className: 'tab' }
    }
  }
}
```

4. add reveal animation



5. add hover click drag animation
