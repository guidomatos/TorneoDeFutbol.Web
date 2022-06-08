import React, { useState, useEffect } from "react";

import { equipoFutbolActions } from "../../actions/equipoFutbol.actions";

import { Form, Row, Col, Button } from "react-bootstrap";




import { useForm } from "../../hooks/useForm";
import { torneoFutbolActions } from "../../actions/torneoFutbol.actions";
import { torneoEquipoFutbolActions } from "../../actions/torneoEquipoFutbol.actions";

import { EquipoList } from "../../components/EquipoList";


export const CrearTorneoProgPage = () => {


    const { values, setvalues, handleInputChange } = useForm({

        nombre: "",
        codigoPais: ""

    });

    const { nombre, codigoPais } = values;

    const [listaTorneo, setlistaTorneo] = useState([]);
    const [listaEquipo, setlistaEquipo] = useState([]);

    useEffect(() => {


        const cargaInicial = async () => {

            const response = await torneoFutbolActions.obtenerTorneoFutbol();

            if (response?.payload && response?.payload.length >= 0) {
                setlistaTorneo(response?.payload);
            }

        }

        cargaInicial();

    }, [])


    useEffect(() => {

        console.log('listaTorneo', listaTorneo);

    }, [listaTorneo])


    const Grabar = async () => {

        // const requestGrabar = {
        //     Nombre: nombre,
        //     CodigoPais: codigoPais
        // };

        // console.log('requestGrabar', requestGrabar);
        // const responseGrabar = await equipoFutbolActions.crearEquipoFutbol(requestGrabar);
        // console.log('responseGrabar', responseGrabar);

    }

    const seleccionarTorneo = async (e) => {

        const torneoId = e.target.value;

        const responseEquipo = await torneoEquipoFutbolActions.obtenerEquipoPorTorneo(parseInt(torneoId));

        setlistaEquipo(responseEquipo.payload);

    }

    const cargarTorneo = () => {

        return (listaTorneo?.map((item, index) => {
            return (
                <option key={index} value={item.torneoId}>{item.nombre}</option>
            )
        })

        );

    }

    const cargarEquipo = () => {


        return (listaEquipo?.map((item, index) => {
            return (
                <option key={index} value={item.equipoId}>{item.nombre}</option>
            )
        })
        );

    }

    return (
        <Form>

            <Form.Group as={Row} controlId="formTorneo">
                <Form.Label column sm="2">
                    Torneo
                </Form.Label>
                <Col sm="4">
                    <Form.Control as="select" name="TorneoId" onChange={seleccionarTorneo} >
                        {cargarTorneo()}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formTorneo">
                <Form.Label column sm="2">
                    Fecha
                </Form.Label>
                <Col sm="4">
                    <Form.Control as="select" name="TorneoId" onChange={handleInputChange} >
                        <option value={1}>Fecha 1</option>
                        <option value={2}>Fecha 2</option>
                        <option value={3}>Fecha 3</option>
                        <option value={4}>Fecha 4</option>
                        <option value={5}>Fecha 5</option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEquipo">
                <Form.Label column sm="2">
                    Equipo 1
                </Form.Label>
                <Col sm="4">
                    {/* <Form.Control as="select" name="EquipoId" onChange={handleInputChange} >
                        {cargarEquipo()}
                    </Form.Control> */}

                    <EquipoList data={listaEquipo} ></EquipoList>

                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEquipo">
                <Form.Label column sm="2">
                    Equipo 2
                </Form.Label>
                <Col sm="4">
                    {/* <Form.Control as="select" name="EquipoId" onChange={handleInputChange} >
                        {cargarEquipo()}
                    </Form.Control> */}

                    <EquipoList data={listaEquipo} ></EquipoList>

                </Col>
            </Form.Group>

            <Button variant="primary" type="button" onClick={Grabar} >
                Crear
            </Button>

        </Form>
    )
}