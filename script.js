const getcolor = () => {
    const randomNo =Math.floor(Math.random()*1677215);
    const randomCode="#"+randomNo.toString(16);
    console.log(randomCode,randomNo);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;
}



document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();