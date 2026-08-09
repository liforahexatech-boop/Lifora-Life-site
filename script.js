/* =========================================
   LIFORA - JAVASCRIPT
   EMERGENCY WORKFLOW INTERACTIONS
========================================= */


/* =========================================
   CRITICAL PATIENT BUTTON
========================================= */

function openCriticalPatient() {

    const existingModal = document.getElementById("liforaModal");

    if (existingModal) {
        existingModal.remove();
    }


    const modal = document.createElement("div");

    modal.id = "liforaModal";

    modal.className = "lifora-modal";


    modal.innerHTML = `

        <div class="modal-overlay"
             onclick="closeLiforaModal()">

        </div>


        <div class="modal-box critical-modal">


            <button class="close-modal"
                    onclick="closeLiforaModal()">

                &times;

            </button>


            <div class="modal-header critical-header">

                <div class="modal-icon">

                    <i class="fa-solid fa-heart-pulse"></i>

                </div>


                <div>

                    <span>EMERGENCY MODE</span>

                    <h2>Critical Patient</h2>

                </div>

            </div>


            <div class="critical-warning">

                <i class="fa-solid fa-triangle-exclamation"></i>

                Patient is unconscious or unable to provide information.

            </div>


            <h3>Select Identification Method</h3>


            <div class="scan-options">


                <button class="scan-option"
                        onclick="startBiometricScan()">

                    <div class="scan-option-icon">

                        <i class="fa-solid fa-fingerprint"></i>

                    </div>


                    <div>

                        <strong>Biometric Scan</strong>

                        <p>Identify patient using fingerprint data</p>

                    </div>


                    <i class="fa-solid fa-arrow-right"></i>

                </button>



                <button class="scan-option"
                        onclick="startIrisScan()">

                    <div class="scan-option-icon iris">

                        <i class="fa-solid fa-eye"></i>

                    </div>


                    <div>

                        <strong>Iris Scanner</strong>

                        <p>Identify patient through iris recognition</p>

                    </div>


                    <i class="fa-solid fa-arrow-right"></i>

                </button>


            </div>


            <div class="security-note">

                <i class="fa-solid fa-shield-halved"></i>

                Identification is intended for authorized emergency access.

            </div>


        </div>

    `;


    document.body.appendChild(modal);


    setTimeout(() => {

        modal.classList.add("show-modal");

    }, 10);

}



/* =========================================
   BIOMETRIC SCANNER
========================================= */

function startBiometricScan() {

    const modalBox =
        document.querySelector(".modal-box");


    modalBox.innerHTML = `

        <button class="close-modal"
                onclick="closeLiforaModal()">

            &times;

        </button>


        <div class="scanner-screen">


            <div class="scanner-title">

                <span class="scanner-status-dot"></span>

                BIOMETRIC IDENTIFICATION

            </div>


            <div class="fingerprint-scanner">

                <div class="scan-line"></div>

                <i class="fa-solid fa-fingerprint"></i>

            </div>


            <h2>Scanning Biometric Data...</h2>


            <p>

                Please place the patient's registered biometric
                information for secure identification.

            </p>


            <div class="scan-progress">

                <div class="scan-progress-bar biometric-progress">

                </div>

            </div>


            <span class="scan-percent"
                  id="scanPercent">

                0%

            </span>

        </div>

    `;


    let progress = 0;


    const interval = setInterval(() => {

        progress += 2;


        const progressBar =
            document.querySelector(".biometric-progress");


        const percentage =
            document.getElementById("scanPercent");


        if (progressBar) {

            progressBar.style.width =
                progress + "%";

        }


        if (percentage) {

            percentage.innerText =
                progress + "%";

        }


        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                biometricSuccess();

            }, 500);

        }

    }, 40);

}



/* =========================================
   BIOMETRIC SUCCESS
========================================= */

