// 녹화버튼 이벤트 js파일
function cam1_rec() {
    var img1 = document.getElementById('img1'),
        socket1 = io('192.168.1.126:9090/c1');
    socket1.emit('cam1_rec', function (data) {
        var bytes = new Uint8Array(data);
        img1.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam1_녹화가 시작되었습니다.");
}



function cam2_rec() {
    var img2 = document.getElementById('img2'),
    socket2 = io('192.168.1.126:9090/c2');
    socket2.emit('cam2_rec', function (data) {
        var bytes = new Uint8Array(data);
        img2.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam2_녹화가 시작되었습니다.");
}


function cam3_rec() {
    var img3 = document.getElementById('img3'),
    socket3 = io('192.168.1.126:9090/c3');
    socket3.emit('cam3_rec',function (data) {
        var bytes = new Uint8Array(data);
        img3.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam3_녹화가 시작되었습니다.");
}

function cam4_rec() {
    var img4 = document.getElementById('img4'),
    socket4 = io('192.168.1.126:9090/c4');
    socket4.emit('cam4_rec',function (data) {
        var bytes = new Uint8Array(data);
        img4.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam4_녹화가 시작되었습니다.");
}

function cam5_rec() {
    var img5 = document.getElementById('img5'),
    socket5 = io('192.168.1.126:9090/c5');
    socket5.emit('cam5_rec',function (data) {
        var bytes = new Uint8Array(data);
        img5.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam5_녹화가 시작되었습니다.");
}

function cam6_rec() {
    var img6 = document.getElementById('img6'),
    socket6 = io('192.168.1.126:9090/c6');
    socket6.emit('cam6_rec',function (data) {
        var bytes = new Uint8Array(data);
        img6.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam6_녹화가 시작되었습니다.");
}

function cam7_rec() {
    var img7 = document.getElementById('img7'),
    socket7 = io('192.168.1.126:9090/c7');
    socket7.emit('cam7_rec',function (data) {
        var bytes = new Uint8Array(data);
        img7.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam7_녹화가 시작되었습니다.");
}

function cam8_rec() {
    var img8 = document.getElementById('img8'),
    socket8 = io('192.168.1.126:9090/c8');
    socket8.emit('cam8_rec',function (data) {
        var bytes = new Uint8Array(data);
        img8.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam8_녹화가 시작되었습니다.");
}

function cam9_rec() {
    var img9 = document.getElementById('img9'),
    socket9 = io('192.168.1.126:9090/c9');
    socket9.emit('cam9_rec',function (data) {
        var bytes = new Uint8Array(data);
        img9.src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
    });
    console.log("cam9_녹화가 시작되었습니다.");
}




// // 채널 1 client -> server 버튼이벤트 전송
// function cam1_rec() {
//     socket1.emit('cam1_rec', 'cam1_rec'); //서버로 path값 전달
//     console.log("cam1_녹화가 시작되었습니다.");
// }

// function cam2_rec() {
//     socket1.emit('cam2_rec', 'cam2_rec'); //서버로 path값 전달
//     console.log("cam2_녹화가 시작되었습니다.");
// }

// function cam3_rec() {
//     socket1.emit('cam3_rec', 'cam3_rec'); //서버로 path값 전달
//     console.log("cam3_녹화가 시작되었습니다.");
// }

// function cam4_rec() {
//     socket1.emit('cam4_rec', 'cam4_rec'); //서버로 path값 전달
//     console.log("cam4_녹화가 시작되었습니다.");
// }

// function cam5_rec() {
//     socket1.emit('cam5_rec', 'cam5_rec'); //서버로 path값 전달
//     console.log("cam5_녹화가 시작되었습니다.");
// }

// function cam6_rec() {
//     socket1.emit('cam6_rec', 'cam6_rec'); //서버로 path값 전달
//     console.log("cam6_녹화가 시작되었습니다.");
// }

// function cam7_rec() {
//     socket1.emit('cam7_rec', 'cam7_rec'); //서버로 path값 전달
//     console.log("cam7_녹화가 시작되었습니다.");
// }

// function cam8_rec() {
//     socket1.emit('cam8_rec', 'cam8_rec'); //서버로 path값 전달
//     console.log("cam8_녹화가 시작되었습니다.");
// }

// function cam9_rec() {
//     socket1.emit('cam9_rec', 'cam9_rec'); //서버로 path값 전달
//     console.log("cam9_녹화가 시작되었습니다.");
// }