
$(document).ready(function(){
    getTrendingGiphy();
    getSearchGiphy();
  });

function getTrendingGiphy(){
    const api = "https://api.giphy.com/v1/gifs/trending?api_key=d8vn4U9CdYqbvu3BBVEisXtvFIBjFjEm&limit=15&rating=G"

      $.ajax({
        method: 'GET',
        url: api,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            let data = result.data;
            let render = '';
            for(let index in data){
                gifObj = data[index];
                gifUrl = gifObj.images.original.url;
                console.log(gifUrl);
                render +=`<img width='200px' src='${gifUrl}'></img>`
            }
            $(".poster").html(render);
        },
        error: function(){
            console.log('this is an error')
        }
      })
  }

  function getSearchGiphy(){

    $(".btn").click(function(){
    event.preventDefault()
    let input = $(".giphy-input").val().toLowerCase();
    $(".giphy-input").val('')
    // const api = `https://api.giphy.com/v1/gifs/search?api_key=d8vn4U9CdYqbvu3BBVEisXtvFIBjFjEm&q=${input}&limit=15&offset=0&rating=G&lang=en`;
    
    const api = `https://api.giphy.com/v1/gifs/search?api_key=2ZvMoqo7IwPgXrXSXGz1eQIFhc7aW6uZ&q=${input}&limit=20&offset=0&rating=G&lang=en`

        $.ajax({
        method: 'GET',
        url: api,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            let data = result.data;
            let render = '';
            for(let index in data){
                gifObj = data[index];
                gifUrl = gifObj.images.original.url;
                console.log(gifUrl);
                render +=`<img width='200px' src='${gifUrl}'></img>`
            }
            $(".container h3").text(`${input.toUpperCase()}:`)
            $(".poster").html(render);
        },
        error: function(){
            console.log('this is an error')
        }
      })
    })
   
  }