function biometricSuccess() {

    const modalBox =
        document.querySelector(".modal-box");


    modalBox.innerHTML = `

        <button class="close-modal"
                onclick="closeLiforaModal()">

            &times;

        </button>


        <div class="success-screen">


            <div class="success-animation">

                <i class="fa-solid fa-check"></i>

            </div>


            <span class="verified-text">

                IDENTITY VERIFIED

            </span>


            <h2>Patient Identified Successfully</h2>


            <p>

                Essential emergency information has been securely
                retrieved and is now available to authorized
                healthcare personnel.

            </p>


            <div class="patient-record-card">


                <div class="record-header">

                    <i class="fa-solid fa-file-medical"></i>

                    Emergency Patient Record

                </div>


                <div class="record-grid">


                    <div>

                        <span>Blood Group</span>

                        <strong>Available</strong>

                    </div>


                    <div>

                        <span>Allergies</span>

                        <strong>Check Record</strong>

                    </div>


                    <div>

                        <span>Medical History</span>

                        <strong>Available</strong>

                    </div>


                    <div>

                        <span>Emergency Contact</span>

                        <strong>Ready</strong>

                    </div>


                </div>

            </div>


            <button class="continue-btn"
                    onclick="showEmergencyNotification()">

                Continue To Emergency Alert

                <i class="fa-solid fa-arrow-right"></i>

            </button>


        </div>

    `;

}



/* =========================================
   IRIS SCANNER
========================================= */

function startIrisScan() {

    const modalBox =
        document.querySelector(".modal-box");


    modalBox.innerHTML = `

        <button class="close-modal"
                onclick="closeLiforaModal()">

            &times;

        </button>


        <div class="scanner-screen">


            <div class="scanner-title iris-title">

                <span class="scanner-status-dot"></span>

                IRIS IDENTIFICATION

            </div>


            <div class="iris-scanner">

                <div class="iris-circle outer-circle"></div>

                <div class="iris-circle middle-circle"></div>

                <div class="iris-circle inner-circle"></div>

                <div class="iris-scan-line"></div>

                <i class="fa-solid fa-eye"></i>

            </div>


            <h2>Scanning Iris Pattern...</h2>


            <p>

                Align the patient's eye with the scanner
                for secure identification.

            </p>


            <div class="scan-progress">

                <div class="scan-progress-bar iris-progress">

                </div>

            </div>


            <span class="scan-percent"
                  id="scanPercent">

                0%

            </span>

        </div>

    `;


    let progress = 0;


    const interval = setInterval(() => {

        progress += 2;


        const progressBar =
            document.querySelector(".iris-progress");


        const percentage =
            document.getElementById("scanPercent");


        if (progressBar) {

            progressBar.style.width =
                progress + "%";

        }


        if (percentage) {

            percentage.innerText =
                progress + "%";

        }


        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                irisSuccess();

            }, 500);

        }

    }, 45);

}



/* =========================================
   IRIS SCAN SUCCESS
========================================= */

function irisSuccess() {

    const modalBox =
        document.querySelector(".modal-box");


    modalBox.innerHTML = `

        <button class="close-modal"
                onclick="closeLiforaModal()">

            &times;

        </button>


        <div class="success-screen">


            <div class="success-animation">

                <i class="fa-solid fa-check"></i>

            </div>


            <span class="verified-text">

                IRIS VERIFIED

            </span>


            <h2>Patient Identified Successfully</h2>


            <p>

                The iris scan has successfully matched the patient's
                registered emergency healthcare profile.

            </p>


            <div class="patient-record-card">


                <div class="record-header">

                    <i class="fa-solid fa-file-medical"></i>

                    Emergency Patient Record

                </div>


                <div class="record-grid">


                    <div>

                        <span>Medical Profile</span>

                        <strong>Verified</strong>

                    </div>


                    <div>

                        <span>Emergency Data</span>

                        <strong>Available</strong>

                    </div>


                    <div>

                        <span>Critical Information</span>

                        <strong>Retrieved</strong>

                    </div>


                    <div>

                        <span>Emergency Contact</span>

                        <strong>Ready</strong>

                    </div>


                </div>

            </div>


            <button class="continue-btn"
                    onclick="showEmergencyNotification()">

                Notify Emergency Contact

                <i class="fa-solid fa-bell"></i>

            </button>


        </div>

    `;

}



/* =========================================
   NON-CRITICAL PATIENT
========================================= */

