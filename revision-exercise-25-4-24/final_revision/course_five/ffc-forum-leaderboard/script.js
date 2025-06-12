const postContainer = document.getElementById(
	"posts-container"
);

const forumLatest =
	"https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";

const forumTopicUrl = "https://forum.freecodecamp.org/t/";

const forumCategoryUrl =
	"https://forum.freecodecamp.org/c/";

const avatarUrl =
	"https://sea1.discourse-cdn.com/freecodecamp";

const allCategories = {
	299: {category: "Career Advice", className: "career"},
	409: {
		category: "Project Feedback",
		className: "feedback",
	},

	417: {
		category: "freeCodeCamp Support",
		className: "support",
	},

	421: {category: "JavaScript", className: "javascript"},
	423: {category: "HTML - CSS", className: "html-css"},
	424: {category: "Python", className: "python"},

	432: {
		category: "You Can Do This!",
		className: "motivation",
	},

	560: {
		category: "Backend Development",
		className: "backend",
	},
};

const fetchData = async () => {
	try {
		const res = await fetch(forumLatest);
		const data = await res.json();

		// console.log(data);

		console.log("flair_groups:"`${data.flair_groups}`);
		// console.log(
		// 	`primary_groups: ${data.primary_groups``}
		// );
		// console.log(`flair_groups: ${data.flair_groups}`);
		// console.log(`topic_list: ${data.topic_list}`);
	} catch (err) {
		console.log(err);
	}
};

fetchData();
