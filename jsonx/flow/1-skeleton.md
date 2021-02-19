## Skeleton: design the sketch.

1. the tree structure

2. identifier(relative then global) `rel` for `local reference`, `ref` for `global reference`

we must have this local reference to reduce the reliance of the position and identity.

Placeholder Version of an app.

Skeleton of the app. Just the relationship of the containers.

polluted the structure of the app. By adding more and more information to it.

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
