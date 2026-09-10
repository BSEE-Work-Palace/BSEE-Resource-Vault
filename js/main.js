/* =========================================================
   BSEE RESOURCE VAULT
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const modal =
        document.getElementById("contactModal");

    const openButtons =
        document.querySelectorAll("[data-contact-open]");

    const closeButtons =
        document.querySelectorAll("[data-contact-close]");


    /*
     * If the current page has no contact modal,
     * stop here.
     */
    if (!modal) {
        return;
    }


    /* =========================
       OPEN MODAL
       ========================= */

    function openContact() {

        modal.classList.add("show");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

        const closeButton =
            modal.querySelector(".modal-close");

        if (closeButton) {
            closeButton.focus();
        }
    }


    /* =========================
       CLOSE MODAL
       ========================= */

    function closeContact() {

        modal.classList.remove("show");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }


    /* =========================
       OPEN BUTTONS
       ========================= */

    openButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            openContact
        );

    });


    /* =========================
       CLOSE BUTTONS
       ========================= */

    closeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            closeContact
        );

    });


    /* =========================
       ESCAPE KEY
       ========================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("show")
            ) {
                closeContact();
            }

        }
    );

});
