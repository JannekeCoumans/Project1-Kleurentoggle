const menuImage = document.getElementById("menuImage");
const menuContent = document.getElementById("colorMenu");
menuImage.addEventListener("mouseover", () => {
    menuContent.setAttribute("style", "display: block;")
})

menuContent.addEventListener("mouseleave", () => {
    menuContent.setAttribute("style", "display: none")
})

const colorsList = document.getElementById("colors");
colors = [
    {name: "whitesmoke", hex: "#f7f9f6"},
    {name: "darkslategray", hex: "#3a5a55"},
    {name: "lightcoral", hex: "#ea747d"},
    {name: "darkseagreen", hex: "#81a28f"},
    {name: "seagreen", hex: "#93c5a2"},
]

const menuItems = colors.forEach(color => {
    const newLi = document.createElement('li');
    const headerText = document.getElementById('h1Text');
    newLi.innerHTML = color.name;
    newLi.setAttribute("style", `background-color: ${color.hex}`);
    colorsList.appendChild(newLi);
    newLi.addEventListener("click", (event) => {
        document.body.setAttribute("style", `background-color: ${color.hex}`)
        headerText.innerHTML = color.name;
    });
})
