const entryData = [
  {
    "title": "Profile",
    "summary": "This text is a placeholder.",
    "previewImage": "./images/placeHolder.jpg"
  },
  {
    "title": "Experiences",
    "summary": "Different text so I know it works and that I am not going insane.",
    "previewImage": "./images/placeHolder.jpg"
  }
];

document.getElementById('navigation-section').innerHTML = `${entryData.join('')}`;
