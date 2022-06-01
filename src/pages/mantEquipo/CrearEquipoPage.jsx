import React from "react";

import { equipoFutbolActions } from "../../actions/equipoFutbol.actions";

import { Form, Row, Col, Button } from "react-bootstrap";


import { useForm } from "../../hooks/useForm";

export const CrearEquipoPage = () => {


    const { values, setvalues, handleInputChange } = useForm({

        nombre: "",
        codigoPais: ""

    });

    const { nombre, codigoPais } = values;


    const Grabar = async () => {

        const requestGrabar = {
            Nombre: nombre,
            CodigoPais: codigoPais
        };

        console.log('requestGrabar', requestGrabar);
        const responseGrabar = await equipoFutbolActions.crearEquipoFutbol(requestGrabar);
        console.log('responseGrabar', responseGrabar);

    }

    return (
        <Form>

            <Form.Group as={Row} controlId="formNombre">
                <Form.Label column sm="2">
                    Nombre
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" size="lg" name="nombre" placeholder="Nombre" onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPais">
                <Form.Label column sm="2">
                    Pais
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" size="lg" name="codigoPais" placeholder="Pais" onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Button variant="primary" type="button" onClick={Grabar} >
                Crear
            </Button>

        </Form>
    )
}