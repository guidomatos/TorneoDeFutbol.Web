import React from "react";

import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { torneoFutbolActions } from "../../actions/torneoFutbol.actions";

export const CrearTorneoPage = () => {


    const { values, setvalues, handleInputChange } = useForm({

        tipoTorneoId: 0,
        nombre: "",
        fechaInicio: "",
        fechaFin: "",
        anio: 2022

    });

    const { tipoTorneoId, nombre, fechaInicio, fechaFin, anio } = values;


    const Grabar = async () => {

        const requestGrabar = {
            TipoTorneoId: tipoTorneoId,
            Nombre: nombre,
            Anio: anio
        };

        if (fechaInicio !== "") requestGrabar.FechaInicio = fechaInicio;
        if (fechaFin !== "") requestGrabar.FechaFin = fechaFin;

        console.log('requestGrabar', requestGrabar);

        const responseGrabar = await torneoFutbolActions.crearTorneoFutbol(requestGrabar);

        console.log('responseGrabar', responseGrabar);

    }

    const seleccionarTorneo = (e) => {

        handleInputChange(e);

        // algo mas


    }

    return (
        <Form>

            <Form.Group as={Row} controlId="formTipoTorneo">
                <Form.Label column sm="2">
                    Tipo de Torneo
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="select" name="tipoTorneoId" onChange={seleccionarTorneo} >
                        <option value={1}>Departamental</option>
                        <option value={2}>Distrital</option>
                        <option value={3}>Internacional</option>
                        <option value={4}>Nacional</option>
                        <option value={5}>Provincial</option>
                        <option value={6}>Regional</option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formNombre">
                <Form.Label column sm="2">
                    Nombre
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" size="lg" name="nombre" placeholder="Nombre" onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formFechaInicio">
                <Form.Label column sm="2">
                    Fecha de Inicio
                </Form.Label>
                <Col sm="10">
                    <input type="date" name="fechaInicio" onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formFechaFin">
                <Form.Label column sm="2">
                    Fecha de Fin
                </Form.Label>
                <Col sm="10">
                    <input type="date" name="fechaFin" onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formAnio">
                <Form.Label column sm="2">
                    Año
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="select" name="anio" onChange={handleInputChange}>
                        <option value={2022}>2022</option>
                        <option value={2023}>2023</option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Button variant="primary" type="button" onClick={Grabar} >
                Crear
            </Button>

        </Form>
    )
}