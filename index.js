
  const url = "https://api.unsplash.com/photos/random?query=spring&client_id=No7MKm_oO2eQLte1bRDe8U-iqpBeob1dCmwvyZyHCTs"
  const image = document.querySelectorAll(".img-card")
  
  async function getData() {
    try{
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      image .scr = data.file
    } catch(error) {
      console.log(error)
    }       
  }
  getData()

  // imgCard.addEventListener('click', () => {
  //   getData()
  //  }
  // )


  
  var block = document.getElementById('img-API')
  function changeImg(){
    block.style.backgroundImage = "url('https://cs7062.vk.me/c540107/v540107359/2729/fYQlS_23QdA.jpg')";
}

changeImg();
