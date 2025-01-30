import {dataOfBlogs} from "./data-images.js";

const mainEl = document.querySelector("#main");
const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelector("#nav-links");

// When navBar is clicked
function handleViewportSize() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (navLinks.classList.contains("hidden")) {
            navLinks.classList.remove("hidden");
        }
    }
}

handleViewportSize();

window.addEventListener("resize", handleViewportSize);

navBar.addEventListener("click", function () {
    navLinks.classList.toggle("hidden");
});

// When viewMoreEl and viewLessEl are clicked
function whenViewMoreIsClicked() {
    mainEl.textContent = "";
    const button = document.createElement("button");
    button.id = "view-less";
    button.className = "view-less";
    button.textContent = "view less";
    button.addEventListener("click", whenViewLessIsClicked);
    let listOfPosts = "";
    dataOfBlogs.forEach((data) => {
        listOfPosts += `
            <section class="blog">
                <img class="blog-img" src="${data.src}" alt="" />
                <article class="blog-content">
                    <time datetime="${data.date[0]}">${data.date[1]}</time>
                    <h2>${data.title}</h2>
                    <p>
                       ${data.text}
                    </p>
                     <a class="next-page" href="/html/blogs.html"
                        >Discover more</a
                    >
                </article>
            </section>
        `;
    });
    mainEl.innerHTML = listOfPosts;
    mainEl.appendChild(button);
}

function whenViewLessIsClicked() {
    if (window.matchMedia("(max-width: 500px)").matches) {
        reduceNumberOfImages(3);
    } else if (window.matchMedia("max-width: 768px").matches) {
        reduceNumberOfImages(4);
    } else {
        reduceNumberOfImages(6);
    }
}

function reduceNumberOfImages(count) {
    mainEl.textContent = "";
    const button = document.createElement("button");
    button.id = "view-more";
    button.className = "view-more";
    button.textContent = "view more";
    button.addEventListener("click", whenViewMoreIsClicked);
    let listOfPosts = "";
    dataOfBlogs.forEach((data, index) => {
        if (index < count) {
            listOfPosts += `
            <section class="blog">
                <img class="blog-img" src="${data.src}" alt="" />
                <article class="blog-content">
                    <time datetime="${data.date[0]}">${data.date[1]}</time>
                    <h2>${data.title}</h2>
                    <p>
                       ${data.text}
                    </p>
                     <a class="next-page" href="/html/blogs.html"
                        >Discover more</a
                    >
                </article>
            </section>
        `;
        }
    });
    mainEl.innerHTML = listOfPosts;
    mainEl.appendChild(button);
}

// When viewport width extends
function displayImages(count) {
    mainEl.textContent = "";
    const button = document.createElement("button");
    button.id = "view-more";
    button.className = "view-more";
    button.textContent = "view more";
    button.addEventListener("click", whenViewLessIsClicked);
    let listOfPosts = "";
    dataOfBlogs.forEach((data, index) => {
        if (index < count) {
            listOfPosts += `
                <section class="blog">
                    <img class="blog-img" src="${data.src}" alt="" />
                    <article class="blog-content">
                        <time datetime="${data.date[0]}">${data.date[1]}</time>
                        <h2>${data.title}</h2>
                        <p>
                            ${data.text}
                        </p>
                         <a class="next-page" href="/html/blogs.html"
                        >Discover more</a
                    >
                    </article>
                </section>
            `;
        }
    });
    mainEl.innerHTML = listOfPosts;
    mainEl.appendChild(button);
}

// Default displaying images function
function defaultDisplayImages() {
    if (
        window.matchMedia("(min-width:0px)").matches &&
        window.matchMedia("(max-width:499px)").matches
    ) {
        displayImages(3);
    } else if (
        window.matchMedia("(min-width: 500px)").matches &&
        window.matchMedia("(max-width:767px)").matches
    ) {
        displayImages(4);
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        displayImages(6);
    }
}
defaultDisplayImages();
window.addEventListener("resize", defaultDisplayImages);
