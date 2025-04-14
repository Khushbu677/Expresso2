const images = [
    "images/ArtopiaPoster_bmzb6o.png",
  "images/Vibha_Rao_sthqmr.png",
"images/AmanVerma2_hapcno.png",

  ]; 

  let currentIndex = 0;

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const img = document.getElementById("slideshow-img");
    img.style.opacity = 0;

    setTimeout(() => {
      img.src = images[currentIndex];
      img.style.opacity = 1;
    }, 0);
  }

  const images1 = [
    "images/DSC_0418_lclzcs_dpla5k.jpg",
  "images/DSC_0425_yqggxl_b5jqwg.jpg",
"images/DSC_0463_xldm72_rjggpo.jpg",

  ]; 

  let currentIndex1 = 0;

  function nextImage1() {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    const img1 = document.getElementById("slideshow-img1");
    img1.style.opacity = 0;

    setTimeout(() => {
      img1.src = images1[currentIndex1];
      img1.style.opacity = 1;
    }, 0);
  }

  const images2 = [
    "images/ulms1l2zpxdsb4nt7dgj_ewp4k7.jpg",
  "images/n3b8puwcjgzlrexwwxrc_waxusm.jpg",
"images/fpll0rjzfbgcf8cd68gx_qzq8u5.jpg",

  ]; 

  let currentIndex2 = 0;

  function nextImage2() {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    const img2 = document.getElementById("slideshow-img2");
    img2.style.opacity = 0;

    setTimeout(() => {
      img2.src = images2[currentIndex2];
      img2.style.opacity = 1;
    }, 0);
  }