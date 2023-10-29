"strict mode";

document.querySelector(".selector").addEventListener("change", function () {
  let option = document.querySelector(".selector").value;
  if (option === "4") {
    document.querySelector(".school").src = "murga.gif";
  } else {
    document.querySelector(".school").src =
      "https://wallpapers.com/images/hd/animated-study-corner-e3nmjf654cr9f1sl.jpg";
  }
});
