import app from './structure'

// events.js
app.button.on.click = function() {
  state.message = state.message.split('').reverse().join('')
}

app.on.key.23 = function(){

}

export default app;

// ======= part ==========  //
// in events.js
const button, marker;

button.onClick = function(){
  return this.x + this.y;
}

export button;

//========== assemble ============ //
// in main.js
import { button as buttonEvents } from 'events'

export default app = div {
  button {
    ...buttonEvents,
    #{'click me'}
  }
}
