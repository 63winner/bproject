const btn = document.getElementById('btn');

let index = 0;

const colors = ['alternate.css', 'main.css' ];

btn.addEventListener('click', function onClick() {

        document.getElementById('pagestyle').setAttribute('href',colors[index]);
  index = index >= colors.length - 1 ? 0 : index + 1;
});
