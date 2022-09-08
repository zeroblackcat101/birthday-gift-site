
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
addEventListener("load", (event) => {
  let happyGifEl = document.getElementById("gift-img-happy");
  happyGifEl.addEventListener("mouseover",async () => {
    
    happyGifEl.src =
      "images/magnoon.jpg";

    await waitforme(2000);    
    happyGifEl.src =
    "./images/happy.gif";

  });

  happyGifEl.addEventListener("mouseleave", () => {
    console.log("I'm out");

    happyGifEl.src = "./images/gift-cover.jpg";
  });

  let hotGifEl = document.getElementById("gift-img-hot");
  hotGifEl.addEventListener("mouseover",async () => {
    hotGifEl.src =
      "images/mozza.jpg";
    await waitforme(2000);    
    hotGifEl.src =
    "./images/hot.gif";

  });

  hotGifEl.addEventListener("mouseleave", () => {


    hotGifEl.src = "./images/gift-cover.jpg";
    
  });
  let geniusGifEl = document.getElementById("gift-img-genius");
  geniusGifEl.addEventListener("mouseover",async () => {
    geniusGifEl.src =
      "images/raye2.jpg";
    await waitforme(2000);    
    geniusGifEl.src =
    "./images/chill.gif";

  });

  geniusGifEl.addEventListener("mouseleave", () => {


    geniusGifEl.src = "./images/gift-cover.jpg";
  });

  let badGifEl = document.getElementById("gift-img-badass");
  badGifEl.addEventListener("mouseover",async () => {
    badGifEl.src =
      "images/prince.jpg";
    await waitforme(2000);    
    badGifEl.src =
    "./images/badass.gif";

  });

  badGifEl.addEventListener("mouseleave", () => {


    badGifEl.src = "./images/gift-cover.jpg";
  });

  let cheerGifEl = document.getElementById("gift-img-cheers");
  cheerGifEl.addEventListener("mouseover",async () => {
    cheerGifEl.src =
      "images/7bb.jpg";
    await waitforme(2000);    
    cheerGifEl.src =
    "./images/cheers.gif";

  });

  cheerGifEl.addEventListener("mouseleave", () => {


    cheerGifEl.src = "./images/gift-cover.jpg";
  });


 
});
