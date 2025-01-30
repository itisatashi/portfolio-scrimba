import {dataOfBlogs} from "./data-images.js";

const recentPostsModul = document.getElementById("recent-posts");

function displayBlogs(number) {
    recentPostsModul.textContent = "";
    const button = document.createElement("button");
    button.id = "view-more";
    button.className = "view-more";
    button.textContent = "view more";
    button.addEventListener("click", whenViewLessIsClicked);
    let blogLists = "";
    let count = 0;

    for (let index = dataOfBlogs.length - 1; index >= 0; index--) {
        if (count < number) {
            const blog = dataOfBlogs[index];
            blogLists += `
            <div class="blog">
                    <img
                        class="blog-img"
                        src="${blog.src}"
                        alt=""
                    />
                    <article class="blog-content">
                        <time datetime="${blog.date[0]}">${blog.date[1]}</time>
                        <h2>${blog.title}</h2>
                        <p>
                           ${blog.text}
                        </p>
                          <a class="next-page" href="/html/blogs.html"
                        >Discover more</a
                    >
                    </article>
                </div>
        `;
        }
        count++;
    }

    recentPostsModul.innerHTML = blogLists;
    recentPostsModul.appendChild(button);
}

function whenViewLessIsClicked() {
    recentPostsModul.textContent = "";
    const button = document.createElement("button");
    button.id = "view-more";
    button.className = "view-more";
    button.textContent = "view more";
    button.addEventListener("click", whenViewMoreIsClicked);
    let blogLists = "";
    let count = 0;

    for (let index = dataOfBlogs.length - 1; index >= 0; index--) {
        if (count < 3) {
            const blog = dataOfBlogs[index];
            blogLists += `
            <div class="blog">
                    <img
                        class="blog-img"
                        src="${blog.src}"
                        alt=""
                    />
                    <article class="blog-content">
                        <time datetime="${blog.date[0]}">${blog.date[1]}</time>
                        <h2>${blog.title}</h2>
                        <p>
                           ${blog.text}
                        </p>
                          <a class="next-page" href="/html/blogs.html"
                        >Discover more</a
                    >
                    </article>
                </div>
        `;
        }
        count++;
    }
    recentPostsModul.innerHTML = blogLists;
    recentPostsModul.appendChild(button);
}

function whenViewMoreIsClicked() {
    recentPostsModul.textContent = "";
    const button = document.createElement("button");
    button.id = "view-less";
    button.className = "view-less";
    button.textContent = "view less";
    button.addEventListener("click", whenViewLessIsClicked);
    let blogLists = "";

    for (let index = dataOfBlogs.length - 1; index >= 0; index--) {
        const blog = dataOfBlogs[index];
        blogLists += `
            <div class="blog">
                    <img
                        class="blog-img"
                        src="${blog.src}"
                        alt=""
                    />
                    <article class="blog-content">
                        <time datetime="${blog.date[0]}">${blog.date[1]}</time>
                        <h2>${blog.title}</h2>
                        <p>
                           ${blog.text}
                        </p>
                          <a class="next-page" href="/html/blogs.html"
                        >Discover more</a
                    >
                    </article>
                </div>
        `;
    }
    recentPostsModul.innerHTML = blogLists;
    recentPostsModul.appendChild(button);
}
displayBlogs(3);
