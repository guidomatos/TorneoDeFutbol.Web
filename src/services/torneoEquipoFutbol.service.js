import fetchAPI from "../helpers/api";

export const ObtenerEquipoPorTorneo = async (torneoId) => {

    return fetchAPI("GET", `TorneoEquipo/${torneoId}`);

}