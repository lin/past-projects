const purple = '#591463';
const pink = '#9A2689';
const magenta = '#E3288B';

function square(color) {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: '100%',
    backgroundColor: color,
    zIndex: -1,
  }
}

export style = {
  '.title-container' {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
    borderLeft: '20px solid transparent',

    '.titleTop', '.titleBottom' {
      position: 'relative',
    }
  }

  {
    backgroundColor: 'transparent',
    padding: '10px 30px',
  }

  '.title-top-square' { ...square(purple) }

  '.title-bottom-square' { ...square(pink) }

  '.title-top' '.title-span',
  '.title-bottom' '.title-span' {
    backgroundColor: 'transparent',
    padding: '10px 30px',
  }

  ".title-container-left-square" {
    position: 'absolute',
    left: '-20px',
    top: 0,
    width: '20px',
    height: '100%',
    backgroundColor: magenta,
  }
}
