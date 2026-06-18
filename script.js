const downloadBtn = document.getElementById("downloadBtn");
const statusText = document.getElementById("status");

downloadBtn.addEventListener("click", () => {

    statusText.textContent = "Preparando descarga...";

    setTimeout(() => {
        statusText.textContent = "Iniciando descarga...";


        window.location.href = "vaca.apk";
    }, 1500);

});