document.addEventListener("DOMContentLoaded", function() {
    updateJam();
    setInterval(updateJam, 1000);

    function updateJam() {
        const now = new Date();
        const jam = now.getHours();
        const menit = now.getMinutes();
        const detik = now.getSeconds();

        const waktu = document.getElementById("jam");
        waktu.textContent = `${formatTime(jam)}:${formatTime(menit)}:${formatTime(detik)}`;

        const ucapan = document.getElementById("sapaan");
        ucapan.textContent = getGreeting(jam);
    }

    function formatTime(jam) {
        return jam < 10 ? `0${jam}` : jam;
    }

    function getGreeting(jam) {
        let sapaan = "";

        if (jam >= 0 && jam < 12) {
            sapaan = "おはよう";
        } else if (jam >= 12 && jam < 18) {
            sapaan = "こんにちは";
        } else {
            sapaan = "こんばんは";
        }

        return sapaan;
    }
});
