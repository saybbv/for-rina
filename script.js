const container = document.querySelector(".container");
const letter = document.getElementById("letter");
const success = document.getElementById("success");

document.getElementById("nextBtn").onclick = () => {
    container.style.display = "none";
    letter.classList.remove("hidden");
};

const noBtn = document.getElementById("no");

function moveButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 70);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moveButton();
});

noBtn.addEventListener("mouseover", moveButton);

document.getElementById("yes").onclick = () => {

    letter.style.display = "none";
    success.classList.remove("hidden");

    setInterval(createHeart, 200);

};

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}
