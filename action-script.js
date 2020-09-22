function AddClickEvent() {
    for (var i = 0; i < document.getElementsByClassName("bairro-header").length; i++) {
        document.getElementsByClassName("bairro-header")[i].addEventListener("click", toggleBairroList);
    }
}

AddClickEvent();

function toggleBairroList(){
    if (this.getAttribute("open") != "true") {
        this.setAttribute("open", "true");
        this.classList.add("bairro-header-selected");
    
        var list = this.parentNode.getElementsByTagName('div')[4]; 
        list.style.display = "flex";
    }
    else {
        this.setAttribute("open", "false");
        this.classList.remove("bairro-header-selected");
    
        var list = this.parentNode.getElementsByTagName('div')[4]; 
        list.style.display = "none";
    }
}

// Open Filter Tab
document.getElementById("filter-button").addEventListener("click", function () {
    var filterTabBg = document.getElementById("filter-tab-bg")
    var filterTab = document.getElementById("filter-tab");

    filterTabBg.style.display = "block";
    filterTabBg.style.animationName = "openFilterTabBg";
    filterTab.style.animationName = "openFilterTab";

});
// Close Filter Tab
document.getElementById("close-filter-tab").addEventListener("click", function () {
    var filterTabBg = document.getElementById("filter-tab-bg")
    var filterTab = document.getElementById("filter-tab");
    var id = setTimeout(function (){ filterTabBg.style.display = "none" }, 500);
    filterTabBg.style.animationName = "closeFilterTabBg";
    filterTab.style.animationName = "closeFilterTab";
});