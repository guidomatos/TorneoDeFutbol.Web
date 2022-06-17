import * as services from "../services/torneoProgramacionFutbol.service";


const obtenerProgramacionPorTorneo = async (torneoId) => {

    const response = await services.ObtenerProgramacionPorTorneo(torneoId);

    return {
        payload: response
    }
}

const programarFecha = async (param) => {

    const response = await services.ProgramarFecha(param);

    return {
        payload: response
    }

}

export const torneoProgramacionFutbolActions = {

    obtenerProgramacionPorTorneo,
    programarFecha

}