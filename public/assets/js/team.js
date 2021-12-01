function activateTeam() {
  document.getElementById("Convenor").style.display = "block";
  document.getElementById("default-team-tab").className += " team-active";
}

function TeamDomain(domain, j) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    if (i != j) {
      tablinks[i].className = tablinks[i].className.replace(" team-active", "");
    } else {
      tablinks[i].className = tablinks[i].className += " team-active";
    }
  }
  document.getElementById(domain).style.display = "block";
}
