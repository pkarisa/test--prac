const para = document.querySelector("p");
para.addEventListener("click",updateName);

function updateName() {
    const name = pompt(" Entername");
    para.textContent = 'Player 1: ${name}'
}