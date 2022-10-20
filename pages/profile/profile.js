let userSearched = localStorage.getItem("buscado");

async function getData() {
  const header = document.querySelector(".header");

  try {
    const data = await fetch(`https://api.github.com/users/${userSearched}`);
    const dataJson = await data.json();

    header.insertAdjacentHTML(
      "beforeend",
      `<span class="img">
    <img src="${dataJson.avatar_url}" alt=" foto de ${dataJson.name}"/>
    </span>
    <span class="infoBox">
    <h1>${dataJson.name}</h1>
    <p>${dataJson.bio}</p>
    </span>
    <button class="pinkButton"><a href="mailto:${dataJson.email}">Email</a></button>
    <button class="darkButton"><a href="../../index.html">Trocar de usuário</a></button>
    `
    );
    if (typeof dataJson.name === "undefined") {
      header.innerHTML = "";
      document.body.insertAdjacentHTML(
        "beforeend",
        `<div id="notFound">
      <h1> Usuário não encontrado!</h1>
        <p>${dataJson.message}</p>
        <button class="darkButton"><a href="../../index.html">Trocar de usuário</a></button>
        </div>
      `
      );
    }

    let antepenultSearched = localStorage.getItem("B");

    localStorage.setItem("C", antepenultSearched);

    let penultSearched = localStorage.getItem("A");

    localStorage.setItem("B", penultSearched);

    let lastSearched = JSON.stringify([dataJson.avatar_url, userSearched]);

    localStorage.setItem("A", lastSearched);

    async function getRepo() {
      const data = await fetch(
        `https://api.github.com/users/${userSearched}/repos`
      );
      const dataJson = await data.json();
      const repositoriesBox = document.querySelector("#repos");

      dataJson.forEach((element) => {
        repositoriesBox.insertAdjacentHTML(
          "beforeend",
          `<li>
        <h2>${element.name}</h2>
        <p>
          ${element.description}
        </p>
        <span>
          <button class="pinkButton" ><a href="${element.html_url}" target="_blank" rel="noopener noreferrer">Repositório</a></button>
          <button class="blackButton">Demo</button>
        </span>
      </li>
        `
        );
      });
    }
    getRepo();
  } catch {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div id="notFound">
    <h1> Ocorreu um erro</h1>
      <button class="darkButton"><a href="../../index.html">Trocar de usuário</a></button>
      </div>
    `
    );
  }
}

const body = document.body;

body.addEventListener("load", getData());
