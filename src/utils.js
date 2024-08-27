export const setNewOffset = (card, mouseMoveDir) => {
  const offsetLeft = card.offsetLeft - mouseMoveDir.x;
  const offsetTop = card.offsetTop - mouseMoveDir.y;

  return {
    x: offsetLeft < 0 ? 0 : offsetLeft,
    y: offsetTop < 0 ? 0 : offsetTop,
  };
};

export function autoGrow(textAreaRef) {
  const { current } = textAreaRef;
  current.style.height = "auto"; // Reset the height
  current.style.height = current.scrollHeight + "px"; // Set the new height
}

export const setZIndex = (selectedCard) => {
  selectedCard.style.zIndex = 100000;

  Array.from(document.getElementsByClassName("card")).forEach((card) => {
    if (card !== selectedCard) {
      card.style.zIndex = selectedCard.style.zIndex - 1;
    }
  });
};
