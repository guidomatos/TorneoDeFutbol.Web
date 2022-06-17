import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { torneoFutbolActions } from "../../actions/torneoFutbol.actions";
import { torneoEquipoFutbolActions } from "../../actions/torneoEquipoFutbol.actions";
import { torneoProgramacionFutbolActions } from "../../actions/torneoProgramacionFutbol.actions";

import { EquipoList } from "../../components/EquipoList";
import { TableRB } from '../../components/controls/TableRB' ;

export const CrearTorneoProgPage = () => {


    const { values: formTorneo, setvalues: setFormTorneo, handleInputChange } = useForm({
        
        formTorneoId: 0,
        formTorneoProgramacionId: 0,
        formEquipoId1: 0,
        formEquipoId2: 0

    });

    const [listaTorneo, setlistaTorneo] = useState([]);
    const [listaEquipo, setlistaEquipo] = useState([]);
    const [listaProgramacion, setlistaProgramacion] = useState([]) ;

    const [listaEnfrentamiento, setlistaEnfrentamiento] = useState([]) ;

    useEffect(() => {


        const cargaInicial = async () => {

            const response = await torneoFutbolActions.obtenerTorneoFutbol();

            if (response?.payload && response?.payload.length >= 0) {
                setlistaTorneo(response?.payload);
            }

        }

        cargaInicial();

    }, [])



    const seleccionarTorneo = async (e) => {

        const torneoId = e.target.value;

        const responseEquipo = await torneoEquipoFutbolActions.obtenerEquipoPorTorneo(parseInt(torneoId));

        setlistaEquipo(responseEquipo.payload);

        const responseProgramacion = await torneoProgramacionFutbolActions.obtenerProgramacionPorTorneo(parseInt(torneoId));

        setlistaProgramacion(responseProgramacion.payload);

        setFormTorneo({
            ...formTorneo,
            formTorneoId: torneoId 
        });

    }

    const seleccionarFecha = async(e) => {

        const torneoProgramacionId = e.target.value;
        
        setFormTorneo({
            ...formTorneo,
            formTorneoProgramacionId: torneoProgramacionId 
        });

        setlistaEnfrentamiento([]);

    }

    const cargarTorneo = () => {

        return (listaTorneo?.map((item, index) => {
            return (
                <option key={index} value={item.torneoId}>{item.nombre}</option>
            )
        })

        );

    }

    const cargarProgramacion = () => {


        return (listaProgramacion?.map((item, index) => {
            return (
                <option key={index} value={item.torneoProgramacionId}>{item.numeroFecha}</option>
            )
        })
        );

    }

    const obtenerDataForTable = () => {

        return {
            Equipo1: parseInt(formTorneo.formEquipoId1),
            DescEquipo1: listaEquipo.find( x => x.equipoId == formTorneo.formEquipoId1)?.nombre,
            Equipo2: parseInt(formTorneo.formEquipoId2),
            DescEquipo2: listaEquipo.find( x => x.equipoId == formTorneo.formEquipoId2)?.nombre,
        }

    }

    const agregarEnfrentamiento = () => {


        const dataEnfrentamiento = obtenerDataForTable() ;

        setlistaEnfrentamiento(prevArray => [...prevArray, dataEnfrentamiento])

    }

    const grabarEnfrentamiento = async () => {

        if (formTorneo.formTorneoId == 0) {
            alert('Seleccione un Torneo');
            return false;
        }

        if (formTorneo.formTorneoProgramacionId == 0) {
            alert('Seleccione una fecha');
            return false;
        }

        if (listaEnfrentamiento.length == 0) {

            alert('Al menos agregue un enfrentamiento');
            return false;

        }

        const programacionDetalle = listaEnfrentamiento.map( m => {
            return {
                Equipo1: m.Equipo1,
                Equipo2: m.Equipo2,
                TorneoProgramacion: {
                    TorneoProgramacionId:parseInt(formTorneo.formTorneoProgramacionId)
                }
            }
        });
        
        const requestProgramarFecha = {
            programacionDetalle : programacionDetalle
        }

        const response = await torneoProgramacionFutbolActions.programarFecha(requestProgramarFecha);    

        if (response > 0) {
            alert('se programo la fecha correctamente');
        } else {
            alert('error al programar la fecha') ;
        }

    }
    

    return (
        <Form>

            <Form.Group as={Row} controlId="formTorneoId">
                <Form.Label column sm="2">
                    Torneo
                </Form.Label>
                <Col sm="4">
                    <Form.Control as="select" name="formTorneoId" onChange={seleccionarTorneo} >
                        <option value={0}>-- Seleccione --</option>
                        {cargarTorneo()}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formTorneoProgramacionId">
                <Form.Label column sm="2">
                    Fecha
                </Form.Label>
                <Col sm="4">
                    <Form.Control as="select" name="formTorneoProgramacionId" onChange={seleccionarFecha} >
                        <option value={0}>-- Seleccione --</option>
                        {cargarProgramacion()}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEquipoId1">
                <Form.Label column sm="2">
                    Equipo 1
                </Form.Label>
                <Col sm="4">
                    
                    <EquipoList name="formEquipoId1" data={listaEquipo} handleInputChange={handleInputChange}></EquipoList>

                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEquipoId2">
                <Form.Label column sm="2">
                    Equipo 2
                </Form.Label>
                <Col sm="4">

                    <EquipoList name="formEquipoId2" data={listaEquipo} handleInputChange={handleInputChange}></EquipoList>

                </Col>
            </Form.Group>

            <Button variant="info" type="button" onClick={agregarEnfrentamiento} >
                Agregar
            </Button>

            <Button variant="primary" type="button" onClick={grabarEnfrentamiento} >
                Grabar
            </Button>

            <TableRB dataEnfrentamiento ={listaEnfrentamiento || []}></TableRB>

        </Form>
    )
}