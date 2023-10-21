
var search = document.getElementById("search");
var body = document.getElementById('mywebsite');
var main_menu = document.getElementById('main-menu');
function search_toggle() {
    search.classList.toggle('hideP');  // when you click on search icon to open search page the script remove class "hideP" to search div and when you click to close search page the script add class "hideP"
    body.classList.toggle('allsite');  // when you click on search icon to open search page the script add class "allsite" to body and when you click to close search page the script remove class "allsite"

}
function menu_toggle() {

    main_menu.classList.toggle('hidem');
    if (main_menu.classList.contains('hidem') == false) {
        // when you click on menu icon "humborger icon" the code of javascript replace class "fa-bars""humberguer icon" with class "fa-xmark""X close icon"
        document.getElementById('menu-btn-icon').classList.remove('fa-bars')
        document.getElementById('menu-btn-icon').classList.add('fa-xmark')
    } else {
        document.getElementById('menu-btn-icon').classList.add('fa-bars')
        document.getElementById('menu-btn-icon').classList.remove('fa-xmark')
    }
}


document.getElementById('button').addEventListener('click', search_toggle);
document.getElementById('close-btn').addEventListener('click', search_toggle);
document.getElementById('menu-btn').addEventListener('click', menu_toggle);




