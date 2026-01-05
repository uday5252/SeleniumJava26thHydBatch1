
const addBtn = document.getElementById("add")
const inputBox = document.getElementById("task")
const htmlBody = document.getElementById("body")


addBtn.addEventListener("click", function()
{
    // collect the data from the input box
    let enteredTask = inputBox.value
    // create h1 tag
    const myH1 = document.createElement("h1") // <h1></h1>
    
    myH1.textContent = enteredTask

    htmlBody.append(myH1)

    inputBox.value = ""

})










