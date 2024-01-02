export function closeBasket() {
  const closeButton = document.getElementById(
    "closeButton"
  ) as HTMLButtonElement;
  const openButton = document.getElementById("openButton") as HTMLButtonElement;
  closeButton.addEventListener("click", () => {
    const basketPage = document.getElementById(
      "basketPage"
    ) as HTMLTableSectionElement;
    basketPage.style.display = "none";
    openButton.style.display = "block";
    console.log("klickade på knappen");
  });
}
