
// =================================
// DOM READY
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // ELEMENTS
    // =================================

    const openButton =
        document.getElementById("openButton");

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");

    const testBirthdayButton =
        document.getElementById("testBirthdayButton");

    const wishButton =
        document.getElementById("wishButton");

    const birthdayCake =
        document.querySelector(".birthday-cake");

    const wishArea =
        document.querySelector(".wish-area");

    const musicButton =
        document.getElementById("musicButton");

    const birthdayAudio =
        document.getElementById("birthdayAudio");

    const musicStatus =
        document.getElementById("musicStatus");

    const surpriseButton =
        document.getElementById("surpriseButton");

    const finalMessage =
        document.getElementById("finalMessage");

    const finalParticles =
        document.getElementById("finalParticles");

    const photoCards =
        document.querySelectorAll(".photo-card");


    // =================================
    // OPEN SURPRISE
    // =================================

    if (openButton) {

        openButton.addEventListener("click", function () {

            document.body.classList.add("page-exit");

            setTimeout(function () {

                document.body.classList.add(
                    "show-countdown"
                );

            }, 900);

        });

    }


    // =================================
    // BIRTHDAY DATE
    // =================================

    const birthdayDate =
        new Date(
            "2026-10-14T00:00:00+05:30"
        ).getTime();


    let birthdayStarted = false;


    // =================================
    // START BIRTHDAY CELEBRATION
    // =================================

    function startBirthdayCelebration() {

        /*
         * Prevent the birthday celebration
         * from running more than once.
         */

        if (birthdayStarted) {
            return;
        }

        birthdayStarted = true;


        /*
         * Hide countdown and
         * activate birthday mode.
         */

        document.body.classList.remove(
            "show-countdown"
        );

        document.body.classList.add(
            "birthday-mode"
        );


        // =================================
        // MAGICAL BIRTHDAY EFFECTS
        // =================================

        createBirthdayFlash();

        createConfetti();

        createEmojiRain();

        createFireworks();


        // =================================
        // MUSIC
        // =================================

        playBirthdayMusic();


        // =================================
        // SHOW MEMORIES
        // =================================

        setTimeout(function () {

            if (
                document.body.classList.contains(
                    "birthday-mode"
                )
            ) {

                document.body.classList.add(
                    "show-memories"
                );

                const memoriesSection =
                    document.querySelector(
                        ".memories-section"
                    );

                if (memoriesSection) {

                    memoriesSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        }, 10000);

    }


    // =================================
    // COUNTDOWN
    // =================================

    function updateCountdown() {

        const now =
            new Date().getTime();

        const distance =
            birthdayDate - now;


        // =================================
        // BIRTHDAY TIME REACHED
        // =================================

        if (distance <= 0) {

            if (days)
                days.textContent = "00";

            if (hours)
                hours.textContent = "00";

            if (minutes)
                minutes.textContent = "00";

            if (seconds)
                seconds.textContent = "00";


            /*
             * AUTOMATICALLY START
             * BIRTHDAY CELEBRATION
             */

            startBirthdayCelebration();

            return;
        }


        // =================================
        // NORMAL COUNTDOWN
        // =================================

        const daysValue =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );

        const hoursValue =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

        const minutesValue =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );

        const secondsValue =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        if (days)
            days.textContent =
                String(daysValue).padStart(2, "0");

        if (hours)
            hours.textContent =
                String(hoursValue).padStart(2, "0");

        if (minutes)
            minutes.textContent =
                String(minutesValue).padStart(2, "0");

        if (seconds)
            seconds.textContent =
                String(secondsValue).padStart(2, "0");

    }


    /*
     * Start countdown immediately.
     */

    updateCountdown();


    /*
     * Update every second.
     */

    setInterval(
        updateCountdown,
        1000
    );


    // =================================
    // TEST BIRTHDAY BLAST
    // KEEP FOR NOW
    // =================================

    if (testBirthdayButton) {

        testBirthdayButton.addEventListener(
            "click",
            function () {

                startBirthdayCelebration();

            }
        );

    }


    // =================================
    // CONFETTI
    // =================================

    function createConfetti() {

        const container =
            document.getElementById(
                "confettiContainer"
            );

        if (!container) {
            return;
        }

        container.innerHTML = "";


        const colors = [
            "#f7a8b8",
            "#d85c78",
            "#ffd6df",
            "#ffffff",
            "#e8b76a",
            "#f3c4cf"
        ];


        for (let i = 0; i < 180; i++) {

            const confetti =
                document.createElement("div");


            confetti.className =
                "confetti";


            confetti.style.left =
                Math.random() * 100 + "%";


            confetti.style.animationDuration =
                (3 + Math.random() * 4) + "s";


            confetti.style.animationDelay =
                Math.random() * 2 + "s";


            confetti.style.background =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            container.appendChild(
                confetti
            );

        }

    }


    // =================================
    // EMOJI RAIN
    // =================================

    function createEmojiRain() {

        const container =
            document.getElementById(
                "emojiRain"
            );

        if (!container) {
            return;
        }

        container.innerHTML = "";


        const emojis = [
            "❤️",
            "💗",
            "💕",
            "✨",
            "🌸",
            "🎀",
            "🥳",
            "🎂"
        ];


        for (let i = 0; i < 70; i++) {

            const emoji =
                document.createElement("div");


            emoji.className =
                "emoji";


            emoji.textContent =
                emojis[
                    Math.floor(
                        Math.random() *
                        emojis.length
                    )
                ];


            emoji.style.left =
                Math.random() * 100 + "%";


            emoji.style.fontSize =
                (18 + Math.random() * 22) + "px";


            emoji.style.animationDuration =
                (4 + Math.random() * 5) + "s";


            emoji.style.animationDelay =
                Math.random() * 3 + "s";


            container.appendChild(
                emoji
            );

        }

    }


    // =================================
    // BIRTHDAY FLASH
    // =================================

    function createBirthdayFlash() {

        const flash =
            document.createElement("div");


        flash.className =
            "birthday-flash";


        document.body.appendChild(
            flash
        );


        setTimeout(function () {

            flash.remove();

        }, 900);

    }


    // =================================
    // FIREWORKS
    // =================================

    function createFireworks() {

        const container =
            document.getElementById(
                "fireworksContainer"
            );

        if (!container) {
            return;
        }

        container.innerHTML = "";


        for (let i = 0; i < 10; i++) {

            setTimeout(function () {

                createSingleFirework(
                    container
                );

            }, i * 600);

        }

    }


    function createSingleFirework(container) {

        const firework =
            document.createElement("div");


        firework.className =
            "firework";


        const x =
            15 + Math.random() * 70;


        const y =
            15 + Math.random() * 55;


        firework.style.left =
            x + "%";


        firework.style.top =
            y + "%";


        container.appendChild(
            firework
        );


        for (let i = 0; i < 24; i++) {

            const particle =
                document.createElement("div");


            particle.className =
                "firework-particle";


            particle.style.left =
                x + "%";


            particle.style.top =
                y + "%";


            const angle =
                (Math.PI * 2 * i) / 24;


            const distance =
                60 + Math.random() * 90;


            particle.style.setProperty(
                "--x",
                Math.cos(angle) *
                distance +
                "px"
            );


            particle.style.setProperty(
                "--y",
                Math.sin(angle) *
                distance +
                "px"
            );


            container.appendChild(
                particle
            );


            setTimeout(function () {

                particle.remove();

            }, 1300);

        }


        setTimeout(function () {

            firework.remove();

        }, 1500);

    }


    // =================================
    // BIRTHDAY MUSIC
    // =================================

    let musicPlaying = false;


    function playBirthdayMusic() {

        if (!birthdayAudio) {
            return;
        }


        birthdayAudio.volume = 0.8;


        const playPromise =
            birthdayAudio.play();


        if (
            playPromise !== undefined
        ) {

            playPromise
                .then(function () {

                    musicPlaying = true;


                    if (musicButton) {

                        musicButton.textContent =
                            "♫ Pause Birthday Song";

                    }


                    if (musicStatus) {

                        musicStatus.textContent =
                            "♪ Playing your birthday song...";

                    }

                })
                .catch(function () {

                    /*
                     * Mobile browsers may block
                     * automatic audio playback.
                     */

                    if (musicStatus) {

                        musicStatus.textContent =
                            "Tap the button to play the song ♫";

                    }

                });

        }

    }


    if (musicButton && birthdayAudio) {

        musicButton.addEventListener(
            "click",
            function () {

                if (!musicPlaying) {

                    birthdayAudio
                        .play()
                        .then(function () {

                            musicPlaying = true;


                            musicButton.textContent =
                                "♫ Pause Birthday Song";


                            if (musicStatus) {

                                musicStatus.textContent =
                                    "♪ Playing your birthday song...";

                            }

                        })
                        .catch(function () {

                            if (musicStatus) {

                                musicStatus.textContent =
                                    "Song file could not be played.";

                            }

                        });

                } else {

                    birthdayAudio.pause();

                    musicPlaying = false;


                    musicButton.textContent =
                        "♫ Play Your Birthday Song";


                    if (musicStatus) {

                        musicStatus.textContent =
                            "";

                    }

                }

            }
        );


        birthdayAudio.addEventListener(
            "ended",
            function () {

                musicPlaying = false;


                musicButton.textContent =
                    "♫ Play Your Birthday Song";

            }
        );


        birthdayAudio.addEventListener(
            "error",
            function () {

                if (musicStatus) {

                    musicStatus.textContent =
                        "Song file not found — check music/birthday-song.mp3";

                }


                console.error(
                    "Birthday song could not be loaded."
                );

            }
        );

    }


    // =================================
    // BLOW CANDLES
    // =================================

    if (
        wishButton &&
        birthdayCake &&
        wishArea
    ) {

        wishButton.addEventListener(
            "click",
            function () {

                birthdayCake.classList.add(
                    "candles-out"
                );


                wishArea.classList.add(
                    "wish-made"
                );


                wishButton.textContent =
                    "✨ Wish Made ♡";


                wishButton.disabled =
                    true;

            }
        );

    }


    // =================================
    // PHOTO REVEAL
    // =================================

    if (
        "IntersectionObserver"
        in window
    ) {

        const photoObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show-photo"
                                );


                                photoObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        photoCards.forEach(
            function (card) {

                photoObserver.observe(
                    card
                );

            }
        );

    } else {

        photoCards.forEach(
            function (card) {

                card.classList.add(
                    "show-photo"
                );

            }
        );

    }


    // =================================
    // FINAL SURPRISE
    // =================================

    if (
        surpriseButton &&
        finalMessage &&
        finalParticles
    ) {

        surpriseButton.addEventListener(
            "click",
            function () {

                finalMessage.classList.add(
                    "show-final-message"
                );


                surpriseButton.style.opacity =
                    "0";


                surpriseButton.style.pointerEvents =
                    "none";


                createFinalParticles();


                /*
                 * Bring the final message
                 * into view.
                 */

                setTimeout(function () {

                    finalMessage.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 300);

            }
        );

    }


    // =================================
    // FINAL HEART PARTICLES
    // =================================

    function createFinalParticles() {

        if (!finalParticles) {
            return;
        }


        finalParticles.innerHTML = "";


        for (let i = 0; i < 18; i++) {

            const particle =
                document.createElement("div");


            particle.className =
                "final-particle";


            particle.textContent =
                "♡";


            particle.style.left =
                Math.random() * 100 + "%";


            particle.style.animationDelay =
                Math.random() * 1.5 + "s";


            particle.style.fontSize =
                (12 + Math.random() * 14) + "px";


            finalParticles.appendChild(
                particle
            );

        }

    }


    // =================================
    // 20 LITTLE REASONS
    // =================================

    const reasonCards =
        document.querySelectorAll(
            ".reason-card"
        );


    if (reasonCards.length > 0) {

        reasonCards.forEach(
            function (card, index) {

                card.style.opacity = "0";

                card.style.transform =
                    "translateY(35px) scale(0.96)";

                card.style.transition =
                    `opacity 0.7s ease ${index * 0.08}s,
                     transform 0.7s ease ${index * 0.08}s`;

            }
        );


        const reasonsSection =
            document.querySelector(
                ".reasons-section"
            );


        function showReasonCards() {

            reasonCards.forEach(
                function (card) {

                    card.style.opacity = "1";

                    card.style.transform =
                        "translateY(0) scale(1)";

                }
            );

        }


        if (
            "IntersectionObserver"
            in window
        ) {

            const reasonsObserver =
                new IntersectionObserver(
                    function (
                        entries,
                        observer
                    ) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    showReasonCards();

                                    observer.disconnect();

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.05,
                        rootMargin:
                            "0px 0px -50px 0px"
                    }
                );


            if (reasonsSection) {

                reasonsObserver.observe(
                    reasonsSection
                );

            } else {

                showReasonCards();

            }

        } else {

            showReasonCards();

        }



    }


    // =================================
    // SECRET HEART SURPRISE
    // =================================

    const secretHeartButton =
        document.getElementById(
            "secretHeartButton"
        );

    const secretMessage =
        document.getElementById(
            "secretMessage"
        );


    if (
        secretHeartButton &&
        secretMessage
    ) {

        secretHeartButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    secretMessage.classList.contains(
                        "show-secret"
                    );


                if (!isOpen) {

                    secretMessage.classList.add(
                        "show-secret"
                    );


                    secretHeartButton.innerHTML =
                        `<span>♥</span> My Secret Is Open`;


                    createSecretHearts();


                    setTimeout(
                        function () {

                            secretMessage.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        },
                        250
                    );

                } else {

                    secretMessage.classList.remove(
                        "show-secret"
                    );


                    secretHeartButton.innerHTML =
                        `<span>♡</span> Open My Secret`;

                }

            }
        );

    }


    // =================================
    // SECRET HEART PARTICLES
    // =================================

    function createSecretHearts() {

        const secretArea =
            document.querySelector(
                ".secret-heart-area"
            );


        if (!secretArea) {
            return;
        }


        const hearts = [
            "♡",
            "♥",
            "❤",
            "💕",
            "💗"
        ];


        for (let i = 0; i < 18; i++) {

            const heart =
                document.createElement("span");


            heart.className =
                "secret-floating-heart";


            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() *
                        hearts.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 + "%";


            heart.style.animationDelay =
                Math.random() * 0.8 + "s";


            heart.style.animationDuration =
                2.5 +
                Math.random() * 2 +
                "s";


            secretArea.appendChild(
                heart
            );


            setTimeout(
                function () {

                    heart.remove();

                },
                5000
            );

        }

    }


    // =================================
    // PHOTO LIGHTBOX
    // =================================

    const photoLightbox =
        document.getElementById(
            "photoLightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );

    const lightboxCaption =
        document.getElementById(
            "lightboxCaption"
        );

    const lightboxClose =
        document.getElementById(
            "lightboxClose"
        );

    const lightboxPrev =
        document.getElementById(
            "lightboxPrev"
        );

    const lightboxNext =
        document.getElementById(
            "lightboxNext"
        );


    const memoryPhotos =
        document.querySelectorAll(
            ".photo-card img"
        );


    let currentPhotoIndex = 0;


    // =================================
    // OPEN PHOTO
    // =================================

    function openPhoto(index) {

        if (!memoryPhotos.length) {
            return;
        }


        if (
            index < 0 ||
            index >= memoryPhotos.length
        ) {
            return;
        }


        currentPhotoIndex = index;


        const photo =
            memoryPhotos[
                currentPhotoIndex
            ];


        if (lightboxImage) {

            lightboxImage.src =
                photo.src;


            lightboxImage.alt =
                photo.alt ||
                "Our Memory";

        }


        const caption =
            photo
                .closest(".photo-card")
                ?.querySelector(
                    ".photo-caption"
                );


        if (lightboxCaption) {

            lightboxCaption.textContent =
                caption
                    ? caption.textContent
                    : "A beautiful memory ♡";

        }


        if (photoLightbox) {

            photoLightbox.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }

    }


    // =================================
    // CLOSE PHOTO
    // =================================

    function closePhoto() {

        if (!photoLightbox) {
            return;
        }


        photoLightbox.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }


    // =================================
    // UPDATE LIGHTBOX PHOTO
    // =================================

    function updateLightboxPhoto() {

        if (!memoryPhotos.length) {
            return;
        }


        const photo =
            memoryPhotos[
                currentPhotoIndex
            ];


        if (lightboxImage) {

            lightboxImage.style.opacity =
                "0";

        }


        setTimeout(
            function () {

                if (lightboxImage) {

                    lightboxImage.src =
                        photo.src;


                    lightboxImage.alt =
                        photo.alt ||
                        "Our Memory";

                }


                const caption =
                    photo
                        .closest(".photo-card")
                        ?.querySelector(
                            ".photo-caption"
                        );


                if (lightboxCaption) {

                    lightboxCaption.textContent =
                        caption
                            ? caption.textContent
                            : "A beautiful memory ♡";

                }


                if (lightboxImage) {

                    lightboxImage.style.opacity =
                        "1";

                }

            },
            120
        );

    }


    // =================================
    // NEXT PHOTO
    // =================================

    function showNextPhoto() {

        if (!memoryPhotos.length) {
            return;
        }


        currentPhotoIndex =
            (
                currentPhotoIndex + 1
            ) %
            memoryPhotos.length;


        updateLightboxPhoto();

    }


    // =================================
    // PREVIOUS PHOTO
    // =================================

    function showPreviousPhoto() {

        if (!memoryPhotos.length) {
            return;
        }


        currentPhotoIndex =
            (
                currentPhotoIndex -
                1 +
                memoryPhotos.length
            ) %
            memoryPhotos.length;


        updateLightboxPhoto();

    }


    // =================================
    // PHOTO CLICK
    // =================================

    memoryPhotos.forEach(
        function (photo, index) {

            photo.style.cursor =
                "zoom-in";


            photo.addEventListener(
                "click",
                function () {

                    openPhoto(index);

                }
            );

        }
    );


    // =================================
    // LIGHTBOX BUTTONS
    // =================================

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closePhoto
        );

    }


    if (lightboxNext) {

        lightboxNext.addEventListener(
            "click",
            showNextPhoto
        );

    }


    if (lightboxPrev) {

        lightboxPrev.addEventListener(
            "click",
            showPreviousPhoto
        );

    }


    // =================================
    // CLICK OUTSIDE PHOTO
    // =================================

    if (photoLightbox) {

        photoLightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    photoLightbox
                ) {

                    closePhoto();

                }

            }
        );

    }


    // =================================
    // KEYBOARD CONTROLS
    // =================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                !photoLightbox ||
                !photoLightbox.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            if (event.key === "Escape") {

                closePhoto();

            }


            if (event.key === "ArrowRight") {

                showNextPhoto();

            }


            if (event.key === "ArrowLeft") {

                showPreviousPhoto();

            }

        }
    );


    // =================================
    // 4 YEARS TOGETHER
    // SCROLL REVEAL
    // =================================

    const timelineItems =
        document.querySelectorAll(
            ".timeline-item"
        );


    if (timelineItems.length > 0) {

        timelineItems.forEach(
            function (item, index) {

                item.style.opacity = "0";


                item.style.transform =
                    index % 2 === 0
                        ? "translateX(-45px)"
                        : "translateX(45px)";


                item.style.transition =
                    `opacity 0.8s ease ${index * 0.12}s,
                     transform 0.8s ease ${index * 0.12}s`;

            }
        );


        if (
            "IntersectionObserver"
            in window
        ) {

            const timelineObserver =
                new IntersectionObserver(
                    function (
                        entries,
                        observer
                    ) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.style.opacity =
                                        "1";


                                    entry.target.style.transform =
                                        "translateX(0)";


                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12,
                        rootMargin:
                            "0px 0px -50px 0px"
                    }
                );


            timelineItems.forEach(
                function (item) {

                    timelineObserver.observe(
                        item
                    );

                }
            );

        } else {

            timelineItems.forEach(
                function (item) {

                    item.style.opacity =
                        "1";


                    item.style.transform =
                        "translateX(0)";

                }
            );

        }

    }

});
