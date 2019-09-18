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
            <Chapter key="magicItems" title="Magic Items">
                Weapons <br />
                <Item>Last whisper +2 (x1) (INVENTION)</Item>
                <Item>Heavy asset +1 (x1) (INVENTION)</Item>
                <Item>Handaxe +1 (x1)</Item>
                <Item>Agony (x1) (INVENTION)</Item>
                <Item>Lullaby (x1) (INVENTION)</Item>
                <br />

                Ammunition fo Lullaby <br />
                <Item>Positive energy shell (x4) (INVENTION)</Item>
                <Item>Negative energy shell (x2) (INVENTION)</Item>
                <Item>Shock shell (x2) (INVENTION)</Item>
                <Item>Explosive shell (x1) (INVENTION)</Item>
                <Item>Sun shell (x1) (INVENTION)</Item>
                <br />

                Armor <br />
                <Item>Breastplate +1 (or +2? :) )</Item>
                <Item>Shield</Item>
                <br />

                Misc <br />
                <Item>Soul watch (x1) (INVENTION)</Item>
                <Item>Bag of holding</Item>
                <Item>Horse</Item>
                <Item>Tools Roland is proficient with</Item>
                <Item>Some adventuring gear (line, bedrolls etc)</Item>
                <Item>Some gold, mostly in gems (from old days)</Item>
            </Chapter>,
        ]);
    }
}