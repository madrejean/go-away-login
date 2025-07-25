const currentUrl = window.location.href;
var regex = /^.*\/\/www\.tumblr\.com\/(\?.*)?$/g;

// all tumblr pages except the main page
if (!(currentUrl.match(regex) !== null)) {
    const loginPopupContainer = document.getElementById("glass-container");
    if (loginPopupContainer){
        loginPopupContainer.remove();
    }
}
const loginRightBarContainer = document.getElementsByClassName("IvzMP sIi8_");
if (loginRightBarContainer && loginRightBarContainer.length == 1){
    loginRightBarContainer[0].remove();
}
const loginBottomContainer = document.getElementsByClassName("IvzMP VC_rY hgN9e");
if (loginBottomContainer && loginBottomContainer.length == 1){
    loginBottomContainer[0].remove();
}
