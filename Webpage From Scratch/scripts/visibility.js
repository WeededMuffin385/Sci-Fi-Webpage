function change_visibility(id) {
    var state = localStorage.getItem("visibility");

    if (state == "hidden") state = "visible"; else state = "hidden";

    var element = document.getElementById(id);

    element.style.visibility = state;

    console.log("state: " + state);

    localStorage.setItem("visibility", state);
}
