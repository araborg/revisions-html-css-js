/*
JavaScript is an asynchronous programming language. 
And this project will help you gain proficiency in 
asynchronous concepts. You'll code your own 
freeCodeCamp forum leaderboard.

This project will cover the:
Fetch API, 
promises, 
Async/Await, and the 
try..catch statement.


Lesson 1:
When you are ready, use const to declare a forumLatest 
variable and assign it the string 
https://forum-proxy.freecodecamp.rocks/latest.

Below that, create another const variable called 
forumTopicUrl and assign it the string 
https://forum.freecodecamp.org/t/.

const forumLatest = 
    "https://forum-proxy.freecodecamp.rocks/latest";

const forumTopicUrl = 
    "https://forum.freecodecamp.org/t/";


Lesson 2:
Next, create a const variable called forumCategoryUrl 
and assign it the string 
https://forum.freecodecamp.org/c/.

Below that, create another const variable called 
avatarUrl and assign it the string 
https://sea1.discourse-cdn.com/freecodecamp.

const forumCategoryUrl 
    = "https://forum.freecodecamp.org/c/";

const avatarUrl 
    = "https://sea1.discourse-cdn.com/freecodecamp";


Lesson 3:
Next, access the #posts-container element by using 
the getElementById() method. Assign it to a new 
constant called postsContainer.

const postsContainer = 
    document.getElementById('posts-container');


Lesson 4:
To populate the forum leaderboard with data, you will 
need to request the data from an API. This is known 
as an asynchronous operation, which means that tasks 
execute independently of the main program flow.

You can use the async keyword to create an ASYNCHRONOUS
FUNCTION, which returns a promise.

const example = async () => {
    console.log("this is an example");
};

Use the async keyword to create an asynchronous arrow 
function called fetchData.

const fetchData = async () => {}


Lesson 5:
In the last project, you used the .catch() method to 
handle errors. Here you'll use a try...catch statement 
instead.

The try block is designed to handle potential errors, 
and the code inside the catch block will be executed 
in case an error occurs.

try {
    const name = "freeCodeCamp";
    name = "fCC";
} catch (err) {
    // TypeError: Assignment to constant variable.
    console.log(err); 
}

Inside your fetchData function, add a try...catch 
statement. The catch block should have an error 
parameter named err.

const fetchData = async () => { 
    try {

    } catch (err) {
        
    }
}


Lesson 6: Note
In the previous project, you used fetch() with the 
.then() method to perform logic after the promise 
was resolved. 

Now you will use the "await" keyword to handle the 
asynchronous nature of the fetch() method.

The "await" keyword waits for a promise to resolve 
and returns the result.

const example = async () => {
    const data = await fetch("https://example.com/api");
    
    console.log(data);
}

Inside the try block, create a constant called res 
and assign it await fetch(). For the fetch call, 
pass in the forumLatest variable.

const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);
    } catch (err) {

    }
};


Lesson 7: Note
You want to get the response body as a JSON object. 

The .json() method of your res variable returns a 
promise, which means you will need to await it.

Create a constant called data and assign it the 
value of await res.json().

const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);

        const data = await res.json();
    } catch (err) {

    }
};


Lesson 8:
To view the data results, log the data variable to 
the console inside your try block.

Below your fetchData definition, call the function 
and open up the console to see the results.

const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);

        const data = await res.json();

        console.log(data);
    } catch (err) {
        
    }
};

fetchData();


Lesson 9:
If there is an error from the fetch call, the catch 
block will handle it.

Inside the catch block, add a console.log to log the 
err parameter.

Also, remove your console.log(data); from your try 
block now that you understand what is being returned 
from the fetch call.

const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);

        const data = await res.json();
    } catch (err) {
        console.log(err);
    }
};

fetchData();


Lesson 10:
Now it is time to display the data on the page.

Start by creating an arrow function called 
showLatestPosts, which takes a single data parameter.

const showLatestPosts = () => {};


Lesson 11:
As you build out your showLatestPosts() function, 
you'll need to call it to see your changes.

Call the showLatestPosts() function at the end of 
your try block and pass in data for the argument.

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


Lesson 12:
Back in your showLatestPosts() function, use 
destructuring to get the topic_list and users 
properties from the data object.

const showLatestPosts = (data) => {
    const {topic_list, users} = data;
};


Lesson 13:
The topic_list object contains a topics array which 
contains the latest topics posted to the forum.

Destructure the topics array from the topic_list 
object.

const showLatestPosts = (data) => {
    const { topic_list, users } = data;
    const {topics} = topic_list;
};


Lesson 14:
Now it is time to start populating the data inside the 
postsContainer.

Start by calling the map() method on your topics array. 
For the callback function, use an empty arrow function 
that takes item as a parameter.

Then assign the result of the map() method to 
postsContainer.innerHTML.

const showLatestPosts = (data) => {
    const { topic_list, users } = data;

    const { topics } = topic_list;

    postsContainer.innerHTML = topics.map((item) => {});
};


Lesson 15:
Inside the map method, destructure the following 
properties from the item object:

id
title
views
posts_count
slug
posters
category_id
bumped_at

const showLatestPosts = (data) => {
    const { topic_list, users } = data;

    const { topics } = topic_list;

    postsContainer.innerHTML = topics.map((item) => {
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
    });
};


Lesson 16:
The next step is to build out the table which will 
display the forum data.

Below your destructuring assignment, add a return 
keyword followed by a set of template literals. 

Inside those template literals, add a table row, 
tr element.

const showLatestPosts = (data) => {
    const { topic_list, users } = data;

    const { topics } = topic_list;

    postsContainer.innerHTML = topics.map((item) => {
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
    
            </tr>
        `;
    });
};


Lesson 17:
In the preview window, you should see a column of 
commas. To fix this, you should chain the join()
method to your map method. For the separator, pass 
in an empty string.

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
        
                </tr>
            `;
        })
        .join("");
};


Lesson 18:
Inside your tr element, add five empty td elements.

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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            `;
        })
        .join("");
};


Lesson 19:
To display the topic title, add a p element inside 
the first td element.

Between the paragraph tags, add an embedded expression 
that contains the title variable. Then add a class 
called post-title inside the opening paragraph tag.

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
                        <p class="post-title">${title}</p>
                    </td>
        
                    <td>
                    
                    </td>
        
                    <td>
                    
                    </td>
        
                    <td>
                    
                    </td>
        
                    <td>
                    
                    </td>
        
                </tr>
            `;
        })
        .join("");
};


Lesson 20:
Keep the second td element empty because you will 
add content to it later on.

In the third td element, add the following embedded 
expression: ${posts_count - 1}.

This will display the number of replies to the topic.

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
                        <p class="post-title">${title}</p>
                    </td>
        
                    <td>
                    
                    </td>
        
                    <td>
                        ${posts_count - 1}
                    </td>
        
                    <td>
                    
                    </td>
        
                    <td>
                    
                    </td>
        
                </tr>
            `;
        })
        .join("");
};


Lesson 21:
In the fourth td element, add an embedded expression 
that contains the views variable. This will display 
the number of views the post has.

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
                        <p class="post-title">${title}</p>
                    </td>
        
                    <td>
                    
                    </td>
        
                    <td>
                        ${posts_count - 1}
                    </td>
        
                    <td>
                        ${views}
                    </td>
        
                    <td>
                    
                    </td>
        
                </tr>
            `;
        })
        .join("");
};


Lesson 22:
To display data in the Activity column, you need to 
use the bumped_at property of each topic, which is 
a timestamp in the ISO 8601 format. 

You need to process this data before you can show 
how much time has passed since a topic had any 
activity.

Create a new arrow function called timeAgo with a 
parameter called time.

const timeAgo = (time) => {};


Lesson 23:
Inside the timeAgo function, create a constant called 
currentTime and assign new Date() to it.

const timeAgo = (time) => {
    const currentTime = new Date();
};


Lesson 24:
Create a new constant called lastPost and assign new 
Date(time) to it.

const timeAgo = (time) => {
    const currentTime = new Date();

    const lastPost = new Date(time);
};


Lesson 25:
Create a constant called timeDifference that will 
store the difference between currentTime and 
lastPost.

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;
};


Lesson 26:
Create a constant named msPerMinute that will store 
the number of milliseconds in a minute. 

There are 1000 * 60 milliseconds in a minute.

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;

    const msPerMinute = 1000 * 60;
};


Lesson 27:
Create a constant named minutesAgo and assign it 
Math.floor(timeDifference / msPerMinute) to get 
the number of minutes ago the post was created.

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;

    const msPerMinute = 1000 * 60;

    const minutesAgo = 
        Math.floor(timeDifference / msPerMinute);
};


Lesson 28:
Create a constant named hoursAgo that will store 
the number of hours that have passed since the 
last post. 

You can do this by dividing minutesAgo by 60, and 
then rounding down to the nearest whole number.

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;

    const msPerMinute = 1000 * 60;

    const minutesAgo = Math.floor(timeDifference / msPerMinute);
    const hoursAgo = Math.floor(minutesAgo / 60);
};


Lesson 29:
Create a constant named daysAgo that will store 
the number of days that have passed since the 
last post. You can do this by dividing hoursAgo 
by 24, and then rounding down to the nearest 
whole number.

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;

    const msPerMinute = 1000 * 60;

    const minutesAgo = Math.floor(timeDifference / msPerMinute);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
};


Lesson 30:
The next step is to return the number of minutes 
ago the post was created.

Create an if statement that checks if minutesAgo 
is less than 60. If it is, then return the template 
literal ${minutesAgo}m ago.

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;

    const msPerMinute = 1000 * 60;

    const minutesAgo = Math.floor(timeDifference / msPerMinute);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (minutesAgo < 60) {
        return `${minutesAgo}m ago`;
    }
};


Lesson 31:
Next, create another if statement to check if 
hoursAgo is less than 24. If it is, then return 
the template literal ${hoursAgo}h ago, which 
represents the number of hours ago the post was 
created.

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;

    const msPerMinute = 1000 * 60;

    const minutesAgo = Math.floor(timeDifference / msPerMinute);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (minutesAgo < 60) {
        return `${minutesAgo}m ago`;
    }

    if (hoursAgo < 24) {
        return `${hoursAgo}h ago`;
    }
};


Lesson 32:
Below your if statements, return a template literal 
with ${daysAgo}d ago which will show how many days 
ago the post was created.

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;

    const msPerMinute = 1000 * 60;

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


Lesson 33:
To display the time since the last post, call the 
timeAgo function and pass in the bumped_at variable 
for the argument. Place this function call inside 
the last td element.

Once you make those changes, scroll across the 
table to see the new values displayed in the 
Activity column.

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
                        <p class="post-title">${title}</p>
                    </td>
        
                    <td>
                    
                    </td>
        
                    <td>
                        ${posts_count - 1}
                    </td>
        
                    <td>
                        ${views}
                    </td>
        
                    <td>
                        ${timeAgo(bumped_at)}
                    </td>
        
                </tr>
            `;
        })
        .join("");
};


Lesson 34:
You need a function to convert view counts to a 
more readable format. For example, if the view 
count is 1000, it should display as 1k and if 
the view count is 100,000 it should display 
as 100k.

Create an arrow function called viewCount with 
a parameter called views.

const viewCount = (views) => {};


Lesson 35:
Create a constant named thousands and assign 
Math.floor(views / 1000) to it. This will give 
you the number of thousands in the views variable 
rounded down to the nearest thousand.

const viewCount = (views) => {
    const thousands = Math.floor(views / 1000);
};


Lesson 36:
Next, create an if statement that checks if views 
is greater than or equal to 1000. If it is, return 
the template literal ${thousands}k.

const viewCount = (views) => {
    const thousands = Math.floor(views / 1000);
    
    if (views >= 1000) {
        return `${thousands}k`;
    }
};


Lesson 37:
Lastly, return the views variable which will show 
the amount of views less than 1000.

const viewCount = (views) => {
    const thousands = Math.floor(views / 1000);

    if (views >= 1000) {
        return `${thousands}k`;
    }

    // shows the amount of views less than 1000.
    return views;
};


Lesson 38:
Inside the fourth td element, update the current 
value to instead call the viewCount function with 
the views variable as an argument.

From this:
    <td>
        ${views}
    </td>

To this:
    <td>
        ${viewCount(views)}
    </td>


Lesson 39:
Each of the forum topics includes a category like 
Python or JavaScript. In the next few steps, you 
will build out a category object which holds all 
of the forum categories and classNames for the 
styling.

Start by creating a new constant called 
allCategories and assign it the value of an 
empty object.

const allCategories = () => {};


Lesson 40:
Inside your allCategories object, add a new key 
for the number 299 (ds rep d id) with a value of 
an empty object.

Inside that object, add a property with a key of 
category and a string value of Career Advice. 

Below that property, add another key called 
className with a string value of career.

const allCategories = {
    299: {
        category: "Career Advice", 
        className: "career"
    },
};


Lesson 41:
Add a new key for the number 409 with a value of 
an empty object.

Inside that object, add a property with a key of 
category and a string value of Project Feedback.

Below that property, add another key called 
className with a string value of feedback.

const allCategories = {
    299: { 
        category: "Career Advice",
        className: "career" 
    },

    409: { 
        category: "Project Feedback",
        className: "feedback" 
    },
};


Lesson 42:
Add a new key for the number 417 with a value of 
an empty object.

Inside that object, add a property with a key of 
category and a string value of freeCodeCamp 
Support.

Below that property, add another key called 
className with a string value of support.

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
};


Lesson 43:
The rest of the allCategories object has been 
completed for you.

In the next few steps, you will create a function 
to retrieve the category name from the allCategories 
object.

Start by creating an arrow function named 
forumCategory, with id as the parameter name.

const allCategories = {
    299: { 
        category: "Career Advice", 
        className: "career" 
    },
    
    409: { 
        category: "Project Feedback", 
        className: "feedback" 
    },
    
    417: { 
        category: "freeCodeCamp Support", 
        className: "support" 
    },
    
    421: { 
        category: "JavaScript", 
        className: "javascript" 
    },
    
    423: { 
        category: "HTML - CSS", 
        className: "html-css" 
    },
    
    424: { 
        category: "Python", 
        className: "python" 
    },
    
    432: { 
        category: "You Can Do This!", 
        className: "motivation" 
    },
    
    560: { 
        category: "Backend Development", 
        className: "backend" 
    },
};

const forumCategory = (id) => {}


Lesson 44:
Inside your forumCategory function, create a new 
let variable named selectedCategory and assign it 
an empty object. This will be used to store the 
category name and class name for each category.

const forumCategory = (id) => {
    let selectedCategory = {};
};


Lesson 45:
Create an if statement to check if the allCategories 
object has a property of id. Remember, you can use 
the hasOwnProperty() method for this.

const forumCategory = (id) => {
    let selectedCategory = {};

    if (allCategories.hasOwnProperty(id)) {}
};


Lesson 46:
Inside the if statement, destructure className and 
category from the allCategories[id] object.

const forumCategory = (id) => {
    let selectedCategory = {};

    if (allCategories.hasOwnProperty(id)) {
        const {className, category} = allCategories[id];
    }
};


Lesson 47:
You now need to update the className and category 
for your selectedCategory object.

Start by assigning the className property to 
selectedCategory.className. Then assign category to 
selectedCategory.category.

const forumCategory = (id) => {
    let selectedCategory = {};

    if (allCategories.hasOwnProperty(id)) {
        const { category, className } = allCategories[id];

        selectedCategory.category = category;
        selectedCategory.className = className;
    }
};


Lesson 48:
If the id is not in the allCategories object, you 
will need to display the General category.

Below your if statement, add an else clause.

const forumCategory = (id) => {
    let selectedCategory = {};

    if (allCategories.hasOwnProperty(id)) {
        const { category, className } = allCategories[id];

        selectedCategory.category = category;
        selectedCategory.className = className;
    } else {
    }
};


Lesson 49:
Inside your else statement, assign the string 
general to selectedCategory.className.

Below that, assign the string General to 
selectedCategory.category.

Lastly, assign the number 1 to selectedCategory.id.

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
};


Lesson 50:
Every category will have a URL that points to the 
category on the freeCodeCamp forum.

Create a constant called url and assign it a 
template literal. 

Inside that template literal, place the value of 
${forumCategoryUrl}${selectedCategory.className}/${id}.

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

    const url = `
        ${forumCategoryUrl}${selectedCategory.className}/${id}
    `;
};


Lesson 51:
Create a constant called linkText and assign it 
the value of selectedCategory.category. This will 
display the name of the category in the anchor 
element.

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
};


Lesson 52:
Create a constant called linkClass and assign it 
a template literal. Inside that template literal, 
add the value of category 
${selectedCategory.className}.

These class names will be used to apply styles 
for the anchor element.

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
};


Lesson 53:
Next, return an anchor element inside template 
literals. For the href attribute, assign the value 
of the url constant.

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
        <a href="${url}">

        </a>
    `;
};


Lesson 54:
After the href attribute, set the class attribute 
to the constant named linkClass.

After the class attribute, set the target attribute 
to _blank.

Lastly, place the linkText constant in between the 
anchor tags to display the text in the link.

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


Lesson 55:
Inside, the first td element, add an embedded 
expression ${}. Inside that expression, call the 
forumCategory function with the argument of 
category_id.

Now, you should see a category displayed underneath 
each post topic.

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
                        <p class="post-title">${title}</p>

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


Lesson 56:
Each forum post will include a list of user avatar 
images which represent all of the users participating 
in the conversation for that topic.

Start by creating an arrow function called avatars, 
with two parameters called posters and users.

const avatars = (posters, users) => {};


Lesson 57:
The next step is to loop through the posters array 
to get all of their avatars.

Start by adding a return keyword followed by 
posters.map(). 

For the callback function, add a parameter called 
poster.

const avatars = (posters, users) => {
    return posters.map((poster) => {});
};


Lesson 58:
The next step is to find the correct user in the users 
array.

Start by creating a constant called user and assign it 
users.find(). The find method should have a callback 
function with a parameter of user.

Inside the find method, implicitly return user.id 
strictly equal to poster.user_id.

const avatars = (posters, users) => {
    return posters.map((poster) => {
        const user = users.find(user => user.id === poster.user_id);
    });
};


Lesson 59:
Next, check if the user exists. Add an if statement 
with user for the condition.

const avatars = (posters, users) => {
    return posters.map((poster) => {
        const user = users.find((user) => user.id === poster.user_id);

        if (user) {
        }
    });
};


Lesson 60:
To customize the avatar's size, you can set it to 
a value of 30.

Start by creating a constant called avatar. Then 
assign it the result of using the replace method 
on user.avatar_template.

For the replace method, use /{size}/ for the first 
argument and the number 30 for the second argument.


const avatars = (posters, users) => {
    return posters.map((poster) => {
        const user = users.find((user) => user.id === poster.user_id);
        
        if (user) {
            const avatar = user.avatar_template.replace(/{size}/, 30);
        }
    });
};


Lesson 61:
Next, you will construct the userAvatarUrl.

Start by creating a constant called userAvatarUrl. 
Then use a ternary operator to check if avatar starts 
with "/user_avatar/".

If so, use the concat method to concatenate avatar 
to avatarUrl. Otherwise return avatar.

This will ensure the avatar URL is correctly formed 
whether it's a relative or absolute URL.

const avatars = (posters, users) => {
    return posters.map((poster) => {
        const user = users.find((user) => user.id === poster.user_id);

        if (user) {
            const avatar = user.avatar_template.replace(/{size}/, 30);

            const userAvatarUrl = avatar.startsWith("/user_avatar/") 
                ? avatarUrl.concat(avatar) 
                : avatar
        }
    });
};


Lesson 62:
Lastly, you will need to return the image for the 
user avatar.

Start by adding a return followed by a set of template 
literals. 

Inside the template literals, add an img element.

Inside the img element, add a src attribute with the 
value of ${userAvatarUrl}. For the alt attribute, add 
a value of ${user.name}.

const avatars = (posters, users) => {
    return posters.map((poster) => {
        const user = users.find((user) => user.id === poster.user_id);

        if (user) {
            const avatar = user.avatar_template.replace(/{size}/, 30);

            const userAvatarUrl = avatar.startsWith("/user_avatar/")
                ? avatarUrl.concat(avatar)
                : avatar;

            return `
                <img
                    src="${userAvatarUrl}"

                    alt="${user.name}"
                />
            `;
        }
    });
};


Lesson 63:
At the end of your map method, chain the join() 
method. For the separator, pass in an empty string.

const avatars = (posters, users) => {
    return posters
        .map((poster) => {
            const user = users.find((user) => user.id === poster.user_id);

            if (user) {
                const avatar = user.avatar_template.replace(/{size}/, 30);

                const userAvatarUrl = avatar.startsWith("/user_avatar/")
                    ? avatarUrl.concat(avatar)
                    : avatar;

                return `
                    <img
                        src="${userAvatarUrl}"

                        alt="${user.name}"
                    />
                `;
            }
        })
        .join("");
};


Lesson 64:
For the remaining steps, you will add the functionality
to display the user avatars.

Inside the second td element, add a div element with 
a class name of avatar-container.

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
                        <p class="post-title">${title}</p>

                        ${forumCategory(category_id)}
                    </td>
        
                    <td>
                        <div class="avatar-container">
                        
                        </div>
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


Lesson 65:
Inside the div element, call the avatars function and 
pass in the arguments of posters and users.

Now you should see the avatars displayed on the page.

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
                        <div class="avatar-container">
                            ${avatars(posters, users)}
                        </div>
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


Lesson 66:
Your project is almost complete. It is just missing 
one last piece.

Users should be able to click on any post title and 
be directed to the actual post on the freeCodeCamp 
forum.

Start by changing the existing paragraph element 
inside the first td element to be an anchor element.

This:
    <p class="post-title">${title}</p>

To this:
    <a class="post-title">${title}</a>


Lesson 67:
For the opening a tag, set the target attribute 
to _blank. Then, set the href attribute to 
${forumTopicUrl}${slug}/${id}.

<a 
    class="post-title" 
    target="_blank" 
    href="${forumTopicUrl}${slug}/${id}"
>
    ${title}
</a>


*/
