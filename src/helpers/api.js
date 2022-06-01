const API_URL = "http://localhost:5008/api";

const fetchAPI = async (method, path, body) => {

    return fetch(`${API_URL}/${path}`, {

        headers: {
            "Content-Type": "application/json"
        },
        method: method,
        body: JSON.stringify(body)

    }).then((response) => response.json());

    ;

}

export default fetchAPI;