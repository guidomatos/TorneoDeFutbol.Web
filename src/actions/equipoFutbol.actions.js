import * as services from "../services/equipoFutbol.service";

const crearEquipoFutbol = async (param) => {

    const response = await services.CrearEquipo(param);

    return {
        payload: response
    }

}

export const equipoFutbolActions = {

    crearEquipoFutbol

}