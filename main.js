const heading = document.getElementsByClassName("heading")[0];
const btn1 = document.getElementsByClassName("button-1")[0];
const btn2 = document.getElementsByClassName("button-2")[0];
btn1.addEventListener('click', function handleClick() {
    heading.textContent = "You've clicked button 1";
});
btn2.addEventListener('click', function handleClick() {
    heading.textContent = "You've clicked button 2";
});