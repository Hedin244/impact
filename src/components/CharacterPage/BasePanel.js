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

export default class BasePanel extends PureComponent {

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
            <Chapter key="main" title="Base informations">
                <Typography align="left" variant="body2">
                    <b>Name:</b> Roland Marston <br />
                    <b>Race:</b> Human <br />
                    <b>Background:</b> Mercenary <br />

                    <b>Alignment:</b> Neutral (Evil? Probably, not sure yet..)  <br />
                    <b>Eyes:</b> Gray/Blue <br />
                    <b>Hair:</b> Short, mixture of gray and sparse black. <br />
                    <b>Height:</b> 1,88 m <br />
                    <b>Age:</b> 58 years <br />
                </Typography>
            </Chapter>,
            <Chapter key="highConcept" title="Who is Roland?">
                <Item>Old adventurer that saw a lot, but his prime times are past him. He knows that, nevertheless life on a road is the one that he loves.</Item>
                <Item>Roland was known as an genis inventor. That was main reason to stage his own death.</Item>
                <Item>In young days Roland was neutral evil, but last several years changed that a little. His wife and daughter softened his heart and made him a little bit better person. Will Roland descend into his old, very amoral, behavior now, when his family is dead?</Item>
                <Item>Long term goal: find a way to resurrect his family.</Item>
                <Item>Short term goal: find who from his old party sold him out.</Item>
            </Chapter>,
        ]);
    }
}