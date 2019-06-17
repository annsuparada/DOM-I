const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br>Is <br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",    
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', "img/header-img.png");
cta.setAttribute('atr', 'Image of a code snippet')

let middle = document.getElementById("middle-img")
middle.setAttribute('src', 'img/mid-page-accent.jpg')
cta.setAttribute('atr', 'Image of code snippets across the screen')



let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];
 

// let mainContent = document.querySelector('.text-content h4');
// mainContent.innerText = siteContent['main-content']['features-h4']

const mainH4 = document.querySelectorAll('.main-content .text-content h4');
const mainContent = document.querySelectorAll('.main-content .text-content p')

mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainContent[0].textContent = siteContent['main-content']['features-content'];
mainH4[1].textContent = siteContent['main-content']['about-h4'];
mainContent[1].textContent = siteContent['main-content']['about-content'];

mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainContent[2].textContent = siteContent['main-content']['services-content'];
mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainContent[3].textContent = siteContent['main-content']['product-content'];
mainH4[4].textContent = siteContent['main-content']['vision-h4'];
mainContent[4].textContent = siteContent['main-content']['vision-content'];






const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];