function openNonCriticalPatient() {

    const existingModal =
        document.getElementById("liforaModal");


    if (existingModal) {

        existingModal.remove();

    }


    const modal =
        document.createElement("div");


    modal.id = "liforaModal";

    modal.className = "lifora-modal";


    modal.innerHTML = `

        <div class="modal-overlay"
             onclick="closeLiforaModal()">

        </div>


        <div class="modal-box noncritical-modal">


            <button class="close-modal"
                    onclick="closeLiforaModal()">

                &times;

            </button>


            <div class="modal-header">

                <div class="modal-icon blue-modal-icon">

                    <i class="fa-solid fa-qrcode"></i>

                </div>


                <div>

                    <span>QUICK IDENTIFICATION</span>

                    <h2>Non-Critical Patient</h2>

                </div>

            </div>


            <p class="modal-description">

                Scan the patient's Lifora QR code to securely
                retrieve essential medical information and
                reduce documentation time.

            </p>


            <div class="qr-scanner-box">


                <div class="qr-corners">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>


                <div class="qr-icon">

                    <i class="fa-solid fa-qrcode"></i>

                </div>


                <div class="qr-scan-line"></div>

            </div>


            <button class="scan-qr-btn"
                    onclick="scanQRCode()">

                <i class="fa-solid fa-camera"></i>

                Scan Patient QR Code

            </button>


        </div>

    `;


    document.body.appendChild(modal);


    setTimeout(() => {

        modal.classList.add("show-modal");

    }, 10);

}



/* =========================================
   QR CODE SCANNING
========================================= */

function scanQRCode() {

    const button =
        document.querySelector(".scan-qr-btn");


    if (!button) return;


    button.innerHTML = `

        <i class="fa-solid fa-spinner fa-spin"></i>

        Scanning Patient QR Code...

    `;


    button.disabled = true;


    setTimeout(() => {

        qrSuccess();

    }, 2500);

}



/* =========================================
   QR SUCCESS
========================================= */

function qrSuccess() {

    const modalBox =
        document.querySelector(".modal-box");


    modalBox.innerHTML = `

        <button class="close-modal"
                onclick="closeLiforaModal()">

            &times;

        </button>


        <div class="success-screen">


            <div class="success-animation blue-success">

                <i class="fa-solid fa-check"></i>

            </div>


            <span class="verified-text blue-verified">

                QR VERIFIED

            </span>


            <h2>Patient Profile Retrieved</h2>


            <p>

                The patient's information has been securely retrieved
                to assist healthcare professionals with faster
                documentation and treatment preparation.

            </p>


            <div class="patient-record-card">


                <div class="record-header">

                    <i class="fa-solid fa-user-check"></i>

                    Patient Information

                </div>


                <div class="record-grid">


                    <div>

                        <span>Identity</span>

                        <strong>Verified</strong>

                    </div>


                    <div>

                        <span>Medical Records</span>

                        <strong>Available</strong>

                    </div>


                    <div>

                        <span>Previous History</span>

                        <strong>Retrieved</strong>

                    </div>


                    <div>

                        <span>Documentation</span>

                        <strong>Faster Access</strong>

                    </div>


                </div>

            </div>


            <button class="continue-btn blue-continue"
                    onclick="closeLiforaModal()">

                Continue To Treatment

                <i class="fa-solid fa-arrow-right"></i>

            </button>


        </div>

    `;

}



/* =========================================
   EMERGENCY CONTACT NOTIFICATION
========================================= */

