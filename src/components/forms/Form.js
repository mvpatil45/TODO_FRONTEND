// components/forms/TaskForm.js
import React from 'react';
import { useFormik } from 'formik';
import { useCreateTodoMutation } from '../../services/Api';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Backdrop, CircularProgress } from '@mui/material';

const priorities = ['Select Priority', 'low', 'medium', 'high'];

const Form = (props) => {
  const [createTodo, { isLoading, error }] = useCreateTodoMutation();

  if(error){
    <h1>Server Error</h1>
  }
  const formik = useFormik({
    initialValues: {
      Task: '',
      priority: '',
      Date: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.Task.trim()) {
        errors.Task = 'Task is required';
      }

      if (!values.priority) {
        errors.priority = 'Priority is required';
      }

      if (!values.Date) {
        errors.Date = 'Date is required';
      }

      return errors;
    },
    onSubmit: async (values,{resetForm}) => {
      try {
        await createTodo(values);
        resetForm();
      } catch (error) {
        alert('Failed to create Todo');
        resetForm();
      }

      
    },
  });

  return (
    <>
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <form onSubmit={formik.handleSubmit}>
      <Stack direction={"column"} mt={2} justifyContent={'center'}alignItems={'center'} spacing={2}>
        <TextField
          label="Task"
          id="Task"
          name="Task"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Task}
          sx={{ width: '80%'}}
          margin="normal"
          error={formik.touched.Task && Boolean(formik.errors.Task)}
          helperText={formik.touched.Task && formik.errors.Task}
        />
        <TextField
          select
          label="Priority"
          id="priority"
          name="priority"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.priority}
          sx={{ width: '80%' }}
          margin="normal"
          error={formik.touched.priority && Boolean(formik.errors.priority)}
          helperText={formik.touched.priority && formik.errors.priority}
        >
          {priorities.map((option) => (
            <MenuItem key={option} value={option === 'Select Priority' ? '' : option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          type="date"
          label="Date"
          id="Date"
          name="Date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Date}
          sx={{ width: '80%' }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: new Date().toISOString().split('T')[0],
          }}
          error={formik.touched.Date && Boolean(formik.errors.Date)}
          helperText={formik.touched.Date && formik.errors.Date}
        />
        <Button type="submit" variant="contained" color="primary">
            Submit
        </Button>
      </Stack>

      
    </form>
    </>
  );
};

export default Form;
