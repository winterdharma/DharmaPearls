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

  if(elements[0].style.display === "block") {
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

  var notesState = getComputedStyle(notes[0]).display;
  var taishoRefState = getComputedStyle(taisho[0]).display;

  if(notesState == "none") {
    document.getElementById('toggleNotes').innerHTML = "Show Notes";
  } else {
    document.getElementById('toggleNotes').innerHTML = "Hide Notes";
  }
}

function toggleBlock(element) {
  if (getComputedStyle(element).display == "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function toggleInline(element) {
  if (getComputedStyle(element).display == "none") {
    element.style.display = "inline";
  } else {
    element.style.display = "none";
  }
}

function toggleHeaderOnScroll() {
  var header = document.getElementsByTagName('header')[0];
  var nav = document.getElementsByTagName('nav')[0];
  let oldValue = 0
  let newValue = 0
  window.addEventListener('scroll', (e) => {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
      header.classList.add('hide');
      nav.classList.add('hide');
    } else if (oldValue > newValue) {
      header.classList.remove('hide');
      nav.classList.remove('hide');
    }
    oldValue = newValue;
});
}
