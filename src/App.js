import React, { useState } from 'react';
import { Button, Card, CardContent } from '@material-ui/core';

import './App.css';

import AddTask from './components/AddTask';
import AddTaskForm from './components/AddTaskForm';
import NewProcesses from './components/NewProcesses';
import ReadyProcesses from './components/ReadyProcesses';
import RunningProcess from './components/RunningProcess';

function App() {
  const [ isOpenModal, setIsOpenModal ] = useState(false);
  const [ processList, setProcessList ] = useState([]);
  const [ readyProcessList, setReadyProcessList ] = useState([]);
  const [ runningProcessList, setRunningProcessList ] = useState([]);

  const movePendingToReady = () => {
    if(!processList.length)
      return
    
    setReadyProcessList([
      ...readyProcessList,
      processList[0]
    ]);

    console.log(readyProcessList);

    processList.splice(0, 1);
    setProcessList(processList);
  }

  const moveReadyToRun = () => {
    if(!readyProcessList.length)
      return
    
    setRunningProcessList([
        readyProcessList[0]
    ]);

    readyProcessList.splice(0, 1);
    setReadyProcessList(processList);
  }
  
  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const addMoreProcess = (list) => {
    setProcessList([
      ...processList,
      ...list
    ])
    closeModal();
  }

  return (
    <div className="App">
      <h1 style={{color: 'white'}}>Process Control Block</h1>
      <Button variant="contained" color="primary" onClick={openModal}>Agregar tarea</Button>
      <AddTask
        isOpenModal={isOpenModal}
        closeModal={closeModal}
      >
          <AddTaskForm addMoreProcess={addMoreProcess} />
      </AddTask>
      <div className="wrapper">
        <Card>
          <CardContent>
            <NewProcesses listOfProcesses={processList} />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <ReadyProcesses
              newProcesses={processList}
              listOfProcesses={readyProcessList}
              movePendingToReady={movePendingToReady}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <RunningProcess
              readyProcesses={readyProcessList}
              listOfProcesses={runningProcessList}
              moveReadyToRun={moveReadyToRun}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
