import React, { useState } from 'react'
import { MRT_SelectCheckbox, MaterialReactTable } from 'material-react-table';
import { Backdrop, Box, Button, CircularProgress, MenuItem } from '@mui/material';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../services/Api';
import DeleteIcon from '@mui/icons-material/Delete';

function Table(props) {
    const columns=[
      {
        accessorKey: "Completed",
        header: "Status",
        size: 5,
        editSelectOptions: ["INCOMPLETE","COMPLETE"],
        editVariant: 'select',
        Cell: ({ cell }) => (
          <span
            style={{
              backgroundColor: cell.getValue() === "COMPLETE" ? "#66bb6a" : "#d32f2f",
              padding: "0.5rem",
              color: "white", // Adjust text color for better visibility
            }}
          >
            {cell.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "Task",
        header: "Tasks",
        size: 5,
      },
      {
        accessorKey: "priority",
        header: "Priority",
        editSelectOptions: ["low","medium","high"],
        editVariant: 'select',
        size: 5,
      },
      {
        accessorKey: "Date",
        header: "Date",
        size: 5,
      },
    ]
    const [updateTodo, { isLoading, isError }] = useUpdateTodoMutation();
    const handleUpdate = async (event) => {
      const id= event.row.original.id;
      const updatedTodo= event.values;
      try {
        const result = await updateTodo({id,updatedTodo});
  
        // Handle the result as needed
        console.log(result);
      } catch (error) {
        // Handle the error
        console.error('Error updating todo:', error);
      }
    };

    const [deleteTodo] = useDeleteTodoMutation();
    const handleDelete = async (event,closeMenu) => {
      
      const id= event.original.id;
      console.log(id);
      try {
        const result = await deleteTodo(id);
        closeMenu();
      } catch (error) {
        // Handle the error
        console.error('Error updating todo:', error);
        closeMenu();
      }
    };

    // const handleComplete = (event) => {
    //   console.log("COMPLETED EVENTS ARE",event);
    //   // Perform actions with the selectedRows
    // };
  

  return (
    <>
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <MaterialReactTable
        columns={columns}
        data={props.data} // Pass the entire data array
        enableRowActions positionActionsColumn="last" 
        enableTopToolbar={false}
        enableEditing
        onEditingRowSave={handleUpdate}
        renderRowActionMenuItems={({closeMenu,row}) => 
        [ 
        <MenuItem key={2} onClick={() => handleDelete(row,closeMenu)}>
          <DeleteIcon />Remove
        </MenuItem>]} 
    
        muiBottomToolbarProps={{
          sx:(theme)=>({
            height:"1px",
          })
        }}

        muiTableHeadCellProps={{
          sx: (theme) => ({
            fontSize:'1rem',
            fontWeight:100
          }),
        }}
        muiTableBodyCellProps={{
          sx: (theme) => ({
            fontSize: '0.9rem' ,
          }),
        }}
        muiTableProps={{
          sx: (theme) => ({
            border: '1px solid rgba(224,224,224,1)',
          }),
        }}
        muiTablePaperProps={{
          sx: {
            m: 'auto',
            maxWidth: '800px',
            marginBottom:'30px'
          }
        }}
      />
      </>
  )
}

export default Table