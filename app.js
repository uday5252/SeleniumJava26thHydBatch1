
// create how many img tags ==> 500 img tag

const htmlBODY = document.getElementById("body")

for(let i = 1; i < 951; i++)
{
    const IMG = document.createElement("img")
    IMG.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)

    // keep IMG tags inside index.html
    htmlBODY.append(IMG)
}

// backtick ==> ` OR ""




