import React from "react";
import { Avatar, IconButton, List, ListItem, ListItemText, ListItemAvatar, Box, Typography, Stack, Card } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';

export const GridListNotices = ({ notices }) => {

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <List dense={dense}>
            {
                notices.map( notice => (
                    <ListItem key={notice.id}>
                        <Box component={"div"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                            <Box component={"div"}>
                                <img style={{ width: "20rem", height: "10rem" }} src={ notice.img } alt={ notice.title } />
                            </Box>
                            <Box p={3} component={"div"}>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={1}>
                                    <Typography fontWeight={"bold"} variant="h5" component="h2">{notice.title}</Typography>
                                    <Typography variant="author" component="cite">{notice.author}</Typography>
                                </Box>
                                <Typography mb={2} variant="body2" component="p">{notice.body}</Typography>
                                <Typography textAlign={"right"} variant="caption" component="p">{notice.date}</Typography>
                            </Box>
                            <Box p={2} component="div" display={"flex"}>
                                <IconButton><DeleteIcon></DeleteIcon></IconButton>
                                <IconButton><EditIcon></EditIcon></IconButton>
                            </Box>
                        </Box>
                    </ListItem>
                ))
            }
        </List>
    )
}
