window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = function(event) {
    event.preventDefault();

    let voterReg = document.getElementById("voterInfo");
    voterInfo.setAttribute("class", "hidden");
    let under18 = document.getElementById("under-18");
    under18.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age >=18) {
      voterReg.removeAttribute("class");
    } else {
      under18.removeAttribute("class");
    }
  };
};