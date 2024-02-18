import "./style.css";
import { gsap } from "gsap";
import { navbar } from "./navbar";
import {car} from "./car"

window.onload = () => {
  navbar.adjuct();
  loadAnimation();
};

window.onresize = () => {
  navbar.adjuct();
};

function loadAnimation() {
  const tween = gsap.timeline({ delay: 0.8 });

  // loading效果
  tween.to(".loading", { duration: 0.5, opacity: 0, display: "none" });

  // header ===start
  tween.from("header", {
    duration: 0.5,
    ease: "power2",
    y: -16 * 6,
  }); /*-16是因為1rem=16*/

  // 解決css header衝突問題
  tween.to("header", { duration: 0, transition: 0.3 });

  // header ===end
  tween.from(".info", { duration: 0.5, ease: "power2", opacity: 0, y: 40 });
  // aside ===end

  //  background-svg===start
  tween.from(".background-svg", {
    duration: 1.5,
    ease: "power2",
    opacity: 0,
    x: 80,
  });

  tween.call(carAnimation);
}
// 同時作用
function carAnimation(){
  car.play()
}



const navIcon = document.querySelector("header i");

navIcon.addEventListener("click", () => {
  gsap.fromTo(
    ".menu",
    {
      y: -window.innerHeight,
      opacity: 0,
      display: "none",
    },
    {
      duration: 1.2,
      ease: "power2",
      opacity: 1,
      y: 0,
      x: 0,
      display: "flex",
    }
  );
});

const menuIcon = document.querySelector(".menu i");

menuIcon.addEventListener("click", () => {
  const tween = gsap.timeline();
  tween.to(".menu", { duration: 0.3, y: 30 });
  tween.to(".menu", {
    duration: 1,
    y: -window.innerHeight,
    opacity: 0,
    display: "none",
  });
});
