function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowDown" || e.key === "Down") {
    const currrentTop = extractPos(avatar.style.top);
    avatar.style.top = `${currrentTop + 50}px`;
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    const currentUp = extractPos(avatar.style.top);
    avatar.style.top = `${currentUp - 50}px`;
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    const currentLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currentLeft + 50}px`;
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    const currentLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currentLeft - 50}px`;
  }
});

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
  //   console.log(pos);
};
