import * as services from "../services/torneoFutbol.service";

const crearTorneoFutbol = async (param) => {

    const response = await services.CrearTorneo(param);

    return {
        payload: response
    }

}

export const torneoFutbolActions = {

    crearTorneoFutbol

}