function renderNote(note) {
    const noteDiv = document.createElement("div");

    noteDiv.innerHTML = note.note;
    noteDiv.setAttribute("style", "border: 2px solid black; padding: 10px;");

    document.getElementById("notes").appendChild(noteDiv);
}

async function addContent() {
    const note = document.getElementById("userNote").value;

    await axios.post("http://localhost:3000/notes", {
        note,
    },{
        headers: {
            token: localStorage.getItem("token")
        }
    });

    renderNote(note);

    document.getElementById("userNote").value = "";
}

async function getContent() {
    const res = await axios.get("http://localhost:3000/notes",{
        headers:{
            token: localStorage.getItem("token")
        }
    });
    const notes = res.data.notes;

    document.getElementById("notes").innerHTML = "";

    notes.forEach(renderNote);
}

async function signup() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const res = await axios.post("http://localhost:3000/signup",{
        username, password
    });

    window.location = '/signin'
}

async function signin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const res = await axios.post("http://localhost:3000/signin",{
        username, password
    });

    const token = res.data.token;
    localStorage.setItem("token", token);

    window.location = '/'
}

window.onload = getContent();