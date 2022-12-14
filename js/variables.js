const bulletTissuArray = [];
const bulletPocheArray = [];
const bulletTexteArray = [];
const variables = {selectedTissu: "Violet",selectedPoche: "Rouge",customText: '',selectedTextColor: 'Noir',textOption: true,prixLettre: 1.80};
export function repricing() {
    let calculatedPrice = 0;
    calculatedPrice += bulletTissuArray.find(tissu => tissu.getCouleur == variables.selectedTissu).getPrice;

    calculatedPrice += bulletPocheArray.find(poche => poche.getCouleur == variables.selectedPoche).getPrice;
    if (variables.textOption) {
        calculatedPrice += variables.customText.length * variables.prixLettre;
        document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "visible";
    } else {
        document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "hidden";
    }

    document.querySelector(".price").textContent = calculatedPrice.toFixed(2) + " €";

}

export { bulletTissuArray, bulletPocheArray, bulletTexteArray, variables };

