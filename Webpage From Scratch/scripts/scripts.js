window.onload = function() {
    setInterval(check_scroll, 1000);
    setInterval(check_position, 100);

    localStorage.clear();
    change_visibility("modal-adv");
    localStorage.setItem("scroll", Date.now());
}

var a = false;

function check_position() {
    var window_scroll = window.scrollY;
    var adv_scroll = document.getElementById('advertisment-section').offsetTop;

    if ((window_scroll > adv_scroll) && !a) {

        console.log(window_scroll + ", " + adv_scroll);

        change_visibility("modal-adv");

        a = true;
    }
}

function check_scroll() {
    if (localStorage.getItem("bang") != null) return;

    var scroll = localStorage.getItem("scroll");

    if (((Date.now() - scroll) / 1000) > 10) {
        console.log("bang");
        alert("Не переживайте, пока вы отстутствовали, мы пожертвовали ваши деньги в фонд науки!");
        localStorage.setItem("scroll", Date.now());

        localStorage.setItem("bang", true);
    }
}

window.onscroll = function() {
    localStorage.setItem("scroll", Date.now());
}

function change_visibility(id) {
    var storage_name = "visibility-"+id;

    var state = localStorage.getItem(storage_name);

    if (state == "hidden") state = "visible"; else state = "hidden";

    var element = document.getElementById(id);

    element.style.visibility = state;

    console.log("state: " + state);

    localStorage.setItem(storage_name, state);
}

function validate_message() {
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var message = document.getElementById('message').value;

    console.log("mail: " + mail);
    console.log("name: " + name);
    console.log("message: " + message);

    if (!mail.includes("@")) {
        alert("mail should include '@' character");
        return;
    }

    if (name.length === 0) {
        alert("name field is empty");
        return;
    }

    if (name.includes('7')) {
        alert("name can't have 7 in it");
        return;
    }

    if (message.length === 0) {
        alert("message is empty, therefore we put our own message");
        document.getElementById('message').value = "give me MOAR adds";
        return;
    }

    alert("message was successfully sent");
}
