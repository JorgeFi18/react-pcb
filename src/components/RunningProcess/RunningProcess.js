import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';

function RunningProcess(props) {
    const { listOfProcesses, moveReadyToRun, readyProcesses } = props;
    const [ isProcessReady, setIsProcessReady ] = useState(false);

    useEffect(() => {
        if(listOfProcesses.length < 1) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setIsProcessReady(false);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            moveReadyToRun();
        } else {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            startCountingDown();
        }
    }, [listOfProcesses, readyProcesses]);

    useEffect(() => {
        if(isProcessReady){
            console.log('Terminado');
        }
    }, [isProcessReady])

    const startCountingDown = () => {
        setTimeout(() => {
            setIsProcessReady(true);
        }, listOfProcesses[0].time * 1000);
    }

    return (
        <>
            <h1>Ejecucion</h1>
            <List>
                {listOfProcesses.map((item, index) => (
                    <ListItem key={`running~${index}`}>
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={item.name}
                            secondary={item.parentName}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default RunningProcess;