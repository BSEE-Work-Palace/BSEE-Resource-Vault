/* =========================================================
   BSEE RESOURCE VAULT
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           CONTACT MODAL
        ================================================= */

        const contactModal =
            document.getElementById(
                "contactModal"
            );


        const contactOpenButtons =
            document.querySelectorAll(
                "[data-contact-open]"
            );


        const contactCloseButtons =
            document.querySelectorAll(
                "[data-contact-close]"
            );


        function openContact() {

            if (!contactModal) {
                return;
            }

            contactModal.classList.add(
                "show"
            );

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

            contactModal.classList.remove(
                "show"
            );

            contactModal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove(
                "modal-open"
            );
        }


        contactOpenButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    openContact
                );

            }
        );


        contactCloseButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    closeContact
                );

            }
        );


        /* =================================================
           ABOUT MODAL
        ================================================= */

        const aboutModal =
            document.getElementById(
                "aboutModal"
            );


        const aboutOpenButtons =
            document.querySelectorAll(
                "[data-about-open]"
            );


        const aboutCloseButtons =
            document.querySelectorAll(
                "[data-about-close]"
            );


        function openAbout() {

            if (!aboutModal) {
                return;
            }

            aboutModal.classList.add(
                "show"
            );

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

            aboutModal.classList.remove(
                "show"
            );

            aboutModal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove(
                "modal-open"
            );
        }


        aboutOpenButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    openAbout
                );

            }
        );


        aboutCloseButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    closeAbout
                );

            }
        );


        /* =================================================
           ESCAPE KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key !== "Escape"
                ) {
                    return;
                }


                if (
                    aboutModal &&
                    aboutModal.classList.contains("show")
                ) {

                    closeAbout();

                    return;
                }


                if (
                    contactModal &&
                    contactModal.classList.contains("show")
                ) {

                    closeContact();

                }

            }
        );


    }
);
