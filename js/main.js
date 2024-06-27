const toTop = document.querySelector(".to-top");
const icon = document.querySelector(".icon-hide");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        toTop.classList.add("active");
        icon.classList.add("icon-show");
    }

    else {
        toTop.classList.remove("active");
        icon.classList.remove("icon-show");
    }

})


const header = document.querySelector(".big-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.classList.add("header-shadow");
    }

    else {
        header.classList.remove("header-shadow");
    }

})

// One Page Project 

const pageVideo = document.getElementById("page_mute");

function show_page() {
    document.getElementById("Page_video").classList.add("video-active");
    document.getElementById("Page_video").classList.remove("video-hide");
}

function hide_page() {
    document.getElementById("Page_video").classList.add("video-hide");
    document.getElementById("Page_video").classList.remove("video-active");
    pageVideo.pause();
}

// RTOS 
const rtosVideo = document.getElementById("rtos_mute");

function show_rtos() {
    document.getElementById("RTOS_video").classList.add("video-active");
    document.getElementById("RTOS_video").classList.remove("video-hide");
}

function hide_rtos() {
    document.getElementById("RTOS_video").classList.add("video-hide");
    document.getElementById("RTOS_video").classList.remove("video-active");
    rtosVideo.pause();
}


// LCD Game 
const lcdVideo = document.getElementById("lcd_mute");

function show_lcd() {
    document.getElementById("lcd_video").classList.add("video-active");
    document.getElementById("lcd_video").classList.remove("video-hide");
}

function hide_lcd() {
    document.getElementById("lcd_video").classList.add("video-hide");
    document.getElementById("lcd_video").classList.remove("video-active");
    lcdVideo.pause();
}

// Smart Home
const smartVideo = document.getElementById("smart_mute");

function show_smart() {
    document.getElementById("smart_video").classList.add("video-active");
    document.getElementById("smart_video").classList.remove("video-hide");
}

function hide_smart() {
    document.getElementById("smart_video").classList.add("video-hide");
    document.getElementById("smart_video").classList.remove("video-active");
    smartVideo.pause();
}

// Calculator
const clacVideo = document.getElementById("calc_mute");

function show_calc() {
    document.getElementById("calculator_video").classList.add("video-active");
    document.getElementById("calculator_video").classList.remove("video-hide");
}

function hide_calc() {
    document.getElementById("calculator_video").classList.add("video-hide");
    document.getElementById("calculator_video").classList.remove("video-active");
    clacVideo.pause();
}


// Converter
const converterVideo = document.getElementById("converter_mute");

function show_converter() {
    document.getElementById("converter_video").classList.add("video-active");
    document.getElementById("converter_video").classList.remove("video-hide");
}

function hide_converter() {
    document.getElementById("converter_video").classList.add("video-hide");
    document.getElementById("converter_video").classList.remove("video-active");
    converterVideo.pause();
}

// Smith
const smithVideo = document.getElementById("smith_mute");

function show_smith() {
    document.getElementById("smithvideo").classList.add("video-active");
    document.getElementById("smithvideo").classList.remove("video-hide");
}

function hide_smith() {
    document.getElementById("smithvideo").classList.add("video-hide");
    document.getElementById("smithvideo").classList.remove("video-active");
    smithVideo.pause();
}


// Auto Parking
const autoVideo = document.getElementById("auto_mute");

function show_auto() {
    document.getElementById("autovideo").classList.add("video-active");
    document.getElementById("autovideo").classList.remove("video-hide");
}

function hide_auto() {
    document.getElementById("autovideo").classList.add("video-hide");
    document.getElementById("autovideo").classList.remove("video-active");
    autoVideo.pause();
}