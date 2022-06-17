import React from "react";
import { Form } from "react-bootstrap";

export const EquipoList = (props) => {

    const { data, name, handleInputChange } = props;


    const cargarEquipo = () => {


        return (data?.map((item, index) => {
            return (
                <option key={index} value={item.equipoId}>{item.nombre}</option>
            )
        })
        );

    }

    return (

        <Form.Control as="select" name={name} onChange={handleInputChange} >
            <option value={0}>-- Seleccione --</option>
            {cargarEquipo()}
        </Form.Control>

    )
}