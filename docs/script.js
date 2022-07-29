const okBtn = document.getElementById('ok-btn');
const inputPass = document.getElementById('pass');
const checkbox = document.querySelectorAll('input[type=checkbox]');
const levers = document.querySelectorAll('input[type=range]');
const launch = document.getElementById('launch-btn');
const rocket = document.querySelector('.rocket');

const disableInputs = () => {
  checkbox.forEach(function (e) {
    e.setAttribute('disabled', '');
  })

  levers.forEach(function (e) {
    e.setAttribute('disabled', '');
  })

  launch.setAttribute('disabled', '');
}

disableInputs();

const enableInputs = () => {
  checkbox.forEach(function (e) {
    e.removeAttribute('disabled');
  })

  levers.forEach(function (e) {
    e.removeAttribute('disabled');
  })

  inputPass.setAttribute('disabled', '');
  okBtn.setAttribute('disabled', '');
}

let secondLayer = () => {
  let arr = [];
  let arr2 = [];
  checkbox.forEach(function (e) {
    e.checked ? arr.push(e.checked) : '';
  })
  levers.forEach(function (e) {
    e.value === '100' ? arr2.push(e.value) : '';
    arr.length === 6 && arr2.length === 5 ? launch.removeAttribute('disabled') :
      launch.setAttribute('disabled', '');
  })
}

const enableLaunch = () => {
  checkbox.forEach(function (e) {
    e.addEventListener("change", () => {
      secondLayer();
    });
  })
  levers.forEach(function (e) {
    e.addEventListener("change", () => {
      secondLayer();
    });
  })
}

const switchOn = () => {
  inputPass.value === 'TrustNo1' ? enableInputs() : console.log('Password not valid');
}

okBtn.addEventListener("click", () => {
  switchOn();
  enableLaunch();
})

//animation

launch.addEventListener('click',() => {
  rocket.style.transform = 'translateX(400%)';
  rocket.style.transform += 'translateY(-700%)';
},false);
