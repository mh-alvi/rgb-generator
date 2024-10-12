const generateRGBcolor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  return rgbColor;
};

const updateColor = () => {
  const color = generateRGBcolor();
  const colorBox = document.getElementById("colorBox");
  const colorCode = document.getElementById("colorCode");

  colorBox.style.backgroundColor = color;
  colorCode.innerText = color;
};

const copyColorCode = () => {
  const colorCode = document.getElementById("colorCode");
  const inputTag = document.createElement("input");
  document.body.appendChild(inputTag);
  inputTag.value = colorCode.innerText;

  inputTag.select();
  document.execCommand("copy");
  document.body.removeChild(inputTag);
  // alert('copy to the clipboard');
  Swal.fire({
    title: "Copied!!",
    text: `${colorCode.innerText}`,
    icon: "success",
    confirmButtonText: "OK",
  });
};

document.getElementById("copyBtn").addEventListener("click", () => {
  copyColorCode();
});

function generateNewColorBtn(){
    updateColor();
}