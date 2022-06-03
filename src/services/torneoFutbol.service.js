import fetchAPI from "../helpers/api";

export const CrearTorneo = async (params) => {

    return fetchAPI("POST", "Torneo", params);

}