fetch('https://api.lyrics.ovh/v1/Airbag/Cae el sol')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    parrafo = document.getElementById("letra");
    const {lyrics} = data;
    parrafo.innerHTML =  `${lyrics}`;
  })
  
