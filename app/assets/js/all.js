// import
// import AOS from 'aos';

// DOM
const wraper = document.querySelector('#wraper');

// imagesLoaded( document.querySelector('#wraper'), function( instance ) {
//   console.log('all images are loaded');
// });
imagesLoaded(wraper, (instance) => {
  // console.log(instance);
}).on( 'always', function( instance ) {
  console.log('ALWAYS - all images have been loaded');
}).on( 'done', function( instance ) {
  console.log('DONE  - all images have been successfully loaded');
  AOS.init();
}).on( 'fail', function( instance ) {
  console.log('FAIL - all images loaded, at least one is broken');
});

