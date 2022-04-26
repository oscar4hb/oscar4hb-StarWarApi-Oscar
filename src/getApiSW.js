 
const axios = require('axios');
  

const getSWApi = async (event) => {
    const { id } = event.pathParameters;

    try {
        let url = `https://swapi.py4e.com/api/people/${id}`;
        const val = await axios.get( url );
 
        const person = val.data;

        const personaje = {
 
            nombre : person.name,
            altura : person.height,
            peso : person.mass,
            cabello_color : person.hair_color,
            piel_color : person.skin_color,
            ojo_color : person.eye_color,
            cumple_year : person.birth_year,
            genero : person.gender,
            planeraNatal : person.homeworld,
            pelicula : person.films,
            speciales : person.species,
            vehiculos : person.vehicles,
            navestelar : person.starships,
            creado : person.created,
            editado : person.edited,
            url : person.url,
        }
  
        
        return {
            status: 200,
            body: {
                personaje,
              
            },
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getSWApi,
};
