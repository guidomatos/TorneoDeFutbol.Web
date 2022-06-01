import fetchAPI from "../helpers/api";

export const CrearEquipo = async (params) => {

    return fetchAPI("POST", "Equipo", params);

}