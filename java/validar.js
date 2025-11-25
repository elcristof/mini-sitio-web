document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("miForm");
    const exito = document.getElementById("exito");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        exito.classList.add("oculto");

        let errores = false;

        if (document.getElementById("nombre").value.trim().length < 2) {
            errores = true;
        }

        if (!document.getElementById("email").value.includes("@") || 
            !document.getElementById("email").value.includes(".")) {
            errores = true;
        }
    
        if (document.getElementById("mensaje").value.trim().length < 10) {
            errores = true;
        }

        if (!errores) {
            exito.classList.remove("oculto");
            form.reset();
        } else {
            alert("complete todos los campos pls.");
        }
    });
});