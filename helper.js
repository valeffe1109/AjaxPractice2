





getMovies = async () => {
    var myHeaders = new Headers({


        "Authorization": "Basic " + btoa("user9:sP4YMKhBpqQHAPJN"),
        "Content-Type": "application/json"



    });
    const url = "https://strivetestapi.azurewebsites.net/api/movies/"; 
    var response = await fetch(url,{
        headers: myHeaders
    });
    return await response.json();
};

getMovie = async (category,id) => {
    var myHeaders = new Headers({


        "Authorization": "Basic " + btoa("user9:sP4YMKhBpqQHAPJN"),
        "Content-Type": "application/json"



    });
    const url = `https://strivetestapi.azurewebsites.net/api/movies/${category}`; 
    var response = await fetch(url,{
    headers:myHeaders});

    var movies =  await response.json();
    return movies.filter(m=>m._id===id)[0]
};