const imageFrame = document.querySelector('.imgField');
const before  = document.querySelector('.before')
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('img2');

imageFrame.addEventListener('mousemove',(e)=>{
  console.log(e.layerX);
  before.style.width = e.layerX+'px';
})
