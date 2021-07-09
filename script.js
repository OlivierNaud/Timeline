const container = document.getElementById("bloc");

const bloc = document.querySelector(".two");
const bloc2 = document.querySelector(".three");

const toLeft = bloc.offsetLeft;
const toLeft2 = bloc2.offsetLeft;

const visible = document.querySelector(".position1");
const visible1 = document.querySelector(".position2");
const visible2 = document.querySelector(".position3");
const visible3 = document.querySelector(".position4");
const visible4 = document.querySelector(".position5");
const visible5 = document.querySelector(".position6");

const scrollWidth = 100;

function width(boxWidth, toLeft) {
  return boxWidth / 2 + toLeft;
}

container.addEventListener("wheel", (e) => {
  container.scrollLeft += e.deltaY > 0 ? scrollWidth : -scrollWidth;

  if (container.scrollLeft > width(bloc.offsetWidth, 0)) {
    visible.classList.remove("invisible");
    visible.classList.add("visible");

    visible1.classList.remove("invisible");
    visible1.classList.add("visible");

    visible2.classList.remove("invisible");
    visible2.classList.add("visible");
  }

  if (container.scrollLeft > width(bloc2.offsetWidth, toLeft)) {
    visible3.classList.remove("invisible");
    visible3.classList.add("visible");

    visible4.classList.remove("invisible");
    visible4.classList.add("visible");

    visible5.classList.remove("invisible");
    visible5.classList.add("visible");
  }
});
