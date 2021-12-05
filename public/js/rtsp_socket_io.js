// 실시간 이미지 전송 socket
var url_link =  'localhost'; // '192.168.1.126';                

var script = document.createElement("script");
var sCode ="";
var img1, socket1;
var img_arr = [""];
var socket_arr = [""];
var img_arr = [""];


window.onload = function () {
    // makeSocket(1);
}

function makeSocket(camCnt){
    for (var j=0; j<camCnt; j++){
        console.log(j);
        sCode = sCode + "img_arr["+j+"] = document.getElementById('img"+(j+1)+"');"
                        + "socket_arr["+j+"] = io('localhost:3000/c"+(j+1)+"');"
                        + "socket_arr["+j+"].on('data', function (data) {"
                        + "var bytes = new Uint8Array(data);"
                        //img_arr[i].src = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);
                        + "var src_data = 'data:image/jpeg;base64,' + base64ArrayBuffer(bytes);"
                        + "$('#img"+(j+1)+"').attr('src', src_data);"
                        + "});"
    }
    script.innerHTML += sCode;
    document.head.appendChild(script);
}
// arrayBuffer_ base64 encord
function base64ArrayBuffer(arrayBuffer) {
    var base64 = '';
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;

    var a, b, c, d;
    var chunk;

    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
        d = chunk & 63; // 63       = 2^6 - 1

        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
        chunk = bytes[mainLength];

        a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4; // 3   = 2^2 - 1

        base64 += encodings[a] + encodings[b] + '==';
    } else if (byteRemainder == 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

        a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2; // 15    = 2^4 - 1

        base64 += encodings[a] + encodings[b] + encodings[c] + '=';
    }

    return base64;
}