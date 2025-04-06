const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const registerBtn = document.getElementById("registerBtn");
const registerModal = document.getElementById("registerModal");
const closeBtns = document.querySelectorAll(".close");

loginBtn.addEventListener("click", function(event) {
    event.preventDefault();
    loginModal.style.display = "block";
    document.body.classList.add("modal-open");
});

registerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    registerModal.style.display = "block";
    document.body.classList.add("modal-open");
});

closeBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
        document.body.classList.remove("modal-open");
    });
});

window.addEventListener("click", function(event) {
    if (event.target === loginModal || event.target === registerModal) {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        if (!targetSection) return;

        targetSection.scrollIntoView({ behavior: "smooth" });

        if (loginModal.style.display === "block" || registerModal.style.display === "block") {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });
});
