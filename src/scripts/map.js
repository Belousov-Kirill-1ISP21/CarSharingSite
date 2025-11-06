document.querySelector('.OfficesBlockSelect').addEventListener('change', function() {
    const city = this.value;
    const mapImage = document.querySelector('.mapImage');
    
    const imageMap = {
        'Томск': '../assets/Offices/Tomsk.png',
        'Москва': '../assets/Offices/Moskow.png', 
        'Красноярск': '../assets/Offices/Kras.png',
        'Новосибирск': '../assets/Offices/Novos.png',
        'Санкт-Петербург': '../assets/Offices/Piter.png',
    };
    
    mapImage.src = imageMap[city];
});