import gsap from "gsap";
// as：取名
import { car as car_info } from "./src/data/db.json";

class Car {
  data = [];

  constructor(info) {
    info ? this._create(info) : null;
  }

  _create = (info) => {
    info.forEach((car) => {
      const dom = document.querySelector(car.id);
      const effect = gsap.to(dom, {
        duration: car.duration,
        ease: car.ease,
        x: car.position.x,
        y: car.position.y,
        repeat: car.repeat,
        repeatDelay: car.repeatDelay,
        paused: true,
      });

      const audio = new Audio(`./src/sound/${car.sound_effect}`);

      const listener = this._addListener(dom, effect, audio);
      this.data.push({ dom, effect, listener });
    });
  };


  play = () => {
    this.data.forEach((car) => {
      car.effect.play();
    });
  };

  paused = () => {
    this.data.forEach((car) => {
      car.effect.paused();
    });
  };
}

const car = new Car();

// 外層可引入
export { car };
