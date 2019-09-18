import React, { PureComponent } from 'react';
import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

function Item({ children }) {
    return (
        <Typography align="left" variant="body2">
            &#9679; &nbsp; &nbsp; { children }
        </Typography>
    );
}

export default class NotesPanel extends PureComponent {

    renderChapter = ({ children, title, }) => {
        const { classes } = this.props;

        return (
            <Card elevation={ 2 } className={ classes.card }>
                <CardContent>
                    <Typography align="left" variant="h6">
                        { title }
                    </Typography>
                    { children }
                </CardContent>
            </Card>
        );
    };

    render() {
        const Chapter = this.renderChapter;

        return ([
            <Chapter key="main" title="Roland's story hooks.">
                <Typography align="center" variant="body2">
                    COMING SOON
                </Typography>
            </Chapter>,
        ]);
    }
}