/* =========================================================
   BSEE RESOURCE VAULT
   MODAL SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ABOUT MODAL
       Only exists on index.html
    ===================================================== */

    const aboutButton =
        document.getElementById("aboutButton");

    const aboutModal =
        document.getElementById("aboutModal");

    const aboutClose =
        document.getElementById("aboutClose");

    const aboutBackdrop =
        document.getElementById("aboutBackdrop");


    function openAbout() {

        if (!aboutModal) {
            return;
        }

        aboutModal.classList.add("active");

        aboutModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );
    }


    function closeAbout() {

        if (!aboutModal) {
            return;
        }

        aboutModal.classList.remove("active");

        aboutModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }


    if (aboutButton) {

        aboutButton.addEventListener(
            "click",
            openAbout
        );

    }


    if (aboutClose) {

        aboutClose.addEventListener(
            "click",
            closeAbout
        );

    }


    if (aboutBackdrop) {

        aboutBackdrop.addEventListener(
            "click",
            closeAbout
        );

    }



    /* =====================================================
       CONTACT MODAL
       Exists on all pages
    ===================================================== */

    const contactButton =
        document.getElementById("contactButton");

    const contactModal =
        document.getElementById("contactModal");

    const contactClose =
        document.getElementById("contactClose");

    const contactBackdrop =
        document.getElementById("contactBackdrop");


    function openContact() {

        if (!contactModal) {
            return;
        }

        contactModal.classList.add("active");

        contactModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );
    }


    function closeContact() {

        if (!contactModal) {
            return;
        }

        contactModal.classList.remove("active");

        contactModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }


    if (contactButton) {

        contactButton.addEventListener(
            "click",
            openContact
        );

    }


    if (contactClose) {

        contactClose.addEventListener(
            "click",
            closeContact
        );

    }


    if (contactBackdrop) {

        contactBackdrop.addEventListener(
            "click",
            closeContact
        );

    }



    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            if (
                aboutModal &&
                aboutModal.classList.contains("active")
            ) {

                closeAbout();

                return;
            }


            if (
                contactModal &&
                contactModal.classList.contains("active")
            ) {

                closeContact();

            }

        }
    );


});
