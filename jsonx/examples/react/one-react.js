// structure
function structure(props, ref){
  return div.titleContainer {
    ref: ref,
    div.titleTop {
      div.titleTopText {
        span.titleSpan {
          props.top
        }
      }
      div.titleTopSquare {}
    }
    div.titleBottom {
      div.titleBottomText {
        span.titleSpan {
          props.bottom
        }
      }
      div.titleBottomSquare {}
    }
    div.titleContainerLeftSquare
  }
}

// style
{
  .titleContainer {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
    borderLeft: '20px solid transparent',
  }

  .titleTop {
    position: 'relative',
  }

  .titleBottom {
    position: 'relative',
  }

  .titleTop .titleSppan {
    backgroundColor: 'transparent',
    padding: '10px 30px',
  }

  .titleTopSquare {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: '100%',
    backgroundColor: '#591463',
    zIndex: -1,
  }

  .titleBottomSquare {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 100%,
    backgroundColor: '#9A2689',
    zIndex: -1,
  }

  .titleBottom .titleSpan {
    backgroundColor: 'transparent',
    padding: '10px 30px',
  }

  .titleContainerLeftSquare {
    position: 'absolute',
    left: '-20px',
    top: 0,
    width: '20px',
    height: '100%',
    backgroundColor: '#E3288B',
  }
}.render('scss')

// animation
function animate(ref) {
  const tl = new TimelineMax();

  const elem = $(this.ref);
  const leftSquare = elem.find('.title-container-left-square');
  const topText = elem.find('.title-top span');
  const topTextContainer = elem.find('.title-top .title-top-text');
  const bottomText = elem.find('.title-bottom span');
  const bottomTextContainer = elem.find('.title-bottom .title-bottom-text');
  const topTextWidth = topText.width() + 60;
  const bottomTextWidth = bottomText.width() + 60;
  const topTextSquare = elem.find('.title-top-square');
  const bottomTextSquare = elem.find('.title-bottom-square');

  tl.from(leftSquare, .6, {height: 0});
  tl.from(topTextContainer, .6, {x: "-30px", opacity: 0});
  tl.to(topTextSquare, .6, {width: topTextWidth}, '-=0.6');
  tl.from(bottomTextContainer, .6, {x: "-30px", opacity: 0}, '-=0.3');
  tl.to(bottomTextSquare, .6, {width: bottomTextWidth}, '-=.6');

  return tl;
}

// lifecycle and interaction
class LeftBarTitle extends React.Component {
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.tl = animate(this.ref)
  }

  render() {
    return structure(this.props, this.ref);
  }
}

export {LeftBarTitle, style};
