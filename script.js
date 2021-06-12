function _uriEncode() {
    var Encoded = document.getElementById('textarea-input').value
    document.getElementById('textarea-output').value = encodeURI(Encoded)
}

function _uriDecode() {
    var Decoded = document.getElementById('textarea-output').value
    document.getElementById('textarea-input').value = decodeURI(Decoded)
}


function copy(field) {
    var txt = document.getElementById(field)

    txt.select();
    txt.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
}
