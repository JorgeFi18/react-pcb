import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';

function ReadyProcesses(props) {
    const { listOfProcesses, movePendingToReady, newProcesses } = props;

    useEffect(() => {
        if(listOfProcesses.length < 3) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            movePendingToReady();
            console.log('searching for processes');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listOfProcesses, newProcesses]);

    return (
        <>
            <h1>Listo</h1>
            <List>
                {listOfProcesses.map((item, index) => (
                    <ListItem key={`ready~${index}`}>
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

export default ReadyProcesses;