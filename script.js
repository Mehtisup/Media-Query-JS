<script>
function viewFunction(z) {
    if (z.matches) {
        document.getElementById("body").style.backgroundColor = "yellow";
    } else {
        document.getElementById("body").style.backgroundColor = "white";
    }
}

var z = window.matchMedia("(max-width:720px)");

viewFunction(z);

z.addListener(viewFunction);
</script>
