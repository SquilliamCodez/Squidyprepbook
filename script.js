let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");
let darkModeButton = document.querySelector("#dark mode");

let students = [
  {
    profileImage:
      "https://cdn.glitch.com/a350140b-e7cf-469e-95b5-a723abec5d2a%2F416DEB06-F5D5-46EE-AD23-8FC69D211E12.png?v=1585522445935",
    name: "Jinmaris Alicea",
    quote: "YOLO",
    superlative: "Most Spirited"
  },
  {
    profileImage:
      "https://cdn.glitch.com/a350140b-e7cf-469e-95b5-a723abec5d2a%2F28D221A8-E219-4F46-AEED-DA6B9508871D.png?v=1585522433613",
    name: "Ericka Sanchez",
    quote: "I'm usually sad all the time",
    superlative: "Best Happy Face"
  },
  {
    profileImage:
      "https://cdn.glitch.com/a350140b-e7cf-469e-95b5-a723abec5d2a%2F78D87125-E231-4297-83C7-CC53F14FE8F3.jpeg?v=1585522512334",
    name: "Miguel Lucero",
    quote: "Why are you the way that you are ?",
    superlative: "Most Genuine"
  },
  {
    profileImage:
      "https://cdn.glitch.com/a350140b-e7cf-469e-95b5-a723abec5d2a%2F1E93297C-B766-405F-B6D1-A72E2143BE89.jpeg?v=1585522454618",
    name: "Naylene Martinez",
    quote: "it izzzz what it izzzzzzz",
    superlative: "Best personality"
  },
  {
    profileImage:
      "https://cdn.glitch.com/a350140b-e7cf-469e-95b5-a723abec5d2a%2FE8622119-EA18-4694-8B71-D6DA08E2F973.jpeg?v=1585522485295",
    name: "Abigail Rosario",
    quote: "I hate it here",
    superlative: "Best laugh"
  },
  {
    profileImage:
      "https://cdn.glitch.com/a350140b-e7cf-469e-95b5-a723abec5d2a%2F87B6E017-AF0C-4116-81CD-5290D317F260.jpeg?v=1585522529805",
    name: "Steven Santos",
    quote: "that's what she said",
    superlative: "coolest dude"
  },
  {
    profileImage:
      "https://cdn.glitch.com/a350140b-e7cf-469e-95b5-a723abec5d2a%2FFC968BEE-A60A-4D22-B29D-FBA0460EA217.jpeg?v=1585522401105",
    name: "Demian Aviles",
    quote: "dang",
    superlative: "Most fashionable"
  },
  {
    profileImage:
      "https://cdn.glitch.com/a350140b-e7cf-469e-95b5-a723abec5d2a%2FE897FA91-5A3C-4CB4-BE39-EB52E784A93F.jpeg?v=1585522420901",
    name: "Emmanuel Taveras",
    quote: "Que lo que",
    superlative: "most wholesome"
  }
];
let count = 0;
let stupidLoop = students.length-1
document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#superlative").innerHTML = students[count].superlative;
document.querySelector("#quote").innerHTML = students[count].quote;
nextButton.addEventListener("click", () => {
  count++;
  if(count> stupidLoop){
    count=0
  }
  console.log("next");
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
  document.querySelector("#quote").innerHTML = students[count].quote;
});

backButton.addEventListener("click", () => {
  count--;
  if (count<0){
    count = stupidLoop
  }
  console.log("back");
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
  document.querySelector("#quote").innerHTML = students[count].quote;
});
let commentContainer = document.querySelector("#commentContainer");
let post = document.querySelector("#post");
console.log(post);
post.addEventListener("click", () => {
  let comment = document.querySelector("#comment").value;
  commentContainer.innerHTML = comment;
});
