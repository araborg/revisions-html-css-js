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

		showLatestPosts(data);
	} catch (err) {
		console.log(err);
	}
};

fetchData();

const showLatestPosts = (data) => {
	// console.log(data);

	const {topic_list, users} = data;
	const {topics} = topic_list;

	postContainer.innerHTML = topics.map((item) => {
		const {
			bumped_at,
			category_id,
			id,
			posters,
			posts_count,
			slug,
			title,
			views,
		} = item;
	});
};

/*
id: 686136
bumped_at: "2024-04-19T11:47:25.603Z"
category_id: 423
posters: (2) [{…}, {…}]
posts_count: 3

slug: "personal-portfolio-webpage-build-a-personal-portfolio-webpage"

title: "Personal Portfolio Webpage - Build a Personal Portfolio Webpage"

views: 23




======================


archetype: "regular"
archived: false
bookmarked: null
bumped: true
bumped_at: "2024-04-19T11:47:25.603Z"
can_vote: false
category_id: 423
closed: false
created_at: "2024-04-19T11:37:53.476Z"
fancy_title: "Personal Portfolio Webpage - Build a Personal Portfolio Webpage"

featured_link: null
has_accepted_answer: true
has_summary: false
highest_post_number: 3
id: 686136
image_url: null
last_posted_at: "2024-04-19T11:47:25.603Z"
last_poster_username: "chiebukabonaventure"
like_count: 1
liked: null
pinned: false
pinned_globally: false
posters: (2) [{…}, {…}]
posts_count: 3
reply_count: 1
slug: "personal-portfolio-webpage-build-a-personal-portfolio-webpage"
tags_descriptions: {}
title: "Personal Portfolio Webpage - Build a Personal Portfolio Webpage"
unpinned: null
unseen: false
views: 23
visible: true


*/
