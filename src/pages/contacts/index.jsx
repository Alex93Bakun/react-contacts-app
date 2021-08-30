import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import { useContacts } from "./useContacts";
import ContactsTable from "./ContactsTable";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    titleContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);

const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.titleContainer}>
          <Typography variant="h3" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <div>...loading</div>;
            }

            if (contacts.isError) {
              return <div>...error</div>;
            }

            return <ContactsTable data={contacts.data} />;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
