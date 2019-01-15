function endvideo() {
    
    document.getElementById('questions').style.display = 'block';
    document.getElementById('film').style.display = 'none';
    document.getElementById('igen').style.display = 'block';
    document.getElementById('paus').style.display = 'none';
}

function spelavideo() {
    document.getElementById('film').style.display = 'block';
    document.getElementById('film').play();
    document.getElementById('starta').style.display = 'none';
    document.getElementById('paus').style.display = 'block';
    document.getElementById('startaigen').style.display = 'none';
}
function seomvideo() {
    document.getElementById('film').style.display = 'block';
    document.getElementById('film').play();
    document.getElementById('igen').style.display = 'none';
    document.getElementById('questions').style.display = 'none';
    document.getElementById('paus').style.display = 'block';
}
function pausavideo() {
    document.getElementById('film').pause();
    document.getElementById('startaigen').style.display = 'block';
    document.getElementById('paus').style.display = 'none';
}
