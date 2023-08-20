// All Pages js Start Here
let openingPage = document.querySelector("#opening");
let getStartedpage = document.querySelector("#get_started");
let signUpPage = document.querySelector("#sign_up");
let verificationPage = document.querySelector("#verification");
let chatPage = document.querySelector("#chatPage");


// Opening Page js Start Here
function openingIntro() {
    setTimeout(() => {
        openingPage.style.opacity = "0";
        openingPage.style.display = "none";
        getStartedpage.style.display = "flex";
    }, 800);
}
openingIntro();

// Get Started Page js Start Here
let getStartedBtn = document.querySelector(".get_started_btn");

getStartedBtn.addEventListener("click", () => {
    openingPage.style.opacity = "1";
    openingPage.style.display = "flex";
    setTimeout(() => {
        openingPage.style.opacity = "0";
        openingPage.style.display = "none";
        getStartedpage.style.display = "none";
        signUpPage.style.display = "block";
    }, 800);
});


// Sign Up Page js Start Here
let signUpBack = document.querySelector(".sign_up_back_btn");
let signUpInputs = document.querySelectorAll(".sign_up_input"),
    signUpArr = Array.from(signUpInputs);
let nameInput = document.querySelector(".sign_up_name");
let mailInput = document.querySelector(".sign_up_mail");
let pass1Input = document.querySelector(".sign_up_pass1");
let pass2Input = document.querySelector(".sign_up_pass2");
let signSubmit = document.querySelector(".sign_up_submit");
let signUpCounter = document.querySelector(".countDown").innerHTML;

signSubmit.addEventListener("click", () => {
    if (nameInput.value == "" || mailInput.value == "" || pass1Input.value == "" || pass2Input.value == "") {
        signUpArr.map((i) => {
            if (i.value == "") {
                i.style.border = "1px solid red";
            } else {
                i.style.border = "1px solid green";
                i.value = "";
            }
        });
    } else {
        signUpPage.style.display = "none";
        verificationPage.style.display = "flex";
        signUpArr.map((i) => {
            i.value = "";
        })
    }
})

signUpBack.addEventListener("click", () => {
    signUpPage.style.display = "none";
    openingPage.style.opacity = "1";
    openingPage.style.display = "flex";
    setTimeout(() => {
        openingPage.style.opacity = "0";
        openingPage.style.display = "none";
        getStartedpage.style.display = "flex";
    }, 800);
});


// Verification Page js Start Here
let veriBack = document.querySelector(".verifiaction_back_btn");
let veriInput = document.querySelectorAll(".code-input"),
    veriInputArr = Array.from(veriInput);
let veriInput1 = document.querySelector(".v1"),
    veriInput2 = document.querySelector(".v2"),
    veriInput3 = document.querySelector(".v3"),
    veriInput4 = document.querySelector(".v4");
let wrongCode = document.querySelector(".wrongCode");
let veriBtn = document.querySelector(".verifiactionBtn");

veriBtn.addEventListener("click", () => {
    if (veriInput1.value == "" || veriInput2.value == "" || veriInput3.value == "" || veriInput4.value == "") {
        veriInputArr.map((i) => {
            if (i.value == "") {
                i.style.border = "2px solid red";
                wrongCode.style.display = "block";
            } else {
                i.style.border = "1px solid green";
                i.value = "";
            }
        });
    } else {
        veriInputArr.map((i) => {
            i.style.border = "1px solid green";
        });
        if (veriInput1.value == "1" && veriInput2.value == "2" && veriInput3.value == "3" && veriInput4.value == "4") {
            wrongCode.style.display = "none";
            verificationPage.style.display = "none";
            chatPage.style.display = "block";
        } else {
            wrongCode.style.display = "block";
            veriInputArr.map((i) => {
                i.value = "";
            });
        }
        veriInputArr.map((i) => {
            i.value = "";
        })
    }
});




veriBack.addEventListener("click", () => {
    verificationPage.style.display = "none";
    openingPage.style.opacity = "1";
    openingPage.style.display = "flex";
    setTimeout(() => {
        openingPage.style.opacity = "0";
        openingPage.style.display = "none";
        signUpPage.style.display = "block";
    }, 800);
});



// Search Button js Start Here
let searchPart = document.querySelector(".searchfloat");
let searchBtn = document.querySelector(".search_icon");
let searchDismiss = document.querySelector(".searchDismiss");

searchBtn.addEventListener("click", () => {
    searchPart.classList.toggle("active");
});
searchDismiss.addEventListener("click", () => {
    searchPart.classList.remove("active");
})