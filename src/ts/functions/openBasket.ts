export function openBasket() {
  const openButton = document.getElementById("openButton") as HTMLButtonElement;
  openButton.addEventListener("click", () => {
    const basketPage = document.getElementById(
      "basketPage"
    ) as HTMLTableSectionElement;
    basketPage.style.display = "block";
    openButton.style.display = "none";
    console.log("klickade på knappen");
  });
}
