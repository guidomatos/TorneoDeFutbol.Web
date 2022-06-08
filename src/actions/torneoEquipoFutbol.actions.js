import * as services from "../services/torneoEquipoFutbol.service";


const obtenerEquipoPorTorneo = async (torneoId) => {

    const response = await services.ObtenerEquipoPorTorneo(torneoId);

    return {
        payload: response
    }
}

export const torneoEquipoFutbolActions = {

    obtenerEquipoPorTorneo

}