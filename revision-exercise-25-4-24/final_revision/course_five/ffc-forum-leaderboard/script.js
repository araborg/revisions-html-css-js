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
	const {topic_list, users} = data;
	const {topics} = topic_list;

	postContainer.innerHTML = topics
		.map((item) => {
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

			return `
				<tr>
					<td>
						<a class="post-title" target="_blank" href="${forumTopicUrl}${slug}/${id}">
							${title}
						</a>

						${forumCategory(category_id)}
					</td>

					<td>
						<div class="avatar-container">
							${avatars(posters, users)}
						</div>
					</td>

					<td>${posts_count - 1}</td>

					<td>${viewCount(views)}</td>

					<td>${timeAgo(bumped_at)}</td>
				</tr>
			`;
		})
		.join("");
};

const forumCategory = (id) => {
	let selectedCategory = {};

	// ds will aslo work: if (allCategories[id]) {}
	if (allCategories.hasOwnProperty(id)) {
		const {className, category} = allCategories[id];

		selectedCategory.className = className;
		selectedCategory.category = category;
	} else {
		// if dre is no id
		selectedCategory.id = 1;

		selectedCategory.className = "general";
		selectedCategory.category = "General";
	}

	// link attributes
	const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;

	const linkText = selectedCategory.category;
	const linkClass = `category ${selectedCategory.className}`;

	return `<a href="${url}" class="${linkClass}" target="_blank">
        ${linkText}
    </a>`;
};

const avatars = (posters, users) => {
	return posters
		.map((poster) => {
			const user = users.find(
				(user) => user.id === poster.user_id
			);

			if (user) {
				const avatar = user.avatar_template.replace(
					/{size}/,
					30
				);

				const userAvatarUrl = avatar.startsWith(
					"/user_avatar"
				)
					? avatarUrl.concat(avatar)
					: avatar;

				// https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/quincylarson/30/212400_2.png

				// const avatarUrl =
				// "https://sea1.discourse-cdn.com/freecodecamp";

				return `<img src="${userAvatarUrl}" alt="${user.name}"/>`;
			}
		})
		.join("");
};

const viewCount = (views) => {
	const thousands = Math.floor(views / 1000);

	if (views >= 1000) {
		return `${thousands}k`;
	}

	return views;
};

const timeAgo = (time) => {
	const currentTime = new Date();
	const lastPost = new Date(time);

	const timeDifference = currentTime - lastPost;

	// ms in minute
	const msPerMinute = 1000 * 60;

	const minutesAgo = Math.floor(
		timeDifference / msPerMinute
	);
	const hoursAgo = Math.floor(minutesAgo / 60);
	const daysAgo = Math.floor(hoursAgo / 24);

	if (minutesAgo < 60) {
		return `${minutesAgo}m ago`;
	}

	if (hoursAgo < 60) {
		return `${hoursAgo}h ago`;
	}

	return `${daysAgo}d ago`;
};
