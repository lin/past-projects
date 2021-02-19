const app = (state, props) => {
  return div { className: props.name,
    p { onclick: handleClick.bind(this),
      # { state.x }
    }
  }
}