function notifyEmergencyContact() {

    const existingModal =
        document.getElementById("liforaModal");


    if (existingModal) {

        existingModal.remove();

    }


    const modal =
        document.createElement("div");


    modal.id = "liforaModal";

    modal.className = "lifora-modal";


    modal.innerHTML = `

        <div class="modal-overlay"
             onclick="closeLiforaModal()">

        </div>


        <div class="modal-box notification-modal">


            <button class="close-modal"
                    onclick="closeLiforaModal()">

                &times;

            </button>


            <div class="notification-top">

                <div class="notification-icon">

                    <i class="fa-solid fa-bell"></i>

                </div>


                <span>EMERGENCY ALERT</span>


                <h2>Notify Emergency Contact</h2>


                <p>

                    The patient's registered emergency contact will
                    receive the hospital details and location.

                </p>

            </div>


            <div class="notification-details">


                <div class="notification-detail">

                    <div class="detail-icon">

                        <i class="fa-solid fa-hospital"></i>

                    </div>


                    <div>

                        <span>Hospital</span>

                        <strong id="hospitalName">

                            Lifora Connected Hospital

                        </strong>

                    </div>

                </div>


                <div class="notification-detail">

                    <div class="detail-icon">

                        <i class="fa-solid fa-location-dot"></i>

                    </div>


                    <div>

                        <span>Location</span>

                        <strong id="hospitalLocation">

                            Hospital Location Available

                        </strong>

                    </div>

                </div>


                <div class="notification-detail">

                    <div class="detail-icon">

                        <i class="fa-solid fa-file-signature"></i>

                    </div>


                    <div>

                        <span>Next Step</span>

                        <strong>

                            Please Reach Hospital For Written Consent

                        </strong>

                    </div>

                </div>


            </div>


            <div class="message-preview">


                <div class="message-title">

                    <i class="fa-solid fa-message"></i>

                    Alert Preview

                </div>


                <p>

                    Emergency Alert: The patient has been admitted.
                    Hospital name and location are available through
                    Lifora. Please reach the hospital as soon as
                    possible for further documentation and written consent.

                </p>

            </div>


            <button class="send-alert-btn"
                    onclick="sendEmergencyAlert()">

                <i class="fa-solid fa-paper-plane"></i>

                Send Emergency Alert

            </button>


        </div>

    `;


    document.body.appendChild(modal);


    setTimeout(() => {

        modal.classList.add("show-modal");

    }, 10);

}



/* =========================================
   EMERGENCY ALERT SUCCESS
========================================= */

function sendEmergencyAlert() {

    const button =
        document.querySelector(".send-alert-btn");


    if (!button) return;


    button.innerHTML = `

        <i class="fa-solid fa-spinner fa-spin"></i>

        Sending Emergency Alert...

    `;


    button.disabled = true;


    setTimeout(() => {

        const modalBox =
            document.querySelector(".modal-box");


        modalBox.innerHTML = `

            <button class="close-modal"
                    onclick="closeLiforaModal()">

                &times;

            </button>


            <div class="success-screen alert-success">


                <div class="success-animation notification-success">

                    <i class="fa-solid fa-paper-plane"></i>

                </div>


                <span class="verified-text">

                    ALERT SENT SUCCESSFULLY

                </span>


                <h2>Emergency Contact Notified</h2>


                <p>

                    The patient's registered emergency contact has
                    been notified about the hospital admission,
                    hospital name and location.

                </p>


                <div class="alert-summary">


                    <div>

                        <i class="fa-solid fa-circle-check"></i>

                        Hospital Information Shared

                    </div>


                    <div>

                        <i class="fa-solid fa-circle-check"></i>

                        Location Information Shared

                    </div>


                    <div>

                        <i class="fa-solid fa-circle-check"></i>

                        Written Consent Instructions Shared

                    </div>


                </div>


                <button class="continue-btn"
                        onclick="closeLiforaModal()">

                    Complete

                    <i class="fa-solid fa-check"></i>

                </button>


            </div>

        `;

    }, 1800);

}



/* =========================================
   SHOW EMERGENCY NOTIFICATION
========================================= */

function showEmergencyNotification() {

    closeLiforaModal();


    setTimeout(() => {

        notifyEmergencyContact();

    }, 300);

}



/* =========================================
   CLOSE MODAL
========================================= */

function closeLiforaModal() {

    const modal =
        document.getElementById("liforaModal");


    if (!modal) return;


    modal.classList.remove("show-modal");


    setTimeout(() => {

        modal.remove();

    }, 300);

}



/* =========================================
   CLOSE WITH ESCAPE KEY
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLiforaModal();

    }

});


/* =========================================
   SMOOTH BUTTON INTERACTION
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    const buttons =
        document.querySelectorAll("button");


    buttons.forEach(function(button) {

        button.addEventListener("mousedown", function() {

            this.style.transform =
                "scale(0.97)";

        });


        button.addEventListener("mouseup", function() {

            this.style.transform = "";

        });

    });

});
