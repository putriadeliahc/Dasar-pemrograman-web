document.addEventListener('DOMContentLoaded', function () {
    const linkyoutube = document.querySelectorAll('.putar-video');

    linkyoutube.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            openYouTubePopup(this.href);
        });
    });
});

function openYouTubePopup(url) {
    var lebarpopup = 600;
    var tinggipopup = 400;

    var left = (window.innerWidth - lebarpopup) / 2;
    var top = (window.innerHeight - tinggipopup) / 2;

    var popupWindow = window.open(
        url,
        'YouTube Popup',
        'width=' + lebarpopup + ', height=' + tinggipopup + ', left=' + left + ', top=' + top
    );

    if (popupWindow) {
        popupWindow.focus();
    }
}
