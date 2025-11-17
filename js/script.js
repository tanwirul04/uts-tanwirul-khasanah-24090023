document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    let myEmail = "tanwirulkhasanah@gmail.com";
    let myPassword = "24090023";

    if (email === "") {
        alert("Email tidak boleh kosong!");
        return;
    }

    if (pass === "") {
        alert("Password tidak boleh kosong!");
        return;
    }

    alert("Login berhasil!");

    window.location.href = "dashboard.html";
});
