const sorts = document.querySelectorAll(".sort");
const cards = document.querySelector(".cards");

const defaultCategory = "fonts";

fetch("/assets/resources/fonts/fonts.json")
  .then((res) => res.json())
  .then((data) => displayCategory(data));

function displayCategory(catagory) {
  const cardDiv = document.createElement("div");

  cardDiv.className = "card";
  cardDiv.className = "card";
  catagory.forEach((i) => {
    const card = document.createElement("div");

    card.className = "card";
    card.innerHTML = `
        <span><img src='/assets/resources/${defaultCategory}/${i.Icon}'/></span>
        <h4 class="title">${i.Title}</h4>
        <p class="content">${i.Description}</p>
        <a href="${i.Link}">Visit Resource</a>
    `;

    cards.appendChild(card);
  });
}

sorts.forEach((s) => {
  s.addEventListener("click", function () {
    sorts.forEach((s) => s.classList.remove("active"));
    s.classList.add("active");
    const sortType = s.innerText;

    fetch(`/assets/resources/${sortType}/${sortType}.json`)
      .then((data) => data.json())
      .then((res) => displayCard(res, sortType));
  });
});

function displayCard(items, sortType) {
  console.log(items);

  cards.innerHTML = "";

  items.forEach((i) => {
    const card = document.createElement("div");

    card.className = "card";
    card.innerHTML = `
        <span>
          <img src='/assets/resources/${sortType}/${i.Icon}'/>
        </span>
        <h4 class="title">${i.Title}</h4>
        <p class="content">${i.Description}</p>
        <a class="card-link" href="${i.Link}">Visit Resource</a>
    `;

    cards.appendChild(card);
  });
}

// nav hambergur interactions

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  const nav = document.querySelector("nav");

  nav.classList.toggle("active");
}

// fixing asset path for git
