var clearIcon = document.getElementsByClassName("clear-icon");
var searchBar = document.getElementsByClassName("searchbar-input");

searchBar.addEventListener("keyup", () => {
    if(searchBar.value === "" && clearIcon.style.visibility != "visible"){
        clearIcon.style.visibility = "visible";
    } else if(!searchBar.value === "") {
        clearIcon.style.visibility = "hidden";
    }
});

clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
})