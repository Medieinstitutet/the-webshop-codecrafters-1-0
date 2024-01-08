export function closeBasket() {
  const closeButton = document.getElementById("closeButton") as HTMLButtonElement;
  const openButton = document.getElementById("bag") as HTMLDivElement;
  closeButton.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    const basketPage = document.getElementById("basketPage") as HTMLTableSectionElement;
    basketPage.style.display = "none";
    openButton.style.display = "block";
    console.log("klickade på knappen");
  });
}
