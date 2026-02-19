document.addEventListener('DOMContentLoaded', function() {

    const allVideos = document.querySelectorAll('video');

    allVideos.forEach(singleVideo => {
        singleVideo.addEventListener('play', () => {

            allVideos.forEach(otherVideo => {
                if (otherVideo !== singleVideo) {
                    otherVideo.pause();
                }
            });
            
        });
    });

});
