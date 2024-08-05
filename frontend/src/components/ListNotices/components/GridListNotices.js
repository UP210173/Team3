import React from "react";
import { IconButton, List, ListItem, Box, Typography, Card, CardMedia, CardContent } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const GridListNotices = ({ notices }) => {
    return (
        <List>
            {
                notices.map( notice => (
                    <Card key={notice.id} display={"flex"}>
                            <CardMedia 
                                component={"div"}
                                image={ notice.img }
                                alt={ notice.title }
                                height={200}
                            />
                            <CardContent>
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
                            </CardContent>
                    </Card>
                ))
            }
        </List>
    )
}
