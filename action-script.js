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
    filterTabBg.style.animationName = "showBg";
    filterTab.style.animationName = "openFilterTab";

});
// Close Filter Tab
document.getElementById("close-filter-tab").addEventListener("click", function () {
    var filterTabBg = document.getElementById("filter-tab-bg")
    var filterTab = document.getElementById("filter-tab");

    var id = setTimeout(function (){ filterTabBg.style.display = "none" }, 500);
    filterTabBg.style.animationName = "hideBg";
    filterTab.style.animationName = "closeFilterTab";
});

function openLocalInfo() {
    var localInfoBg = document.getElementById("local-block-bg")
    var localInfo = document.getElementById("local-block");

    localInfoBg.style.display = "block";
    localInfoBg.style.animationName = "showBg";
    localInfo.style.animationName = "openLocalInfo";
}

function closeLocalInfo() {
    var localInfoBg = document.getElementById("local-block-bg")
    var localInfo = document.getElementById("local-block");

    var id = setTimeout(function (){ localInfoBg.style.display = "none" }, 500);
    localInfoBg.style.animationName = "hideBg";
    localInfo.style.animationName = "closeLocalInfo";
}

function AddClickEvent() {
    for (var i = 0; i < document.getElementsByClassName("bairro-header").length; i++) {
        document.getElementsByClassName("bairro-header")[i].addEventListener("click", toggleBairroList);
    }

    for (var i = 0; i < document.getElementsByClassName("local-ref-info").length; i++) {
        document.getElementsByClassName("local-ref-info")[i].addEventListener("click", openLocalInfo);
    }

    document.getElementById("close-local-block").addEventListener("click", closeLocalInfo);
}

window.onLoad = AddClickEvent();