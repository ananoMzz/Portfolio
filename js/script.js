const navBar = document.querySelector("#topnav");

navBar.addEventListener("click", function (e) {
  e.preventDefault();
  btn = e.target.closest(".nav-link");
  if (!btn) return;
  //   console.log(btn.textContent);
  if (btn.textContent === "Projects") {
    //redirect to projects
    window.location.replace("projects.html");
  }

  if (btn.textContent === "About Me") {
    //redirect to about me
    window.location.replace("about-me.html");
  }
});
