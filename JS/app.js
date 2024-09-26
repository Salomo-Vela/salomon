//window.alert("enviar formulario")
const   btnIniciar =  document.getElementById("btnIniciar");
        btnRegistrar = document.getElementById("btnRegistrar");
        btnbtn_ir_a_registrar = document.getElementById("btn_ir_a_registrar");
        btnIngresar = document.getElementById("btnIngresar");
        formRegister = document.querySelector(".register");
        formLogin = document.querySelector(".login");

btnIniciar.addEventListener("click",e=>{
    formRegister.classList.add("hide")
    formLogin.classList.remove("hide")
})

btn_ir_a_registrar.addEventListener("click",e=>{
    formLogin.classList.add("hide")
    formRegister.classList.remove("hide")
})