import * as React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";

import Routes from './routes'
import AppDrawer from "../components/AppDrawer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: { display: 'flex', flexDirection: 'column', height: '100%' },
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: theme.palette.background.default,
            flexGrow: 1,
            padding: theme.spacing(4),
        }
    })
)

export default function Container() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppDrawer />
            <div className={classes.content}>
                <Routes />
            </div>
        </div>
    )
}
