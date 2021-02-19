import {template} from './template.html.js'
import {style} from './style.css.js'
import {animate} from './animate.js'
import {addEvents} from './events.js'

class FancyTitle extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.style = style;
  }

  componentDidMount() {
    animate(this.ref);
    addEvents().bind(this);
  }

  render() {
    return template(this.props, this.state, this.ref).react();
  }
}

export {FancyTitle};
