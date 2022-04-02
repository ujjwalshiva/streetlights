const image_input = document.querySelector("#image_input");
var uploaded_image;

image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
    console.log(this.files[0]);
});





var x = document.getElementById("location");
function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else {
        alert("Sorry! your browser is not supporting")
    }
}
function showPosition(position) {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let light_area = document.querySelector('#light_area').value;
    let problem_desc = document.querySelector('#problem').value;
    let image = document.querySelector('#image');


    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    var x = "Your current location is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
    
    gmaps_url = `http://www.google.com/maps/place/${latitude},${longitude}`;
    positionstack_url = `http://api.positionstack.com/v1/reverse?access_key=f2fea958c22bd849642bc74d024d6557&query=${latitude},${longitude}`;
    fetch(positionstack_url)
    .then(function(response) {
        return response.json();
    }).then(data => {
        console.log(data);
        let city = data.data[0].label;
        console.log(city);
        console.log(gmaps_url);
        let output = `You're current location is <a href="${gmaps_url}" target="_blank">${city}</a>`;
        document.getElementById("location").innerHTML = output;
    })
    
}

