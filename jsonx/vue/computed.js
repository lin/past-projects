// <div id="example">
//   <p>Original message: "{{ message }}"</p>
//   <p>Computed reversed message: "{{ reversedMessage }}"</p>
// </div>
//
// var vm = new Vue({
//   el: '#example',
//   data: {
//     message: 'Hello'
//   },
//   computed: {
//     // a computed getter
//     reversedMessage: function () {
//       // `this` points to the vm instance
//       return this.message.split('').reverse().join('')
//     }
//   }
// })
const vm = class Example {
  constructor(){

  }

  reversedMessage() {
    return this.message.split('').reverse().join('');
  }

  render() {
    return '#example' {
      p { #{ `Original message: ${this.message}` } },
      p { #{ `Computed reversed message: ${ this.reversedMessage }` } }
    }
  }
}
