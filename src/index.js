const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#searchByID');
    // const input = e.target.children[1].value

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((res) => res.json())
      .then((data) => renderMovies(data))
      .catch((err) => console.log(err));
  });
};

function renderMovies(data) {
  const title = document.querySelector('#movieDetails h4');
  const summary = document.querySelector('#movieDetails p');
  title.textContent = data.title;
  summary.textContent = data.summary;
}

document.addEventListener('DOMContentLoaded', init);
