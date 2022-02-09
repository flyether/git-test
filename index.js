
  // const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=No7MKm_oO2eQLte1bRDe8U-iqpBeob1dCmwvyZyHCTs"
  
  const loupe = document.querySelector('.search-btn')


 
  
  async function getData() {
  const section = document.querySelector('.section')
  var searchText = document.getElementById("input").value; 
  if ( searchText == "") {
    searchText =  'spring' }
 
  var searchUrl =  "https://api.unsplash.com/search/photos?query=" + searchText + "&per_page=30&orientation=landscape&client_id=No7MKm_oO2eQLte1bRDe8U-iqpBeob1dCmwvyZyHCTs"
   const response = await fetch(searchUrl)
   const data = await response.json()
   console.log(data)
      section.innerHTML =""
      for (let key in data.results) {
        let div = document.createElement('div');
        section.appendChild(div)
        div.classList.add('img-search-API')
        div.style.backgroundImage = `url("${data.results[key].urls.small}")`
      }
       
  }
  getData()

  loupe.addEventListener('click', getData )     

  var input = document.getElementById("input")
  var placeholder = input.placeholder;
  // input.addEventListener('keydown', getData )  
  input.addEventListener('keydown', getData)