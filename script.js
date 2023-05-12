const cuerpo = document.body;
const bar = document.querySelector('.bar');
const actualizarBar = () => {
  let scroll = (scrollY / (cuerpo.scrollHeight - innerHeight)) * 100;
  bar.style.width = `${scroll}%`;
  requestAnimationFrame(actualizarBar);
}
actualizarBar();