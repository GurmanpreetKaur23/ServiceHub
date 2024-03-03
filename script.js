// back to top
// gurman
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let ScrollValue = Math.round((pos * 100) / calcHeight);
    // console.log(ScrollValue);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#F2E9FD ${ScrollValue}%, #d7d7d7 ${ScrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// connect
// gurman

let calcConnectValue = () => {
    let connectProgress = document.getElementById("connect");
    let posi = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let QuestionValue = Math.round((posi * 100) / calcHeight);

    if (posi > 100) {
        connectProgress.style.display = "grid";
    } else {
        connectProgress.style.display = "none";
    }

    connectProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    connectProgress.style.background = `conic-gradient(#F2E9FD ${QuestionValue}%, #d7d7d7 ${QuestionValue}%)`;
};

window.onscroll = () => {
    calcScrollValue();
    calcConnectValue(); // Call the function for handling the Connect button
};

window.onload = () => {
    calcScrollValue();
    calcConnectValue(); // Call the function for handling the Connect button
};

