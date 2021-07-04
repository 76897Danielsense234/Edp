// Pagelinking(index, "index.html");
const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
    dan.classList.remove("active");
    navMenu.classList.remove("active");
    }
    const dan = document.querySelector(".dan");
    const navMenu = document.querySelector(".nav-menu");

    dan.addEventListener("click", mobileMenu);

    function mobileMenu() {
    dan.classList.toggle("active");
    navMenu.classList.toggle("active");
}
if(window.history.replaceState){
    window.history.replaceState(null, null, window.location.href);
}




{/* <script> */}
// Get the modal

var modal = document.getElementById
('id01');

// When the user clicks anywhere
//outside of the modal, close it

window.onclick = function(event) {
if (event.target == modal) {
 modal.style.display = "none";
}
}
// </script>  


// 
// 
// Loop through Array of Objects
// var objPeople = [
// { // Object @ 0 index
// username: "sam",
// password: "codify"
// },
// { // Object @ 1 index
// username: "matt",
// password: "academy"
// },
// { // Object @ 2 index
// username: "chris",
// password: "forever"
// }

// ]

// function getInfo() {
// var username = document.getElementById('username').value
// var password = document.getElementById('password').value

// for(var i = 0; i < objPeople.length; i++) {
// // check is user input matches username and password of a current index of the objPeople array
// if(username == objPeople[i].username && password == objPeople[i].password) {
// console.log(username + " is logged in!!!")
// // stop the function if this is found to be true
// return
// }
// }
// console.log("incorrect username or password")
// }"
// // 
// // 