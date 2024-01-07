function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const tabsContainer = document.querySelector(".explore-tabs");
  const aboutSection = document.querySelector("#experience");

  tabsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
          tabsContainer.querySelectorAll(".tab-item").forEach(item => item.classList.remove("active"));
          e.target.classList.add("active");

          const target = e.target.getAttribute("data-target");
          aboutSection.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
          aboutSection.querySelector(target).classList.add("active");
      }
  });
});

/* Portfolio items detail popup 8 */
/* Project 1 */ 
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("view-project-btn-1")){
    togglePortfolioPopup1();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup1() {
  document.querySelector(".portfolio-popup-1").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
}
document.querySelector(".view-popup-btn-1").addEventListener("click", togglePortfolioPopup1)

/* Project 2 */ 
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("view-project-btn-2")){
    togglePortfolioPopup2();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup2() {
  document.querySelector(".portfolio-popup-2").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
}
document.querySelector(".view-popup-btn-2").addEventListener("click", togglePortfolioPopup2)

/* Project 3 */ 
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("view-project-btn-3")){
    togglePortfolioPopup3();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup3() {
  document.querySelector(".portfolio-popup-3").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
}
document.querySelector(".view-popup-btn-3").addEventListener("click", togglePortfolioPopup3)

