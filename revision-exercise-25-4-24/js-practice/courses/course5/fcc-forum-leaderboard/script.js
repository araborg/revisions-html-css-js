const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://sea1.discourse-cdn.com/freecodecamp";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

console.log(forumCategoryUrl);

const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);

        const data = await res.json();

        showLatestPosts(data);
    } catch (err) {
        console.error(err);
    }
};

fetchData();

const showLatestPosts = (data) => {
    const { topic_list, users } = data;

    const { topics } = topic_list;

    postsContainer.innerHTML = topics
        .map((item) => {
            const {
                id,
                title,
                views,
                posts_count,
                slug,
                posters,
                category_id,
                bumped_at,
            } = item;

            return `
                <tr>
                    <td>
                        <p class="post-title">${title}</title>

                        ${forumCategory(category_id)}
                    </td>
        
                    <td>
                    
                    </td>
        
                    <td>
                        ${posts_count - 1}
                    </td>
        
                    <td>
                        ${viewCount(views)}
                    </td>
        
                    <td>
                        ${timeAgo(bumped_at)}
                    </td>
        
                </tr>
            `;
        })
        .join("");
};

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;

    // one minute = 1000 * 60 milliseconds
    const msPerMinute = 60 * 1000;

    const minutesAgo = Math.floor(timeDifference / msPerMinute);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (minutesAgo < 60) {
        return `${minutesAgo}m ago`;
    }

    if (hoursAgo < 24) {
        return `${hoursAgo}h ago`;
    }

    return `${daysAgo}d ago`;
};

const viewCount = (views) => {
    const thousands = Math.floor(views / 1000);

    if (views >= 1000) {
        return `${thousands}k`;
    }

    // shows the amount of views less than 1000.
    return views;
};

const allCategories = {
    299: {
        category: "Career Advice",
        className: "career",
    },

    409: {
        category: "Project Feedback",
        className: "feedback",
    },

    417: {
        category: "freeCodeCamp Support",
        className: "support",
    },

    421: {
        category: "JavaScript",
        className: "javascript",
    },

    423: {
        category: "HTML - CSS",
        className: "html-css",
    },

    424: {
        category: "Python",
        className: "python",
    },

    432: {
        category: "You Can Do This!",
        className: "motivation",
    },

    560: {
        category: "Backend Development",
        className: "backend",
    },
};

const forumCategory = (id) => {
    let selectedCategory = {};

    if (allCategories.hasOwnProperty(id)) {
        const { category, className } = allCategories[id];

        selectedCategory.category = category;
        selectedCategory.className = className;
    } else {
        selectedCategory.category = "General";
        selectedCategory.className = "general";

        selectedCategory.id = 1;
    }

    const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
    const linkText = selectedCategory.category;
    const linkClass = `${selectedCategory.className}`;

    return `
        <a 
            href="${url}" 
            className="${linkClass}" 
            target="_blank"
        >
            ${linkText}
        </a>
    `;
};

const avatars = (posters, users) => {
    return posters.map((poster) => {
        const user = users.find((user) => {});
    });
};
