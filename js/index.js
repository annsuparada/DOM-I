const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//NAV
let navLink1 = document.getElementsByTagName("a")[0];
let navLink2 = document.getElementsByTagName("a")[1];
let navLink3 = document.getElementsByTagName("a")[2];
let navLink4 = document.getElementsByTagName("a")[3];
let navLink5 = document.getElementsByTagName("a")[4];
let navLink6 = document.getElementsByTagName("a")[5];

navLink1.innerText = siteContent["nav"]["nav-item-1"];
navLink2.innerText = siteContent["nav"]["nav-item-2"];
navLink3.innerText = siteContent["nav"]["nav-item-3"];
navLink4.innerText = siteContent["nav"]["nav-item-4"];
navLink5.innerText = siteContent["nav"]["nav-item-5"];
navLink6.innerText = siteContent["nav"]["nav-item-6"];

// `.appendChild()` and `.prepend()
//appendChild
let nav = document.getElementsByTagName("nav");
let node1 = document.createElement("a");
let textNode1 = document.createTextNode("test1");
node1.appendChild(textNode1);
nav[0].appendChild(node1);

//prepend
let node2 = document.createElement("a");
let textNode2 = document.createTextNode("test2");
node1.appendChild(textNode2);
nav[0].prepend(node2);

//chenge nav items to green color
let a = document.getElementsByTagName("a");

function styleGreen() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.color = "green";
  }
}

styleGreen();

//CTA
let header = document.querySelector("h1");
let btn = document.querySelector("button");
let ctaImg = document.getElementById("cta-img");

header.innerText = siteContent["cta"]["h1"];
btn.innerHTML = siteContent["cta"]["button"];
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Content
// h4
let featuresH4 = document.getElementsByTagName("h4")[0];
let aboutH4 = document.getElementsByTagName("h4")[1];
let servicesH4 = document.getElementsByTagName("h4")[2];
let productH4 = document.getElementsByTagName("h4")[3];
let visionH4 = document.getElementsByTagName("h4")[4];

//contents
let featuresContent = document.getElementsByTagName("p")[0];
let aboutContent = document.getElementsByTagName("p")[1];
let servicesContent = document.getElementsByTagName("p")[2];
let productContent = document.getElementsByTagName("p")[3];
let visionContent = document.getElementsByTagName("p")[4];

// h4
featuresH4.innerText = siteContent["main-content"]["features-h4"];
aboutH4.innerText = siteContent["main-content"]["about-h4"];
servicesH4.innerText = siteContent["main-content"]["services-h4"];
productH4.innerText = siteContent["main-content"]["product-h4"];
visionH4.innerText = siteContent["main-content"]["vision-h4"];

//contents
featuresContent.innerText = siteContent["main-content"]["features-content"];
aboutContent.innerText = siteContent["main-content"]["about-content"];
servicesContent.innerText = siteContent["main-content"]["services-content"];
productContent.innerText = siteContent["main-content"]["product-content"];
visionContent.innerText = siteContent["main-content"]["vision-content"];

//middle-img
let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact
let contactH4 = document.getElementsByTagName("h4")[5];
let address = document.getElementsByTagName("p")[5];
let phone = document.getElementsByTagName("p")[6];
let email = document.getElementsByTagName("p")[7];

contactH4.innerText = siteContent["contact"]["contact-h4"];
address.innerText = siteContent["contact"]["address"];
phone.innerText = siteContent["contact"]["phone"];
email.innerText = siteContent["contact"]["email"];

//footer
let copyright = document.getElementsByTagName("p")[8];

copyright.innerText = siteContent["footer"]["copyright"];
