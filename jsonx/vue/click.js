// <div id="app-5">
//   <p>{{ message }}</p>
//   <button v-on:click="reverseMessage">Reverse Message</button>
// </div>
//
// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Hello Vue.js!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

const app5 = (state) => {
  const comp = '#app-5' {
    p { #{state.message} },
    button { onclick: reverseMessage,
      #{'Reverse Message'}
    }
  }

  const reverseMessage = function() {
    state.message = state.message.split('').reverse().join('')
  }

  return comp;
}
