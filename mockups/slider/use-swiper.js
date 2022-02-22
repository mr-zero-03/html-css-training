const swiper = new Swiper( '.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
} );

const defaultSlide = 0;

const slideSpeed = 800;
const selectedButtonBackgroundColor = 'white';
const selectedButtonTextColor = '#24385c';

const noActiveButtonBackgroundColor = 'transparent';
const noActiveButtonTextColor = 'white';

const buttons = document.querySelectorAll( '.slider__navigation-bar--button' );

function selectButton( element = {} ) {

  buttons.forEach( ( element, index ) => {
    if ( index === swiper.activeIndex ) { //Active button
      element.style.background = selectedButtonBackgroundColor;
      element.style.color = selectedButtonTextColor;
    } else {                              //No active buttons
      element.style.background = noActiveButtonBackgroundColor;
      element.style.color = noActiveButtonTextColor;
    }
  } );

}

buttons.forEach( ( element, index ) => {
  element.addEventListener( 'click', ( element ) => {
    swiper.slideTo( index, slideSpeed );

    selectButton();
  } );
} );

swiper.on( 'slideChange', () => {
  selectButton();
} );


/* Default slide */
selectButton( buttons[ defaultSlide ], defaultSlide );
swiper.slideTo( defaultSlide, slideSpeed );
