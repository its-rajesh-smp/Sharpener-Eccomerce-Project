import React from 'react';
import ReactDOM from 'react-dom';
import "./AlertDialog.css"
import { Alert, IconButton, Collapse } from '@mui/material';



function AlertDialog(props) {
    const [open, setOpen] = React.useState(true);


    return ReactDOM.createPortal((
        <Collapse style={{
            position: "fixed",
            zIndex: "20000",
            width: "400px",
            right: "5px",
            top: "60px",
        }} in={open}>
            <Alert
                style={{ boxShadow: "2px 2px 5px black" }}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <i className='bx bx-x'></i>
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                Close me!
            </Alert>
        </Collapse>

    ), document.querySelector("#alertBox"));
}

export default AlertDialog;
