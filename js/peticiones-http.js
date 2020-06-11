

const urlApiLogin = 'http://interacis.com:3333/login',
    urljson = 'message-err.json',
    urlApiToken = 'http://interacis.com:3333/api/v1/profile',
    urlActividades = 'http://interacis.com:3333/api/v1/activities/current',
    urlResolucion = 'http://interacis.com:3333/api/v1/resolution/:activityId';

const loginAlumno = async (alias, code) => {

    try {

        const respuesta = await fetch(urlApiLogin, {

            method: 'POST',
            body: JSON.stringify(alias, code),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!respuesta.ok) throw await respuesta.json();

        return await respuesta.json();

    } catch (err) {

        throw err;
    }
}

const errorMessage = (message) => {

    fetch(urljson)
        .then(respuesta => respuesta.json())
        .then(error => {

            return console.log(error.respuesta);

        });

}
const tokenAlumno = async (token) => {

    try {

        const respuesta = await fetch(urlApiToken, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${token}`
            }
        });

        if (!respuesta.ok) throw await respuesta.json();

        return await respuesta.json();

    } catch (err) {

        throw err;
    }
}
const actividadesAlumno = async (token) => {

    try {

        const respuesta = await fetch(urlActividades, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${token}`
            }
        });

        if (!respuesta.ok) throw await respuesta.json();

        return await respuesta.json();

    } catch (err) {

        throw err;
    }
}

const resolucionActividades = async (token) => {

    try {

        const respuesta = await fetch(urlResolucion, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${token}`
            }
        });

        if (!respuesta.ok) throw await respuesta.json();

        return await respuesta.json();

    } catch (err) {

        throw err;
    }
}



export {

    loginAlumno,
    errorMessage,
    tokenAlumno,
    actividadesAlumno,
    resolucionActividades

}