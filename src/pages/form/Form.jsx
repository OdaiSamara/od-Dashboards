import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from '@mui/material'
import React from 'react'
import Header from "../../component/Header";
import { useForm } from "react-hook-form"
const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const data = [
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'Manger',
        label: 'Manger',
    },
    {
        value: 'User',
        label: 'User',
    },

];
const Form = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const onSubmit = () => {
        console.log("doneeeeeeeeeeee");

        handleClick();
    };

    return (
        <Box>
            <Header title="CREATE USER" subTitle="Create a New User Profile" />
            <Box onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                noValidate
                autoComplete="off"
            >
                <Stack direction={"row"} gap={2}>
                    <TextField error={Boolean(errors.firstName)} helperText={Boolean(errors.firstName) ? "this filed in required & min 3 char" : null}  {...register("firstName", { required: true, minLength: 3 })} sx={{ flex: 1 }} label="First Name" variant="filled" />
                    <TextField error={Boolean(errors.lastName)} helperText={Boolean(errors.lastName) ? "this filed in required & min 3 char" : null}  {...register("lastName", { required: true, minLength: 3 })} sx={{ flex: 1 }} label="Last Name" variant="filled" />

                </Stack>

                <TextField error={Boolean(errors.email)} helperText={Boolean(errors.email) ? "please provied a valid email address" : null}  {...register("email", { required: true, pattern: regEmail })} label="Email" variant="filled" />
                <TextField error={Boolean(errors.number)} helperText={Boolean(errors.number) ? "please provied a valid phone number" : null}  {...register("number", { required: true, pattern: phoneRegExp })} label="Phone Number" variant="filled" />
                <TextField label="Address 1" variant="filled" />
                <TextField label="Address 2" variant="filled" />
                <TextField
                    id="filled-select-currency"
                    select
                    label="Role"
                    defaultValue="User"
                    variant="filled"
                >
                    {data.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{ textAlign: 'right' }}>
                    <Button type='submit' variant='contained'>Create New User</Button>



                    <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                    >
                        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
                            Account created successfully
                        </Alert>
                    </Snackbar>
                </Box>

            </Box>
        </Box>
    )
}

export default Form
