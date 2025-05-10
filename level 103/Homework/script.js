const imgArr = [
    "./image2.png",
    "./image3.png",
    "./image4.png",
    "./image5.png",
    "./image6.png",
    "./image7.png",
    "./image8.png",
    "./image9.png",
    "./image10.png",
]


let index = 0


const imgSlide = document.getElementById("imgSlider");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");


nextBtn.addEventListener("click", () => {
    index = (index + 1) % imgArr.length
    imgSlider.src = imgArr[index]
})

backBtn.addEventListener("click", () => {
    index = (index - 1 + imgArr.length) % imgArr.length
    imgSlider.src = imgArr[index]
})





const languageArr = [
    "./js.png",
    "./c.png"
]

let currentIndex = 0


const imgSlider1 = document.getElementById("imgSlider1");
const backBtn1 = document.getElementById("backBtn1");
const nextBtn2 = document.getElementById("nextBtn1");


nextBtn2.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % languageArr.length
    imgSlider1.src = languageArr[index]
})

backBtn1.addEventListener("click", () => {
    currentIndex= (currentIndex - 1 + languageArr.length) % languageArr.length
    imgSlider1.src = languageArr[index]
})