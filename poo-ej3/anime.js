export default class Anime{

    constructor(){}

    async obtenerCatalogo(){

        const datos= await fetch("https://api.jikan.moe/v3/search/anime?q=dragon%20ball")
        //especificamos que los datos estan llegando en formato JSON    
        const datos_convertidos = await datos.json()
        const datos_definitivos = datos_convertidos.results

        let array_catalogo=[]
        datos_definitivos.forEach(Element => {
            let columna =`
            <div class="col-4 mt-3">
                <div class="card mb-3 border-secondary bg-secondary text-white" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${Element.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${Element.title}</h5>
                  <p class="card-text">${Element.synopsis}</p>
                  <p class="card-text"><small class="text-white">Episodio: ${Element.episodes}</small></p>
                </div>
              </div>
            </div>
          </div>
            </div>
            `
            array_catalogo.push(columna)
        });

        const catalogo=document.getElementById("catalogo").innerHTML =array_catalogo.join('')
    }
}