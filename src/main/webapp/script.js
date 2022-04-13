function showImageFull(input) {
    // Get the modal
    var modal = document.getElementById('myModal0' + input);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg0' + input);
    var modalImg = document.getElementById("modalimg0" + input);
    var captionText = document.getElementById("caption0" + input);
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementById("close0" + input)[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

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
