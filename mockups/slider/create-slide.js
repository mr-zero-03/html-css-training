// Data--------------------------------------------------
const titleOptions = [
  'Development Strategy',
  'Competitive Strategy',
  'Pricing & Market Access',
  'New Product Commercialization',
  'Brand Optimization'
];

const classNames = [];
titleOptions.forEach( ( element ) => {
  slug = element.toLowerCase().replaceAll( ' ', '-' );
  if ( slug.includes( '&' ) ) {
    slug = slug.replaceAll( '&', 'and' );
  }

  classNames.push( slug );
} );

const subtitleOptions = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et'
];

const textOptions = [
  'Dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus efficitur purus, ac euismod nisl bibendum imperdiet. Nulla id erat eros. Suspendisse potenti. Quisque vel fermentum sem. Vestibulum ac facilisis augue, eu euismod mauris. Ut vitae augue quis metus ullamcorper placerat. Nullam luctus sem a suscipit molestie.'
];

const imageOptions = [
  './img.png'
];

// Creation of the Slider--------------------------------------------------
const titlePlaceholder = '<h1 class="slider__visual--title {{CLASSNAME}}">{{TITLE}}</h1>';
const subtitlePlaceholder = '<h5 class="slider__visual--subtitle {{CLASSNAME}}">{{SUBTITLE}}</h5>';
const textPlaceholder = '<p class="slider__visual--text {{CLASSNAME}}">{{TEXT}}</p>';
const imagePlaceholder = '<img class="slider__visual--image {{CLASSNAME}}" src="{{IMAGE}}"/>';

function getSliderData( option ) {
  let html = '';
  html += '<div class="slider__visual--left-side col-sm">';
  html += titlePlaceholder.replace( '{{TITLE}}', titleOptions[ option ] );
  html += subtitlePlaceholder.replace( '{{SUBTITLE}}', subtitleOptions[ 0 ] );
  html += textPlaceholder.replace( '{{TEXT}}', textOptions[ 0 ] );
  html += '</div>';
  html += '<div class="slider__visual--right-side col-sm">';
  html += imagePlaceholder.replace( '{{IMAGE}}', imageOptions[ 0 ] );
  html += '</div>';

  const className = classNames[ option ];
  html = html.replaceAll( '{{CLASSNAME}}', className );

  return( html );
}

function createSliders() {
  optionsCount = titleOptions.length;

  html = '';
  for ( let i = 0; i < optionsCount; i++ ) {
    html += '<div class="swiper-slide container-row">';
    html += getSliderData( i );
    html += '</div>';
  };

  let swiperWrapper = document.querySelectorAll( 'div.swiper-wrapper' )[ 0 ];
  swiperWrapper.innerHTML = html;
}

window.onload = createSliders;
