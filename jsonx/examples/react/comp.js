class LeftBarTitle extends React.Component {
  constructor(props){
    super(props);
    this.tl = new TimelineMax();
    this.ref = React.createRef();
  }

  componentDidMount() {
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

    this.tl.from(leftSquare, .6, {height: 0});
    this.tl.from(topTextContainer, .6, {x: "-30px", opacity: 0});
    this.tl.to(topTextSquare, .6, {width: topTextWidth}, '-=0.6');
    this.tl.from(bottomTextContainer, .6, {x: "-30px", opacity: 0}, '-=0.3');
    this.tl.to(bottomTextSquare, .6, {width: bottomTextWidth}, '-=.6');
  }

  render() {
    return (
      <div ref={ this.ref } className="title-container">
        <div className="title-top">
          <div className="title-top-text">
            <span className='title-span'>{this.props.top}</span>
          </div>
          <div className="title-top-square"></div>
        </div>
        <div className="title-bottom">
          <div className="title-bottom-text">
            <span className='title-span'>{this.props.bottom}</span>
          </div>
          <div className="title-bottom-square"></div>
        </div>
        <div className="title-container-left-square"></div>
      </div>
    );
  }
}

export {LeftBarTitle};
