// <div id="app">
//   {{ message }}
// </div>
//
// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

const app = (state) => {
  return '#app' {
    #{state.message}
  }
}

// <div id="app-2">
//   <span v-bind:title="message">
//     Hover your mouse over me for a few seconds
//     to see my dynamically bound title!
//   </span>
// </div>
//
// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// })

const app2 = (state) => {
  return '#app-2' {
    span { title: 'You loaded this page on ' + new Date().toLocaleString(),
      # {`Hover your mouse over me for a few seconds to see my dynamically bound title!`}
    }
  }
}

// <div id="app-3">
//   <span v-if="seen">Now you see me</span>
// </div>
//
// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

const app3 = (state) => {
  return '#app-3' {
    ...( state.seen && span { # 'Now you see me' } )
  }
}

// <div id="app-4">
//   <ol>
//     <li v-for="todo in todos">
//       {{ todo.text }}
//     </li>
//   </ol>
// </div>
//
// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: 'Learn JavaScript' },
//       { text: 'Learn Vue' },
//       { text: 'Build something awesome' }
//     ]
//   }
// })



const app4 = (state) => {
  return '#app-4' {
    ol {
      ...state.todos.map((state.todo) => # { state.todo.text })
    }
  }
}
