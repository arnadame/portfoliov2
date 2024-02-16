let btnLeft = document.querySelector("#left")
let btnRight = document.querySelector("#right")
let slider = document.querySelectorAll(".project-box")
let box = document.querySelector(".project-inner-wrapper2")

//     slider.forEach((slide, index) =>{
//       btnLeft.addEventListener("click", () => {

//         let rect = slide.getBoundingClientRect();

//         let isInViewport = rect.top >= 0 &&
//           rect.left >= 0 &&
//           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//           rect.right <= (window.innerWidth || document.documentElement.clientWidth);

//         console.log(isInViewport);
//     })
// })

btnLeft.addEventListener("click", () => {
  console.log("left")
})

btnRight.addEventListener("click", () => {
      console.log("right")
})

// let slideObs = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log("test")
//     } else {
//       console.log("sample")
//     }
//   });
// }, {
//   threshold: 1
// });

// slider.forEach(b => {
//   slideObs.observe(b);
// });