/* =========================================================
   BSEE RESOURCE VAULT
   CONTACT MODAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const modal =
        document.getElementById("contactModal");


    if (!modal) {
        return;
    }


    const openButtons =
        document.querySelectorAll(
            "[data-contact-open]"
        );


    const closeButtons =
        document.querySelectorAll(
            "[data-contact-close]"
        );


    function openModal() {

        modal.classList.add("show");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }


    function closeModal() {

        modal.classList.remove("show");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    openButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            openModal
        );

    });


    closeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            closeModal
        );

    });


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("show")
            ) {

                closeModal();

            }

        }
    );

});
