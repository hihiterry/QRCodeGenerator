let website_str="";

//開始時執行
generator();

//設定按鈕
document.getElementById("generateButton").onclick = generator;
document.getElementById("pngButton").onclick = downloadPNG;
document.getElementById("jpgButton").onclick = downloadJPG;


//生成QRcode
function generator(){
    website_str=document.getElementById("textBox").value;
    document.getElementById("qrcode").innerHTML = "";
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: website_str,
        width: 256,
        height: 256
    });
}

//下載PNG圖片
function downloadPNG() {
    let img = document.querySelector("#qrcode img");
    if (!img) {
        alert("Please generate a QR code first!");
        return;
    }
    let pictureLink = document.createElement("a");
    pictureLink.href = img.src;
    pictureLink.download = "qrcode.png";
    pictureLink.click();
}

//下載JPG圖片
function downloadJPG() {
    let img = document.querySelector("#qrcode img");
    if (!img) {
        alert("Please generate a QR code first!");
        return;
    }
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let jpgImage = canvas.toDataURL("image/jpeg");
    let pictureLink = document.createElement("a");
    pictureLink.href = jpgImage;
    pictureLink.download = "qrcode.jpg";
    pictureLink.click();
}