import React from "react";
import {
    Avatar,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {format} from "date-fns";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const ContactsTable = ({data}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="contacts table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell>Full name</TableCell>
                        <TableCell>Birthday</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Nationality</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.login.uuid}>
                            <TableCell>
                                <Avatar
                                    alt={`${item.name.first} ${item.name.last}`}
                                    src={item.picture.thumbnail}
                                    className={classes.small}
                                />
                            </TableCell>
                            <TableCell>
                                {item.name.title} {item.name.first} {item.name.last}
                            </TableCell>
                            <TableCell>
                                <Typography>
                                    {format(new Date(item.dob.date), "MM/dd/yyyy")}
                                </Typography>
                                <Typography>
                                    {item.dob.age} years
                                </Typography>
                            </TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.cell}</TableCell>
                            <TableCell>
                                <Typography>
                                    /{item.location.country}/
                                </Typography>
                                <Typography>
                                    {item.location.street.number} {item.location.street.name}, {item.location.city}
                                </Typography>
                                <Typography>
                                    {item.location.state} {item.location.postcode}
                                </Typography>
                            </TableCell>
                            <TableCell>5</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactsTable;
