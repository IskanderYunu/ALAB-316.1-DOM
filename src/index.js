// Menu data structure 
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


//  Part 1: Getting Started 
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Part 2: Menu Bar
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3: Menu Buttons
menuLinks.forEach(link => {
  const newEl = document.createElement("a");
  newEl.href = link.href;
  newEl.textContent = link.text;
  topMenuEl.append(newEl);
})

// ALAB Part 2 ==================================== //

// Part 3 
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Part 4
//Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  topMenuEl.querySelectorAll("a").forEach(link => link.classList.remove("active"));
  event.target.classList.toggle("active");
});

// Part 4.2
topMenuEl.addEventListener("click", event => {
  // Prevent default link behavior
  event.preventDefault();

  // Return if the clicked element is not an <a> tag
  if (event.target.tagName !== "A") return;

  // Remove the "active" class from all <a> elements in topMenuEl
  topMenuEl.querySelectorAll("a").forEach(link => link.classList.remove("active"));

  // Toggle the "active" class on the clicked <a> element
  event.target.classList.toggle("active");
});
