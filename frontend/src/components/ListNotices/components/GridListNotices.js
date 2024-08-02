import React from "react";
import { Avatar, IconButton, List, ListItem, ListItemText, ListItemAvatar } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';

export const GridListNotices = ({ notices }) => {

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <List dense={dense}>

        </List>
    )
}
