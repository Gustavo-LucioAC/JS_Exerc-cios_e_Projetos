const paragrafos = document.querySelectorAll('p')

const estilosbodystyle = getComputedStyle(document.body);
const backgroundColorBody = estilosbodystyle.backgroundColor;

for (let ps of paragrafos) {
    ps.style.color = "#FFFFFF"
    ps.style.backgroundColor = backgroundColorBody;
    ps.style.borderRadius = "15px"
    ps.style.padding = "5px"
}