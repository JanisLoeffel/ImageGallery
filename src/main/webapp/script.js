function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image')
                .attr('src', e.target.result)
                .width(300)
                .height();
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function submitFunction() {
    document.getElementById("uploadText").innerHTML = "Your file has been uploaded";

}
