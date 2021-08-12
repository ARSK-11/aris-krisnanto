/* view text html in javasc to html*/
document.getElementById("html0").innerText = '<!DOCTYPE html>';
document.getElementById("html1").innerText = '<html>';
document.getElementById("html2").innerText = '<head>';
document.getElementById("html3").innerText = '   <title>hello world!</title>';
document.getElementById("html4").innerText = '</head>';
document.getElementById("html5").innerText = '<body>';
document.getElementById("html6").innerText = '  <p>text paragraf</p>';
document.getElementById("html7").innerText = '</body>';
document.getElementById("html8").innerText = '</html>';


//#button mode
function dark() {
    document.getElementById("colors").style.background = "rgb(33, 33, 33)";
    document.getElementById("colors").style.color = "white";
}
function light() {
    document.getElementById("colors").style.background = "whitesmoke";
    document.getElementById("colors").style.color = "rgb(33, 33, 33)";
}
