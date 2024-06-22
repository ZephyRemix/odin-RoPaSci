const resultSection = document.querySelector(".results-section");

console.log(resultSection.textContent);

let roundWinnerAnnouncement = document.createTextNode("");
resultSection.appendChild(roundWinnerAnnouncement);

resultSection.childNodes.textContent = "Added a text"