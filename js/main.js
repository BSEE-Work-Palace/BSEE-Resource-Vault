/* =========================================================
   BSEE RESOURCE VAULT
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const modal =
        document.getElementById("contactModal");

    /*
     * Some pages may not contain
     * the contact modal.
     */
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


    /* =========================
       OPEN CONTACT
    ========================== */

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
       CLOSE CONTACT
    ========================== */

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
    ========================== */

    openButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                openContact
            );

        }
    );


    /* =========================
       CLOSE BUTTONS
    ========================== */

    closeButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                closeContact
            );

        }
    );


    /* =========================
       ESCAPE KEY
    ========================== */

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
