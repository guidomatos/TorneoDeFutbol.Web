import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "../hooks/useForm";

export const EquipoList = (props) => {

    const { values, setvalues, handleInputChange } = useForm({



    });


    const { data } = props;


    const cargarEquipo = () => {


        return (data?.map((item, index) => {
            return (
                <option key={index} value={item.equipoId}>{item.nombre}</option>
            )
        })
        );

    }

    return (

        <Form.Control as="select" name="EquipoId" onChange={handleInputChange} >
            {cargarEquipo()}
        </Form.Control>

    )
}