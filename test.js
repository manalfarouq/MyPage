const chkBox2 = document.getElementById("chk2");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const signUp = document.querySelector(".sign-up");



chkBox2.addEventListener("change", () => {
if (chkBox2.checked) {
front.style.transform = "rotateY(-180deg)";
back.style.transform = "rotateY(0)";
signUp.style.transform = "rotateY(0)";
} else {
front.style.transform = "rotateY(0)";
back.style.transform = "rotateY(180deg)";
signUp.style.transform = "rotateY(180deg)";
}
});
 