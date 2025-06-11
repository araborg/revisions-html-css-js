const authorContainer = document.getElementById(
	"author-container"
);

const loadMoreBtn =
	document.getElementById("load-more-btn");

let startingIndex = 0;
let endingIndex = 8;

let authorDataArr = [];

fetch(
	"https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"
)
	.then((res) => res.json())
	.then((data) => {
		authorDataArr = data;

		console.log(authorDataArr);
	})
	.catch((err) => {
		authorContainer.inerttHTML = `
            <p class='error-msg'>
                There was an error loading the authors
            </p>
        `;

		// console.error("Error fetching author data:", err);
	});

const displayAuthors = (authors) => {
	authors.forEach(({author, image, url, bio}, index) => {
		authorContainer.innerHTML += `
            <div id="${index}" class="user-card">
                <h2 class="author-name"">${author}</h2>

                <img class="user-img" src="${image}" alt="${author} avatar">

                <div class="purple-divider"></div>

                <p class="bio">

                </p>
            </div>
        `;
	});
};
