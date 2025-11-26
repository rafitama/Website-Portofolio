document.getElementById("btn").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("nama").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
    },5);
})

// submitNote.addEvenListener("click", () => {
//     let text: string = inputNote.value.trim();
//     if (text === "") return;

//     notes.push(text);
//     render();
//     inputNote.value = "";
// });

