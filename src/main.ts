import './style.css'

function validation(){
  const nev_r=/\d*[a-zA-Z][a-zA-Z0-9]*$/;
  let nev=(document.getElementById('nev')as HTMLInputElement).value;
  if  (nev_r.test(nev)==false){
    (document.getElementById("errormsg")as HTMLInputElement).innerText="Legalább egy betűnek kell lennie a felhasználónévben!";
  }
  else if(nev_r.test(nev)==true){
    (document.getElementById("errormsg")as HTMLInputElement).innerText="";
  }

  const orszag_r=/\d*[a-zA-Z][a-zA-Z0-9]*$/;
  let orszag=(document.getElementById('orszag')as HTMLInputElement).value;
  if  (orszag_r.test(orszag)==false){
    (document.getElementById("errormsg")as HTMLInputElement).innerText="Legalább egy betűnek kell lennie az ország mezőben!";
  }

  const varos_r=/\d*[a-zA-Z][a-zA-Z0-9]*$/;
  let varos=(document.getElementById('varos')as HTMLInputElement).value;
  if  (varos_r.test(varos)==false){
    (document.getElementById("errormsg")as HTMLInputElement).innerText="Legalább egy betűnek kell lennie a város mezőben!";
  }

  const address_r=/\d*[a-zA-Z][a-zA-Z0-9]*$/;
  const address_r2=/.+/;
  let address=(document.getElementById('address')as HTMLInputElement).value;
  if  (address_r.test(address)==false){
    (document.getElementById("errormsg")as HTMLInputElement).innerText="Legalább egy betűnek kell lennie az Utca, házszám mezőben!";
  }
}

//console.log(nev_r.test('a'));

function init(): void{
  document.getElementById("fizetesgomb")?.addEventListener("click", validation);
}
document.addEventListener("DOMContentLoaded", init);