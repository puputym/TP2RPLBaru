const DB_USER = [
    {
        username: "",
        password: "",
        confirmPass:  ""
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#txtpassword");
const inputconfirmPass = document.querySelector("#txtConfirmPassword");
const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueconfirmPass = confirmPass.value;
    const valueInputUsername = inputUsername.value;

    let flag = 0;

    DB_USER.map((data) => {
        if (data.confirmPass === valueconfirmPass && data.password === valueInputPassword){
            flag = 1;
        }
    })

    const warningMsg = document.querySelector(".warning");

    if (flag === 0){
        warningMsg.className = "text-danger";
    } else {
        alert("Register Berhasil");
    }
})