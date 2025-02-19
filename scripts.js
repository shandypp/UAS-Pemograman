// JavaScript untuk efek dinamis dan interaksi
document.getElementById('moreInfoBtn').addEventListener('click', function() {
    alert("SMP Negeri 3 Cileunyi adalah sekolah yang menawarkan pendidikan berkualitas dengan berbagai program unggulan untuk mempersiapkan siswa menuju masa depan yang cerah.");
});

// Validasi Form Kontak
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk disubmit

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Pesan Anda telah terkirim. Terima kasih telah menghubungi kami!");
    } else {
        alert("Harap lengkapi semua kolom.");
    }
});
