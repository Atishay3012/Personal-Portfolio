// Tabbed Content Function
var tabLinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')

function opentab(tabname) {
    // Remove Active Classes from All Tab Links and Tab Contents
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-links")
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
// Add Active Class to Clicked Tab Link and Corresponding Tab Content
    event.currentTarget.classList.add("active-links")

    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu"); I
function openMenu() {
    sidemenu.style.right = "0"; 
}
function closeMenu() {
    sidemenu .style.right = "-200px"; 
}


