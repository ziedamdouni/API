window.addEventListener('scroll',function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
    
});
//**form */
function verif ()
{  
  //**nom 
  a = formulaire.nom.value;
  exp=/^[A-Z]{1}[a-z ]+$/;
  if(exp.test(a)==false ) 
 {
 alert ("Merci de saisir votre nom et prénom ! la première lettre doit être majuscule! ")
  return false; 
  nom.classList.add("erreur");}


//**email
else if ((formulaire.email.value =="") ||(formulaire.email.value.indexOf('@')==1)||
(formulaire.email.value.indexOf('.')<0))
{alert ("champs mail est obligatoire vous devez le remplir correctement !")
return false;}


return true;

}
//**end form */
//**api */
const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let searchTerm = '';
let countries;

// API REQUEST
const fetchCountries = async() => {
	countries = await fetch(
		'https://restcountries.eu/rest/v2/all?fields=name;population;flag').then(res => res.json());
};

const showCountries = async() => {
	await fetchCountries();
  
  results.innerHTML = (
  
    countries
      .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .map(country => ( 

        ` 
          <li class="country-item">
            <img class="country-flag" src="${country.flag}" />
            <h3 class="country-name">${country.name}</h3>
            <div class="country-info">
              <h2 class="country-population">${numberWithCommas(country.population)}</h2>
              <h5 class="country-population-text">Habitants</h5>
            </div>
          </li>
        `
      )).join('')
  );
}; 

showCountries();

// INPUT SETUP
searchInput.addEventListener('input', (e) => {searchTerm = e.target.value;
  showCountries();	
});
  
function numberWithCommas(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}