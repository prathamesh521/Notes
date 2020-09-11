console.log("everything's working fine!!");
showNotes();  

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addtext = document.getElementById("addText");
    let addtitle = document.getElementById("title");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let addInput = {
        title: addtitle.value,
        text: addtext.value
    };

    notesObj.push(addInput);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = "";
    title.value = "";
    console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function (element, index) {
        
        
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick="delNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div> `;
    
    });

    let notesElement = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElement.innerHTML = html;
    }
    else{
        notesElement.innerHTML = `No Notes are available.`;
    }
}


function delNote(index){
    console.log("deleting");

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
