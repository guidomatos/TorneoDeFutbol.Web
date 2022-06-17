import fetchAPI from "../helpers/api";

export const ObtenerProgramacionPorTorneo = async (torneoId) => {

    return fetchAPI("GET", `TorneoProgramacion/${torneoId}`);

}

export const ProgramarFecha = async (params) => {

    return fetchAPI("POST", "TorneoProgramacion", params);

}