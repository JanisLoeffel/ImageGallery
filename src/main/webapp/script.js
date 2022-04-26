function showImageFull(input) {
    // Get the modal
    var modal = document.getElementById('myModal0' + input);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg0' + input);
    var modalImg = document.getElementById("modalimg0" + input);
    var captionText = document.getElementById("caption0" + input);
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementById("close0" + input);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function addImages(imageList) {
    var counter = 0;
    $.each(imageList, function (index, image) {
        counter++
        let imageGallery = document.getElementById("imageGallery")
        let htmlDiv = document.createElement("div")
        htmlDiv.setAttribute("class", "img")

        //add modal trigger element
        let imageElement = document.createElement("img")
        imageElement.setAttribute("onload", "showImageFull(" + counter + ")")
        imageElement.setAttribute("id", "myImg0" + counter)
        imageElement.setAttribute("alt", "metadata")
        imageElement.setAttribute("src", image.path)
        htmlDiv.appendChild(imageElement)

        //add modal element
        let modalElement = document.createElement("div")
        modalElement.setAttribute("id", "myModal0" + counter)
        modalElement.setAttribute("class", "modal")
        let spanElement = document.createElement("span")
        spanElement.setAttribute("class", "close")
        spanElement.setAttribute("id", "close0" + counter)
        spanElement.innerHTML = "×"
        let imgElement = document.createElement("img")
        imgElement.setAttribute("class", "modal-content")
        imgElement.setAttribute("id", "modalimg0" + counter)
        let divElement = document.createElement("div")
        divElement.setAttribute("class", "caption")
        divElement.setAttribute("id", "caption0" + counter)


        modalElement.appendChild(spanElement)
        modalElement.appendChild(imgElement)
        modalElement.appendChild(divElement)
        htmlDiv.appendChild(modalElement)
        imageGallery.appendChild(htmlDiv)
    });
}

function loadImages() {
    var waiting = $.Deferred();
    $
        .ajax({
            url: "./images",
            dataType: "json",
            type: "GET"
        })
        .done(addImages)
        .fail(function (xhr, status, errorThrown) {
            if (xhr.status == 404) {
                showMessage("error","Kein Image gefunden");
            } else {
                window.location.href = "./";
            }
        })

    return waiting;
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
