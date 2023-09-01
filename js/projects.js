const btn = document.querySelectorAll(".btn");

images = document.querySelectorAll(".project-image");

const imgContainer = document.querySelector(".imagesConteiner");

// images.forEach((img) => console.log(img.dataset.img));
let curImgDataset = 1;
const moveImages = function (destination) {
  let curImg = imgContainer.querySelector(`[data-img ="${curImgDataset}"]`);
  curImg.classList.toggle("current");
  curImgDataset += Number(destination);
  if (curImgDataset <= 0) curImgDataset = images.length;
  if (curImgDataset > images.length) curImgDataset = 1;

  curImg = imgContainer.querySelector(`[data-img ="${curImgDataset}"]`);
  curImg.classList.toggle("current");
};

const loadProjects = function () {
  const links = [
    "https://mapty-goga.netlify.app/",
    "https://bankist-web-goga.netlify.app/",
    "https://forkify-goga.netlify.app/",
    "https://bankist-app-goga.netlify.app/",
  ];

  window.open(`${links[curImgDataset - 1]}`, "_blank");
};
images.forEach((img) => img.addEventListener("click", loadProjects));

btn.forEach((b) =>
  b.addEventListener("click", function (e) {
    const btnClicked = b.textContent === "←" ? "-1" : "1";
    moveImages(btnClicked);
  })
);
