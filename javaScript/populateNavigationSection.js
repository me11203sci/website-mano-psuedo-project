const entryData = [
  {
    "title": "Profile",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "previewImage": "./images/placeHolderImages/placeHolder.jpg",
    "embeddedLink": "./hyperTextMarkupLanguage/profile.html"
  },
  {
    "title": "Experiences",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "previewImage": "./images/placeHolderImages/placeHolder.jpg",
    "embeddedLink": "./hyperTextMarkupLanguage/experiences.html"
  },
  {
    "title": "Evidence",
    "summary": "Ever listen to Huey Lewis and the News?",
    "previewImage": "./images/placeHolderImages/placeHolder.jpg",
    "embeddedLink": "./hyperTextMarkupLanguage/evidence.html"
  }
];

document.getElementById('navigation-section').innerHTML = `
  ${entryData.map(function(entry)
  {
    return `
      <div class='entry-wrapper'>
        <div class='entry-text-containter'>
          <a href='${entry.embeddedLink}' class='entry-title'>${entry.title}</a>
          <p class='entry-summary'>${entry.summary}</p>
          <a href='${entry.embeddedLink}' class='embedded-link'>Read More ></a>
        </div>
        <a href ='${entry.embeddedLink}'>
          <img class='entry-image' src='${entry.previewImage}'>
        </a>
      </div>
    `
  }).join('')}
`;
