function addClickEvent(elem) {
  const button = elem.find('.button');
  button.on('click', () => {
    setState({clicked: true})
  })
}

function addDeleteEvent(elem) {
  const delete = elem.find('.delete');
  button.on('click', (state) => {
    setState({data: state.data.delete(elem)})
  })
}

export function addEventListeners(elem) {
   addClickEvent(elem);
   addDeleteEvent(elem);
}
