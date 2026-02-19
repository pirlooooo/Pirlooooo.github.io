document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil semua elemen video di halaman
    const allVideos = document.querySelectorAll('video');

    // 2. Pasang pendengar (event listener) di setiap video
    allVideos.forEach(singleVideo => {
        singleVideo.addEventListener('play', () => {
            
            // 3. Saat satu video di-play, cek video-video lain
            allVideos.forEach(otherVideo => {
                // Jika video yang dicek BUKAN video yang sedang diputar
                if (otherVideo !== singleVideo) {
                    otherVideo.pause(); // Matikan (pause) video tersebut
                }
            });
            
        });
    });
});