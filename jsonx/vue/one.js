// <template>
//   <p>({greeting })</p>
// </template>
// <script>
//   module.exports =
// </script>
// <style scoped>
//   p {
//     font-size: 2em;
//     text-align: center;
//   }
// </style>

export template = p {
  # { greeting }
}

export script = {
 data: function () {
    return {
      greeting: 'Hello'
    }
  }
}

export style = jx`scoped
p {
  font-size: 2em;
  text-align: center;
}
`
