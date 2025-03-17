function changeText() {
    let newText = document.getElementById("inputText").value;
    if (newText.trim() !== "") {
        document.getElementById("dynamicText").innerText = newText;
    }
}