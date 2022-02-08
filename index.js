const url = "https://api.unsplash.com/photos/random?query=spring&client_id=No7MKm_oO2eQLte1bRDe8U-iqpBeob1dCmwvyZyHCTs"
  
  var block = document.getElementById('img-API')
  async function getData() {
    try{
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
            
      showData(data)
    } catch(error) {
      console.log(error)
    }       
  }
  getData()

  function showData(data){
    block.style.backgroundImage = `url("${data.urls.regular}")`
  }
  
  let div = document.createElement('div');
 section.appendChild(div)
  div.id ='img-API'
  div.classList.add('img-search-API')

    
  let html 
  html += '<div id="img-API" class ="img-search-API">'
  html +='</div>'
  selector.innerHTML = html;
  