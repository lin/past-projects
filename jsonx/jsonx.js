const struc = {
  format: 'html',
  section {
    title {
      'Hero Title'
    }
  }
};

const style = section {
  padding: '10px',
  title {
    color: 'white'
  }
}

export default function Comp(props) {
  return comp {
    struc: {...struc},
    style: {...style},
    onComplete: function(){},
    props: {},
    states: {}
  }
}

try {
  'albert'
}
