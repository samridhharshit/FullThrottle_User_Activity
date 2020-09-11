import React, {useEffect, useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Avatar,
    ButtonBase,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Typography
} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";
import {MoreVert} from "@material-ui/icons";

import * as data from '../../data/Test JSON.json'
import UserActivityDialog from "./dialogBox";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 345,
            width: 345,
            margin: theme.spacing(2),
        },
        media: {
            height: 190,
        },
        center: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        avatar : {
            backgroundColor: 'black',
            color: '#fff'
        },
        cardButton: {
            display: "block",
            textAlign: "initial",
            margin: "auto"
        },
    }),
);

export default function SkeTabs() {
    const classes = useStyles();
    const [loading, setLoading] = useState<boolean>(true)
    const [id, setId] = useState<string>('')
    const [dialogOpen, setdialogOpen] = useState<boolean>(false)

    useEffect(() => {
        console.log(data.members)
        const timeout = setTimeout(() => {
            setLoading(false)
        }, 1500);
    })

    const showActivity = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
        await setId(id)
        setdialogOpen(true)
        console.log(id)
    }

    return (
        <Grid container={true} spacing={3} className={classes.center}>
            {
                data.members.map(user =>
                    <React.Fragment key={user.id}>
                        <Card className={classes.card}>
                            <ButtonBase
                                className={classes.cardButton}
                                name={user.id}
                                value={user.id}
                                id={user.id}
                                onClick={e => showActivity(e, user.id)}
                            >
                                <CardHeader
                                    avatar={
                                        loading ? (
                                            <Skeleton animation="wave" variant="circle" width={40} height={40} />
                                        ) : (

                                            <Avatar className={classes.avatar}>{user.real_name.slice(0,2)}</Avatar>
                                        )
                                    }
                                    title={
                                        loading ? (
                                            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />
                                        ) : (
                                            `${user.real_name}`
                                        )
                                    }
                                    subheader={loading ? <Skeleton animation="wave" height={10} width="100%" /> : `${user.id}`}
                                />
                                <CardContent>
                                    {loading ? (
                                        <React.Fragment>
                                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                            <Skeleton animation="wave" height={10} width="80%" />
                                        </React.Fragment>
                                    ) : (
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {
                                                `From - ${user.tz}`
                                            }
                                        </Typography>
                                    )}
                                </CardContent>
                            </ButtonBase>
                        </Card>
                        <UserActivityDialog
                            dialogOpen={dialogOpen}
                            setdialogOpen={() => setdialogOpen(false)}
                            data={data.members.filter(user => user.id === id)}
                        />
                    </React.Fragment>
                )
            }
        </Grid>
    );
}