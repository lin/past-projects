export function animate(ref) {
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
