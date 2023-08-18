
// WebRTCを使用してローカルIPアドレスを取得
function getLocalIPAddresses() {
    return new Promise((resolve, reject) => {
        const pc = new RTCPeerConnection();
        pc.createDataChannel('');
        pc.createOffer()
            .then(offer => pc.setLocalDescription(offer))
            .catch(reject);

        pc.onicecandidate = ice => {
            if (ice.candidate) {
                const ipAddress = ice.candidate.candidate.split(' ')[4];
                document.getElementById("ipAddress").innerText = ipAddress;
                if (isValidIP(ipAddress)) {
                    resolve(ipAddress);
                }
            }
        };
    });
}

function isValidIP(ipAddress) {
    // 簡易的なIPアドレスのバリデーションを行う
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    document.getElementById("ipPattern").innerText = ipPattern.test(ipAddress);
    return ipPattern.test(ipAddress);
}

// IPアドレスを取得し表示
getLocalIPAddresses()
    .then(ipAddress => {
        console.log('Local IP Address:', ipAddress);
        document.getElementById('result').innerText = ipAddress;
        
    })
    .catch(error => {
        console.error('Error getting IP address:', error);
        document.getElementById('result').innerText = error;
    });
