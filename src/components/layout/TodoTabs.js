import React, { useState, useEffect } from 'react';
import { useGetTodosQuery } from '../../services/Api';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListIcon from '@mui/icons-material/List';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Table from '../common/Table';

function TodoTabs() {
  const { data: todos, isLoading, isError } = useGetTodosQuery();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  
  const TabColumns=[
    { title: 'To Do', icon: <PendingActionsIcon /> },
    { title: 'Done', icon: <TaskAltIcon /> },
    { title: 'All', icon: <ListIcon /> },
  ]

  useEffect(() => {
    const DataColumns=[
      { title: 'To Do', items: todos?todos.filter(item => item.Completed === 'INCOMPLETE'):[]},
      { title: 'Done', items: todos?todos.filter(item => item.Completed === 'COMPLETE'):[]},
      { title: 'All', items: todos},
    ]
    setTableData(DataColumns[selectedTabIndex].items)

  }, [todos,selectedTabIndex])

  const [TableData, setTableData] = useState([]);

  const handleChange = (event, newValue) => {
    setSelectedTabIndex(newValue);
  };

  if (isError) {
    return <div>Error fetching data</div>;
  }
  console.log("TABLE DATA",TableData)

  return (
    <>
      <Tabs onChange={handleChange} value={selectedTabIndex} variant="fullWidth" sx={{marginTop:'10px',marginBottom:'20px'}}>
          {TabColumns.map((column, index) => (
            <Tab key={index} value={index} icon={column.icon} label={column.title} />
          ))}
      </Tabs>
      {!isLoading && (<>
        
        <Table data={TableData}/>
        </>
      )}
    </>
  );
}

export default TodoTabs;
