/* Desenvolva sua lógica aqui...*/
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
