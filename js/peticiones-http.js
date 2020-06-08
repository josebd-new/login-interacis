

const urlApi = 'http://interacis.com:3333/login';


const loginAlumno = async (alias, code) => {

    try {

        const respuesta = await fetch(urlApi, {

            method: 'POST',
            body: JSON.stringify(alias, code),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!respuesta.ok) throw respuesta.status;

        return await respuesta.json();

    } catch (err) {

        throw err;
    }
}





export {
    loginAlumno
}