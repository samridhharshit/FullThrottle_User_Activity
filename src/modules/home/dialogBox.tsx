import React, {useEffect} from "react";
import {useTheme} from "@material-ui/core/styles";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery
} from "@material-ui/core";

interface IProps {
    dialogOpen: boolean
    setdialogOpen: () => void,
    data: any
}


export default function UserActivityDialog({ setdialogOpen, data, dialogOpen }: IProps) {
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    console.log(data)
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={dialogOpen}
                onClose={setdialogOpen}
                aria-labelledby="user"
            >
                <DialogTitle id="user">{"Activity Periods"}</DialogTitle>
                <DialogContent>
                    {
                        data.length > 0 ? (
                            data[0]?.activity_periods?.map((work: any, index: number) =>
                                <DialogContentText key={index}>
                                    {`Start time - ${work.start_time}  End time - ${work.end_time}`}
                                </DialogContentText>
                            )
                        ) : null
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        variant={'contained'}
                        onClick={setdialogOpen} color="secondary" autoFocus>
                        Return
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}