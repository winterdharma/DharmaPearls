function toggleSubmenu(id) {
  var submenu = document.getElementById(id);
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

function toggleChinese() {
  var elements = document.querySelectorAll('[class="ch"]');

  for (var i = 0; i < elements.length; i ++) {
    toggleBlock(elements[i]);
  }

  if(elements[0].style.display == "block") {
    document.getElementById('toggleChinese').innerHTML = "Hide Chinese";
  } else {
    document.getElementById('toggleChinese').innerHTML = "Show Chinese";
  }
}

function toggleNotes() {
  var notes = document.querySelectorAll('[class="notes"]');
  var refs = document.querySelectorAll('[class="noteref"]');
  var taisho = document.querySelectorAll('[class="taishoref"]');

  for (var i = 0; i < notes.length; i ++) {
    toggleBlock(notes[i]);
  }
  for(var i = 0; i < refs.length; i ++) {
    toggleInline(refs[i]);
  }
  for(var i = 0; i < taisho.length; i ++) {
    toggleInline(taisho[i]);
  }

  if(notes[0].style.display == "none") {
    document.getElementById('toggleNotes').innerHTML = "Show Notes";
  } else {
    document.getElementById('toggleNotes').innerHTML = "Hide Notes";
  }
}

function toggleBlock(element) {
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function toggleInline(element) {
  if (element.style.display === "none") {
    element.style.display = "inline";
  } else {
    element.style.display = "none";
  }
}
