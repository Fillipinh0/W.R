document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cookiesAceitos') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
        const mapContainer = document.getElementById('map-container');
        if (mapContainer) {
            mapContainer.style.display = 'contents';
            mapContainer.innerHTML = `
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240096.92212872958!2d-43.96405015!3d-19.902716299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1744772554528!5m2!1spt-BR!2sbr"
                    width="100%" 
                    height="80%" 
                    style="border:1;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            `;
        }
    }
});

function aceitarCookies() {
    localStorage.setItem('cookiesAceitos', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        mapContainer.style.display = 'contents';
        mapContainer.innerHTML = `
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240096.92212872958!2d-43.96405015!3d-19.902716299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1744772554528!5m2!1spt-BR!2sbr"
                width="100%" 
                height="80%" 
                style="border:1;" 
                allowfullscreen="" 
                loading="lazy">
            </iframe>
        `;
    }
}