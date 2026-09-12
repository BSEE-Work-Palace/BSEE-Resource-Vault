/* =========================================================
   BSEE RESOURCE VAULT
   MODALS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           CONTACT MODAL
        ================================================== */

        const contactModal =
            document.getElementById(
                "contactModal"
            );


        if (contactModal) {


            const contactOpenButtons =
                document.querySelectorAll(
                    "[data-contact-open]"
                );


            const contactCloseButtons =
                document.querySelectorAll(
                    "[data-contact-close]"
                );


            function openContact() {

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


            document.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Escape" &&
                        contactModal.classList.contains("show")
                    ) {

                        closeContact();

                    }

                }
            );

        }


        /* =================================================
           ABOUT MODAL
        ================================================== */

        const aboutModal =
            document.getElementById(
                "aboutModal"
            );


        if (aboutModal) {


            const aboutOpenButtons =
                document.querySelectorAll(
                    "[data-about-open]"
                );


            const aboutCloseButtons =
                document.querySelectorAll(
                    "[data-about-close]"
                );


            function openAbout() {

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


            document.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Escape" &&
                        aboutModal.classList.contains("show")
                    ) {

                        closeAbout();

                    }

                }
            );

        }

    }
);
