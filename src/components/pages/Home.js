import React from 'react'
import Header from '../common/Header'
import Form from '../forms/Form'
import TodoTabs from '../layout/TodoTabs'
import { Alert, useMediaQuery } from '@mui/material';

function Home() {
  const isScreenInRange = useMediaQuery('(max-width: 425px)');
  return (
    <>
    <Header Heading="MY TASKS" mobile={isScreenInRange}/>
    <Form mobile={isScreenInRange}/>
    <TodoTabs/>
    </>
  )
}

export default Home