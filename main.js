function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background"); // target the body element
    let darkModeButtonElement = document.getElementById("dark-mode-btn"); // target the dark mode button 

    // if the background is black, change background to pink 
    if(bodyElement.style.background === "black") {
        bodyElement.style.background = "#be4db5"; // set background to pink
        darkModeButtonElement.innerHTML = "Change to Dark Mode";
    }

    // if background is pink, change background to black 

    else {
        bodyElement.style.background = "black"; // set background to black
        darkModeButtonElement.innerHTML = "Change to Light Mode";
    }
}
