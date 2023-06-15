// OpenCV.jsの読み込みが完了した時に呼ばれる関数
function onOpenCvReady() {
    // カメラの映像を表示する要素を取得
    const videoElement = document.getElementById('videoElement');

    // カメラから映像を取得する処理
    function startVideo() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoElement.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing the camera: ', error);
            });
    }

    // カメラ映像の表示を開始
    startVideo();
}
