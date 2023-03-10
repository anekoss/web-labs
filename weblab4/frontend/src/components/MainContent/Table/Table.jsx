import React, {useEffect} from 'react';
import styles from "./Table.module.css"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {colors} from "@mui/material";

const Table = (props) => {
    useEffect(()=>{
        props.getDataOfEntries()

    },[])
    const columns = [
        {field: 'x', header: 'X'},
        {field: 'y', header: 'Y'},
        {field: 'r', header: 'R'},
        {field: 'dateTime', header: 'Время'},
    ];
    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header}/>;
    });
    const entryToText = (rowData) => {

        props.entries.map(entry =>{
            let x = new Date(entry.dateTime)
            console.log(x.toDateString())
        })
        return <span>{rowData.entry?"Да":"Нет"}</span>;
    }
    const formatEntriesDate = (entries) => {
        entries.map(entry => {
            let x = new Date(entry.dateTime)
            entry.dateTime = x.toDateString()
            console.log(x.toDateString())
        })
        return entries
    }
    return (
        <div>
            <div className={styles.tableContainer}>
                <DataTable   value={formatEntriesDate(props.entries)} scrollable scrollHeight="400px" responsiveLayout="scroll">
                    {dynamicColumns }
                    <Column   key="entry" field="entry" body={entryToText} header="Результат" />
                </DataTable>
            </div>
        </div>

    );
}

export default Table;