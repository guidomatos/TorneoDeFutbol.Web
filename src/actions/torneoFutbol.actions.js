import * as services from "../services/torneoFutbol.service";

const crearTorneoFutbol = async (param) => {

    const response = await services.CrearTorneo(param);

    return {
        payload: response
    }

}

const obtenerTorneoFutbol = async () => {

    const response = await services.ObtenerTorneos();

    return {
        payload: response
    }
}

export const torneoFutbolActions = {

    crearTorneoFutbol,
    obtenerTorneoFutbol

}