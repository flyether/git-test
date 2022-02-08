
  const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
  
  async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }
  getData();
  
  var block = document.getElementById('img-API');
  function changeImg(){
    block.style.backgroundImage = "url('https://cs7062.vk.me/c540107/v540107359/2729/fYQlS_23QdA.jpg')";
}

changeImg();
