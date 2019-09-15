function toggleChinese() {
  var elements = document.querySelectorAll('[class="ch"]');

  for (var i = 0; i < elements.length; i ++) {
    toggleBlock(elements[i]);
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
