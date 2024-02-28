import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import "./index.css"

export default function AlertDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true)
        window.location.replace("https://goldenmonk.com/?oid=10&affid=882")
        // window.location.replace("/")
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle> */}
                <DialogContent className='dialogBox' style={{ margin: "20px 10px" }}>
                    <DialogContentText className='dialogBoxpara' id="alert-dialog-description">
                        This website uses cookies to ensure you get the best experience on our website.<br />

                        <a style={{ margin: "20px 0px" }} href="https://goldenmonk.com/?oid=10&affid=882">Learn More</a>

                        <Button style={{ marginTop: "20px", width: "100%", backgroundColor: "#0084d6", color: "#fff" }} onClick={handleClickOpen}>YES, I ACCEPT COOKIES</Button>
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </React.Fragment>
    );
}