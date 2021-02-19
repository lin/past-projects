
function left() {
  return div {className: `title-container-left-square`}
}

function top(text) {
  return line('top', text)
}

function bottom(props) {
  return line('bottom', text)
}

function line(postion, text) {
  return div { className: `title-${position}`,
    div { className: `title-${postion}-text`,
      span { className: `title-span` # { text } }
    }
    div { className: `title-${position}-square`}
  };
}

export function template(props, ref){
  return div { className: `title-container`, ref: ref,
    ...left(),
    ...top(props.top),
    ...bottom(props.bottom)
  }
}
