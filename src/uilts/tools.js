// 防抖

export const debounce = (fn, delay) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

// 随机透明颜色生成
export const colorGeneration = (color, grade, divide) => {
  let red = 0;
  let yellow = 0;
  let blue = 0;
  if (!grade) {
    grade = 0;
  }
  if (!divide) {
    divide = 10;
  }
  if (grade > divide) {
    grade %= divide
  }
  let opacity = [0.5 - (1 / divide) * grade];
  if (color[0] === '#') {
    if (color.length === 4) {
      red = parseInt(color.slice(1, 2) + color.slice(1, 2), 16);
      yellow = parseInt(color.slice(2, 3) + color.slice(2, 3), 16);
      blue = parseInt(color.slice(3, 4) + color.slice(3, 4), 16);
      // console.log(red, yellow, blue);
    } else if (color.length === 7) {
      red = parseInt(color.slice(1, 3), 16);
      yellow = parseInt(color.slice(3, 5), 16);
      blue = parseInt(color.slice(5, 7), 16);
      // console.log(red, yellow, blue);
    }
  }

  return `rgba(${red},${yellow},${blue},${opacity})`;
};
