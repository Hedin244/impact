import React, { PureComponent } from 'react';
import { Card, List, ListItem, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

function Item({ children }) {
    return (
        <ListItem>
            &#9679; &nbsp; &nbsp; { children }
        </ListItem>
    );
}

export default class BasePanel extends PureComponent {

    renderChapter = ({ list, children, title, }) => {
        const { classes } = this.props;

        return (
            <Card elevation={ 2 } className={ classes.card }>
                <CardContent>
                    <Typography variant="h6">
                        { title }
                    </Typography>
                    {
                        list ?
                            <List>
                                { children }
                            </List>
                            :
                            children
                    }
                </CardContent>
            </Card>
        );
    };

    render() {
        const Chapter = this.renderChapter;

        return ([
            <Chapter key="main" title="Base informations">
                <Typography align="left" variant="body2">
                    &nbsp; &nbsp;<b>Name:</b> Roland Marston <br />
                    &nbsp; &nbsp;<b>Race:</b> Human <br />
                </Typography>
            </Chapter>,
            <Chapter list key="highConcept" title="Who is Roland?">
                <Item>Old adventurer that saw a lot, but his prime times are past him. He knows that, nevertheless life on a road is the one that he loves.</Item>
                <Item>Roland was known as an genis inventor. That was main reason to stage his own death.</Item>
                <Item>In young days Roland was neutral evil, but last several years changed that a little. His wife and daughter softened his heart and made him a little bit better person. Will Roland descend into his old, very amoral, behavior now, when his family is dead?</Item>
            </Chapter>,
        ]);
    }
}