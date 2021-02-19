// Define a new component called todo-item
// Vue.component('todo-item', {
//   template: '<li>This is a todo</li>'
// })
//
// <ol>
//   <!-- Create an instance of the todo-item component -->
//   <todo-item></todo-item>
// </ol>

const todoItem = li {
  #{ 'This is a todo' }
}

const app = ol {
  ...todoItem,
  ...todoItem,
  ...todoItem
}

// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// })
//
// <div id="app-7">
//   <ol>
//     <!--
//       Now we provide each todo-item with the todo object
//       it's representing, so that its content can be dynamic.
//       We also need to provide each component with a "key",
//       which will be explained later.
//     -->
//     <todo-item
//       v-for="item in groceryList"
//       v-bind:todo="item"
//       v-bind:key="item.id">
//     </todo-item>
//   </ol>
// </div>
//
//
// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     groceryList: [
//       { id: 0, text: 'Vegetables' },
//       { id: 1, text: 'Cheese' },
//       { id: 2, text: 'Whatever else humans are supposed to eat' }
//     ]
//   }
// })

// stateless components.
const todoItem = (props) => {
  return li { key: props.key,
    #{props.todo.text}
  }
}

const app7 = (state) => {
  return '#app-7' {
    ol {
      ...state.groceryList.map((item) => todoItem({key: item.id, todo: item}))
    }
  }
}
