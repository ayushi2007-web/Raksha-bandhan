function openSurprise() {

    document.body.innerHTML = `
    <div class="loading">
        <h1>🌸 Preparing Your Surprise... 🌸</h1>

        <div class="loader"></div>

        <p>Loading with lots of love ❤️</p>
    </div>
    `;

    setTimeout(function () {
        window.location.href = "message.html";
    }, 3000);

}
function openCurtain() {

    const curtain = document.getElementById("curtain");

    curtain.classList.add("open");

    setTimeout(() => {
        curtain.classList.add("hide");
    }, 1800);
}