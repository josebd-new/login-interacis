

const urlApiLogin = 'http://interacis.com:3333/login',
    urljson = 'message-err.json',
    urlApiToken = 'http://interacis.com:3333/api/v1/profile';

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
        .then(erro => erro.json())
        .then(error => {

            return console.log(error.respuesta);

        })

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

export {

    loginAlumno,
    errorMessage,
    tokenAlumno
}