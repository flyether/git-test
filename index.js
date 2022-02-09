// const url = "https://api.unsplash.com/photos/random?query=spring&client_id=No7MKm_oO2eQLte1bRDe8U-iqpBeob1dCmwvyZyHCTs"
const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=No7MKm_oO2eQLte1bRDe8U-iqpBeob1dCmwvyZyHCTs"
  const section = document.querySelector('.section')
  // var block = document.getElementById('img-API')
  
  
  async function getData() {
      const response = await fetch(url)
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

  