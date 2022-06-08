import fetchAPI from "../helpers/api";

export const CrearTorneo = async (params) => {

    return fetchAPI("POST", "Torneo", params);

}

export const ObtenerTorneos = async () => {

    return fetchAPI("GET", "Torneo");

}