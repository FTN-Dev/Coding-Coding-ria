const text = "My Portfolio"; // Teks yang akan diketik
const typingEffect = document.getElementById("typing-effect");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingEffect.textContent += text[index]; // Tambahkan karakter satu per satu
        index++;
        setTimeout(typeWriter, 150); // Kecepatan mengetik (ms)
    } else {
        setTimeout(eraseText, 1000); // Tunggu sebelum menghapus teks
    }
}

function eraseText() {
    if (index > 0) {
        typingEffect.textContent = text.substring(0, index - 1); // Hapus karakter satu per satu
        index--;
        setTimeout(eraseText, 100); // Kecepatan menghapus (ms)
    } else {
        setTimeout(typeWriter, 500); // Tunggu sebelum mulai mengetik lagi
    }
}

// Mulai efek mengetik saat halaman dimuat
typeWriter();

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a"); // Ambil semua tautan
    const mainContent = document.getElementById("main-content"); // Elemen utama konten

    // Tambahkan efek masuk saat halaman pertama kali dimuat
    window.addEventListener("load", () => {
        const isBackNavigation = sessionStorage.getItem("isBackNavigation") === "true";
        if (isBackNavigation) {
            mainContent.classList.add("slide-in-back"); // Animasi kembali ke posisi semula
        } else {
            mainContent.classList.add("slide-in");
        }
        sessionStorage.removeItem("isBackNavigation");
    });

    // Tambahkan event listener untuk tautan
    links.forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");

            // Cegah navigasi default jika tautan adalah internal
            if (href.startsWith("#") || href === "") return;

            event.preventDefault();

            // Tandai navigasi ke halaman berikutnya
            sessionStorage.setItem("isBackNavigation", "false");

            // Tambahkan kelas untuk animasi keluar
            mainContent.classList.add("slide-out");

            // Tunggu hingga animasi selesai, lalu pindah halaman
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Sesuaikan dengan durasi animasi di CSS
        });
    });

    // Event untuk kembali ke halaman sebelumnya dengan efek masuk dari kanan
    window.addEventListener("popstate", () => {
        sessionStorage.setItem("isBackNavigation", "true");
        location.reload(); // Reload halaman dengan efek masuk dari kanan
    });
});

