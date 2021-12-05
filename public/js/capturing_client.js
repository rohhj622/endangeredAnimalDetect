// 캡쳐버튼 이벤트 js파일

// 채널 1 client -> server 버튼이벤트 전송
function cam1_cap() {
    var img1 = document.getElementById('img1'),
    socket1 = io('192.168.1.126:9090/c1');
    socket1.emit('cam1_cap',function (data) {
        var bytes = new Uint8Array(data);
        img1.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam1_캡쳐가 완료되었습니다.");
}


function cam2_cap() {
    var img2 = document.getElementById('img2'),
    socket2 = io('192.168.1.126:9090/c2');
    socket2.emit('cam2_cap',function (data) {
        var bytes = new Uint8Array(data);
        img2.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam2_캡쳐가 완료되었습니다.");
}

function cam3_cap() {
    var img3 = document.getElementById('img3'),
    socket3 = io('192.168.1.126:9090/c3');
    socket3.emit('cam3_cap',function (data) {
        var bytes = new Uint8Array(data);
        img3.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam3_캡쳐가 완료되었습니다.");
}

function cam4_cap() {
    var img4 = document.getElementById('img4'),
    socket4 = io('192.168.1.126:9090/c4');
    socket4.emit('cam4_cap',function (data) {
        var bytes = new Uint8Array(data);
        img4.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam4_캡쳐가 완료되었습니다.");
}

function cam5_cap() {
    var img5 = document.getElementById('img5'),
    socket5 = io('192.168.1.126:9090/c5');
    socket5.emit('cam5_cap',function (data) {
        var bytes = new Uint8Array(data);
        img5.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam5_캡쳐가 완료되었습니다.");
}

function cam6_cap() {
    var img6 = document.getElementById('img6'),
    socket6 = io('192.168.1.126:9090/c6');
    socket6.emit('cam6_cap',function (data) {
        var bytes = new Uint8Array(data);
        img6.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam6_캡쳐가 완료되었습니다.");
}

function cam7_cap() {
    var img7 = document.getElementById('img7'),
    socket7 = io('192.168.1.126:9090/c7');
    socket7.emit('cam7_cap',function (data) {
        var bytes = new Uint8Array(data);
        img7.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam7_캡쳐가 완료되었습니다.");
}

function cam8_cap() {
    var img8 = document.getElementById('img8'),
    socket8 = io('192.168.1.126:9090/c8');
    socket8.emit('cam8_cap',function (data) {
        var bytes = new Uint8Array(data);
        img8.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam8_캡쳐가 완료되었습니다.");
}

function cam9_cap() {
    var img9 = document.getElementById('img9'),
    socket9 = io('192.168.1.126:9090/c9');
    socket9.emit('cam9_cap',function (data) {
        var bytes = new Uint8Array(data);
        img9.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam9_캡쳐가 완료되었습니다.");
}






// function cam3_cap() {
//     socket1.emit('cam3_cap', 'cam3_cap'); //서버로 path값 전달
//     console.log("cam3_캡쳐가 완료되었습니다.");
// }

// function cam4_cap() {
//     socket1.emit('cam4_cap', 'cam4_cap'); //서버로 path값 전달
//     console.log("cam4_캡쳐가 완료되었습니다.");
// }

// function cam5_cap() {
//     socket1.emit('cam5_cap', 'cam5_cap'); //서버로 path값 전달
//     console.log("cam5_캡쳐가 완료되었습니다.");
// }

// function cam6_cap() {
//     socket1.emit('cam6_cap', 'cam6_cap'); //서버로 path값 전달
//     console.log("cam6_캡쳐가 완료되었습니다.");
// }

// function cam7_cap() {
//     socket1.emit('cam7_cap', 'cam7_cap'); //서버로 path값 전달
//     console.log("cam7_캡쳐가 완료되었습니다.");
// }

// function cam8_cap() {
//     socket1.emit('cam8_cap', 'cam8_cap'); //서버로 path값 전달
//     console.log("cam8_캡쳐가 완료되었습니다.");
// }

// function cam9_cap() {
//     socket1.emit('cam9_cap', 'cam9_cap'); //서버로 path값 전달
//     console.log("cam9_캡쳐가 완료되었습니다.");
// }