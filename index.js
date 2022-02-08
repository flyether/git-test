
  const url = "https://api.unsplash.com/photos/random?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo"
  const imgCard = document.querySelectorAll(".img-card")
  async function getData() {
    try{
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      imgCard.scr = data.file
    }catch(error){
      console.log(error)
    }       
  }
  getData()



  
  var block = document.getElementById('img-API')
  function changeImg(){
    block.style.backgroundImage = "url('https://cs7062.vk.me/c540107/v540107359/2729/fYQlS_23QdA.jpg')";
}

changeImg();
