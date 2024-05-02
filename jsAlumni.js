document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    var formData = new FormData(this);
    var cardData = {};
    formData.forEach(function(value, key){
        cardData[key] = value;
    });

    var expirationDate = calculateExpirationDate();
    var cardImage = generateCardImage(cardData);

    // Aquí puedes hacer lo que necesites con expirationDate y cardImage
    console.log(cardData);
    alert('¡Formulario enviado con éxito!');
});

function calculateExpirationDate() {
    var today = new Date();
    var expiration = new Date(today.getFullYear() + 4, today.getMonth(), today.getDate());
    return expiration;
}

function generateCardImage(data) {
    var html = '<html><body>';
    html += '<h1>' + data.nombre + '</h1>'; // Agrega más campos según lo necesites
    // Agrega estilos CSS según tus preferencias
    html += '</body></html>';
  
    var blob = new Blob([html], {type: 'text/html'});
    var url = URL.createObjectURL(blob);
    
    var img = new Image();
    img.src = url;
    
    document.body.appendChild(img);
}
