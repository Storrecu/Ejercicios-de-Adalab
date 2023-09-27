const btn = document.getElementById('test');

let x = 0;

const funcClick = () => {
  let y = 0;
  x++;
  y++;
  console.log(x);
  console.log(y);
};

btn.addEventListener('click', funcClick);
