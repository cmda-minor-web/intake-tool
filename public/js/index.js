const topPane = document.querySelector(".input__html");
const midPane = document.querySelector(".input__css");

const divider = document.querySelectorAll(".input__resizer");

function resizer(elem) {
  const nextPanel = elem.srcElement.nextElementSibling;
  const previousPanel = elem.srcElement.previousElementSibling;
  console.log(nextPanel);
  console.log(previousPanel);
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevY = elem.y;
  const panel = previousPanel.getBoundingClientRect();
  // console.log(topPanel);
  function mousemove(elem) {
    let newY = prevY - elem.y;
    console.log(newY);
    previousPanel.style.height = panel.height - newY + "px";
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

divider.forEach((bar) => {
  console.log(bar);
  bar.addEventListener("mousedown", resizer);
});

const arrow = document.querySelectorAll(".input__collapse");

arrow.forEach((elem) => {
  const parent = elem.parentElement;
  const child = elem.firstElementChild;
  console.log(parent);
  child.classList.add("input__arrow--down");
  parent.classList.add("input__code--open");
  elem.addEventListener("click", () => {
    child.classList.toggle("input__arrow--up");
    parent.classList.toggle("input__code--close");
  });
});
