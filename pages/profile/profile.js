/* Desenvolva sua lógica aqui...*/
let userSearched = "gsrrr";
const userSearchedLink = fetch(`https://api.github.com/users/${userSearched}`);
const userSearchedRepos = fetch(
  `https://api.github.com/users/${userSearched}/repos`
);

async function getData() {
  const data = await userSearchedLink;
  const dataJson = await data.json();

  const header = document.querySelector(".header");
  try {
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
  } catch {
    alert("não localizado");
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h1> Usuário não encontrado! </h1>
        `
    );
  } finally {
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
}
getData();
async function getRepo() {
  const data = await userSearchedRepos;
  const dataJson = await data.json();
  const repositoriesBox = document.querySelector("#repos");

  console.log(dataJson);

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
