const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } 
    else if (item.id == "delete") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } 
    else if (display.innerText != "" && item.id == "equalbtn") {
      display.innerText = eval(display.innerText);
    }
    else if (display.innerText == "" && item.id == "equalbtn") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 1000);
    }
    else {
      display.innerText += item.id;
    }
  };
});

