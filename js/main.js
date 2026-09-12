/* =========================================================
   BSEE RESOURCE VAULT
   MODAL SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       OPEN ANY MODAL
       ===================================================== */

    const modalOpenButtons =
        document.querySelectorAll(
            "[data-modal-open]"
        );


    modalOpenButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const modalId =
                    button.getAttribute(
                        "data-modal-open"
                    );


                const modal =
                    document.getElementById(
                        modalId
                    );


                if (!modal) {
                    return;
                }


                modal.classList.add(
                    "show"
                );


                modal.setAttribute(
                    "aria-hidden",
                    "false"
                );


                document.body.classList.add(
                    "modal-open"
                );

            }
        );

    });



    /* =====================================================
       CLOSE ANY MODAL
    ===================================================== */

    const modalCloseButtons =
        document.querySelectorAll(
            "[data-modal-close]"
        );


    modalCloseButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const modalId =
                    button.getAttribute(
                        "data-modal-close"
                    );


                const modal =
                    document.getElementById(
                        modalId
                    );


                if (!modal) {
                    return;
                }


                modal.classList.remove(
                    "show"
                );


                modal.setAttribute(
                    "aria-hidden",
                    "true"
                );


                document.body.classList.remove(
                    "modal-open"
                );

            }
        );

    });



    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            const openModals =
                document.querySelectorAll(
                    ".modal.show"
                );


            openModals.forEach(function (modal) {

                modal.classList.remove(
                    "show"
                );


                modal.setAttribute(
                    "aria-hidden",
                    "true"
                );

            });


            document.body.classList.remove(
                "modal-open"
            );

        }
    );



    /* =====================================================
       CLICK OUTSIDE MODAL
    ===================================================== */

    document.querySelectorAll(
        ".modal"
    ).forEach(function (modal) {

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.classList.contains(
                        "modal-overlay"
                    )
                ) {

                    modal.classList.remove(
                        "show"
                    );


                    modal.setAttribute(
                        "aria-hidden",
                        "true"
                    );


                    document.body.classList.remove(
                        "modal-open"
                    );

                }

            }
        );

    });

});
