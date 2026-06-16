function renderNote(note) {
    const noteDiv = document.createElement("div");

    noteDiv.innerHTML = note;
    noteDiv.setAttribute("style", "border: 2px solid black; padding: 10px;");

    document.getElementById("notes").appendChild(noteDiv);
}

async function addContent() {
    const note = document.getElementById("userNote").value;

    await axios.post("http://localhost:3000/notes", {
        note
    });

    renderNote(note);

    document.getElementById("userNote").value = "";
}

async function getContent() {
    const res = await axios.get("http://localhost:3000/notes");
    const notes = res.data.notes;

    document.getElementById("notes").innerHTML = "";

    notes.forEach(renderNote);
}

window.onload = getContent();