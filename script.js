let imgbb_api = "https://api.imgbb.com/1/upload?key=ecbbe6c33db4a4c7204107dea81edf52&image="
// db8607dd64175f1c3527ff2101aba830
var url;

const image_input = document.querySelector("#image_input");
var uploaded_image;

image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    var form = new FormData();
    form.append("image",this.files[0])
    reader.readAsDataURL(this.files[0]);
    console.log(this.files[0]);
    fetch(imgbb_api, {
        method: "POST",
        body: form
    }).then(e => e.json()).then(function (e) {
        url = e.data.display_url;
        console.log(e.data.display_url);
        console.log(url);
    })
});



