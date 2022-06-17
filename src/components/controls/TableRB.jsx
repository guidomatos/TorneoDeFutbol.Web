import React from "react";
import Table from 'react-bootstrap/Table';

export const TableRB = (props) => {

    const { dataEnfrentamiento } = props ;

    const GenerarFila = () => {

        return (dataEnfrentamiento?.map((item, index) => {
            return (
                <tr key={(index+1)}>
                    <td>{(index+1)}</td>
                    <td>{item.Equipo1}</td>
                    <td>{item.DescEquipo1}</td>
                    <td>{item.Equipo2}</td>
                    <td>{item.DescEquipo2}</td>
                </tr>
            )
        })
        );

    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Equipo 1 (ID)</th>
                    <th>Equipo 1</th>
                    <th>Equipo 2 (ID)</th>
                    <th>Equipo 2</th>
                </tr>
            </thead>
            <tbody>
                {GenerarFila()}
            </tbody>
        </Table>

    )
   
 }