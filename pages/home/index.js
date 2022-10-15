let seeProfileButton = document.querySelector(".searchButton");
let search = document.querySelector("#search");

search.addEventListener("keyup", () => {
  seeProfileButton.classList.remove("pinkButtonOff");
  seeProfileButton.classList.add("pinkButtonOn");
  activeButton();

  if (search.value === "") {
    seeProfileButton.classList.remove("pinkButtonOn");
    seeProfileButton.classList.add("pinkButtonOff");
  }
});

function activeButton() {
  seeProfileButton.addEventListener("click", (e) => {
    e.preventDefault();
    let profile = search.value;
    localStorage.setItem("buscado", profile);
    window.location.replace("./pages/profile/profile.html");

    seeProfileButton.innerHTML = "";
    const img = document.createElement("img");
    img.src = "./assets/img/spinner.svg";
    img.alt = "loading image";
    img.classList.add("loading");
    seeProfileButton.appendChild(img);
  });
}

onload = function () {
  const lastSearched = document.querySelector(".lastSearched");
  let contentA = JSON.parse(localStorage.getItem("A"));
  console.log(contentA[0]);
  lastSearched.setAttribute("id", contentA[1]);
  lastSearched.innerHTML = `
    <img src="${contentA[0]}" alt="">
    <button type="submit"  value="${contentA[1]}" class="searchHistoryHover">Acessar este perfil</p>
  `;
  const penultSearched = document.querySelector(".penultSearched");
  let contentB = JSON.parse(localStorage.getItem("B"));
  console.log(contentB[0]);
  penultSearched.setAttribute("id", contentB[1]);
  penultSearched.innerHTML = `
    <img src="${contentB[0]}" alt="">
    <button value="${contentB[1]}" type="submit" class="searchHistoryHover">Acessar este perfil</p>
  `;
  const antepenultSearched = document.querySelector(".antepenultSearched");
  let contentC = JSON.parse(localStorage.getItem("C"));
  console.log(contentC[0]);
  antepenultSearched.setAttribute("id", contentC[1]);
  antepenultSearched.innerHTML = `
  <img src="${contentC[0]}" alt="">
  <button type="submit" class="searchHistoryHover">Acessar este perfil</p>
  `;
};

let li = document.querySelectorAll(".searchHistory");
li.forEach((el) => {
  el.addEventListener("click", function () {
    let profile = this.id;
    localStorage.setItem("buscado", profile);
    window.location.replace("./pages/profile/profile.html");
  });
});
