import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';

import './NewProcesses.css';

function NewTasks(props) {
    const { listOfProcesses } = props;
    
    return (
        <>
            <h1>Nuevo</h1>
            <List>
                {listOfProcesses.map((item, index) => (
                    <ListItem key={`pending~${index}`}>
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

export default NewTasks;