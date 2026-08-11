/* =========================================================
   MASS PAYMENT FLOW
   ========================================================= */


const paymentMethods =
    document.querySelectorAll(".payment-method");


const forms = {
    card: document.getElementById("cardForm"),
    upi: document.getElementById("upiForm"),
    netbanking: document.getElementById("netbankingForm"),
    wallet: document.getElementById("walletForm")
};


const payButton =
    document.getElementById("payButton");


const processingOverlay =
    document.getElementById("processingOverlay");


const successOverlay =
    document.getElementById("successOverlay");


const ticketOverlay =
    document.getElementById("ticketOverlay");


let selectedMethod = "card";


/* =========================================================
   PAYMENT METHOD SWITCHING
   ========================================================= */

paymentMethods.forEach(button => {

    button.addEventListener("click", () => {

        paymentMethods.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedMethod =
            button.dataset.method;


        Object.values(forms).forEach(form => {
            form.classList.add("hidden");
        });


        forms[selectedMethod]
            .classList.remove("hidden");

    });

});


/* =========================================================
   CARD NUMBER FORMATTING
   ========================================================= */

const cardNumber =
    document.getElementById("cardNumber");


cardNumber.addEventListener("input", () => {

    let value =
        cardNumber.value
            .replace(/\D/g, "")
            .substring(0, 16);


    value =
        value.match(/.{1,4}/g)?.join(" ")
        || "";


    cardNumber.value = value;

});


/* =========================================================
   EXPIRY FORMATTING
   ========================================================= */

const expiry =
    document.getElementById("expiry");


expiry.addEventListener("input", () => {

    let value =
        expiry.value
            .replace(/\D/g, "")
            .substring(0, 4);


    if (value.length >= 3) {

        value =
            value.substring(0, 2)
            + " / "
            + value.substring(2);

    }


    expiry.value = value;

});


/* =========================================================
   VALIDATION
   ========================================================= */

function validatePayment() {

    if (selectedMethod === "card") {

        const name =
            document.getElementById("cardName").value.trim();

        const number =
            document.getElementById("cardNumber").value
                .replace(/\s/g, "");

        const expiryValue =
            document.getElementById("expiry").value;

        const cvv =
            document.getElementById("cvv").value;


        if (!name) {
            alert("Please enter the cardholder name.");
            return false;
        }


        if (number.length !== 16) {
            alert("Please enter a valid 16-digit card number.");
            return false;
        }


        if (expiryValue.length < 7) {
            alert("Please enter the expiry date.");
            return false;
        }


        if (cvv.length !== 3) {
            alert("Please enter a valid CVV.");
            return false;
        }

    }


    if (selectedMethod === "upi") {

        const upi =
            document.getElementById("upiId").value.trim();


        if (!upi || !upi.includes("@")) {

            alert("Please enter a valid UPI ID.");

            return false;

        }

    }


    if (selectedMethod === "netbanking") {

        const bank =
            document.getElementById("bank").value;


        if (!bank) {

            alert("Please select your bank.");

            return false;

        }

    }


    return true;

}


/* =========================================================
   PAYMENT BUTTON
   ========================================================= */

payButton.addEventListener("click", () => {

    if (!validatePayment()) {
        return;
    }


    /*
       DEMO PAYMENT

       No real transaction occurs.
    */

    processingOverlay.classList.add("show");


    setTimeout(() => {

        processingOverlay.classList.remove("show");

        createBookingId();

        successOverlay.classList.add("show");

    }, 1800);

});


/* =========================================================
   BOOKING ID
   ========================================================= */

function createBookingId() {

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


    let id = "MASS";


    for (let i = 0; i < 5; i++) {

        id +=
            characters[
                Math.floor(
                    Math.random() * characters.length
                )
                ];

    }


    document.getElementById("bookingId")
        .textContent = id;


    document.getElementById("ticketBookingId")
        .textContent = id;

}


/* =========================================================
   VIEW TICKET
   ========================================================= */

function showTicket() {

    successOverlay.classList.remove("show");

    ticketOverlay.classList.add("show");

}


/* =========================================================
   CLOSE TICKET
   ========================================================= */

function closeTicket() {

    ticketOverlay.classList.remove("show");

}


/* =========================================================
   CLOSE OVERLAY WHEN CLICKING OUTSIDE
   ========================================================= */

ticketOverlay.addEventListener("click", event => {

    if (event.target === ticketOverlay) {

        closeTicket();

    }

});