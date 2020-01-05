window.addEventListener('DOMContentLoaded', () => {
  let wrapper = document.getElementById('websitePage');
  let topLayer = wrapper.querySelector('#main');
  let skew = 1000;
  let soatneuh = true;
  let delta = 0;

  const moveSlider = (event) => {
    delta = (event.clientX - window.innerWidth / 2) * 0.5;
    topLayer.style.width = event.clientX + skew + delta + 'px';
  };

  wrapper.addEventListener('click', (event) => {
    soatneuh ? wrapper.addEventListener('mousemove', moveSlider) : wrapper.removeEventListener('mousemove', moveSlider);
    soatneuh = !soatneuh;
  });
});
