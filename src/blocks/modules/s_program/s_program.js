const programItem = document.querySelector('.s-program__item'),
  programItems = document.querySelectorAll(".s-program__item"),
  programButton = document.querySelector(".s-program__button"),
  programMore = document.querySelector(".s-program__more");

if (programItem) {
  const getHiddenBlocks = () =>
    Array.from(programItems).filter(
      (el) => el.style.display === "none"
    );

  programButton.addEventListener("click", (e) => {
    e.preventDefault();
    getHiddenBlocks()
      .forEach((el) => (el.style.display = "block"));
    programMore.style.display = "none";
  });
}
