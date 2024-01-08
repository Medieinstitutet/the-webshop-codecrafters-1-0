export function openBasket() {
  const openButton = document.getElementById("bag") as HTMLDivElement;
  openButton.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    const basketPage = document.getElementById("basketPage") as HTMLTableSectionElement;
    basketPage.style.display = "block";
    openButton.style.display = "none";
    console.log("klickade på knappen");
  });
}
