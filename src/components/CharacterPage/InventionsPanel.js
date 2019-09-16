import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

export default class InventionsPanel extends PureComponent {

    renderCharacter = ({ children, name, selected, }) => {
        const { classes } = this.props;
        const cardClass = classNames(classes.card, {
            [classes.SelectedCard]: selected,
        });

        return (
            <Card className={ cardClass }>
                <CardContent>
                    <Typography variant="h6">
                        { name }
                    </Typography>
                    <Typography variant="body2">
                        { children }
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    render() {
        const Character = this.renderCharacter;

        return ([
            <Character key="pistol1" name="Last whisper - pistol">
                WORK IN PROGRESS
            </Character>,
            <Character key="pistol2" name="XXX - pistol">
                WORK IN PROGRESS
            </Character>,
            <Character key="rifle" name="XXX - rifle">
                WORK IN PROGRESS
            </Character>,
            <Character key="leftArm" name="Claw - left arm">
                In a fight with Lord’s Allience’s bounty hunters Roland lost left arm. After 2 years without second hand Roland and Tom went to City of Brass on an elemental Plane of Fire. Once in a city they made a bargain with Gar’tu’zad, a fire Ifrit smith: he will help them craft a left arm for Roland, but he will take one favor from them both, that he will use in a future. The result is Claw, left arm made from black devil iron, hardened in a blood of a tousents demons.
            </Character>,
            <Character key="defender" name="Omen - steel hound">
                One of Tom’s and Roland’s earliest work. Summoned Hell Hound that was Roland’s companion for many years. After one of the worst battles the hound was heavily wounded defending Roland. In return Marstorn made a mechanical construct and, with Toms and Ender, transferred soul and mind of Hound into a new body. Omen is an old dog, an emissary of Devil and a friend to Roland. He is calm and very protective for anyone he consider his flock.
            </Character>,
            <Character key="souls" name="Soul prison">
                Items design to trap and contain a soul of a living being. They are always mechanical contraptions enchanted with high level magic. When the soul is inside cogs and parts of those items start to move with can by used to power small items. They were only 17 Soul prisons created.
            </Character>,
            <Character key="watch" name="Soul watch">
                Only Soul prison that remain in Roland’s posesion. It’s in an mechanical watch and it’s full with Roland’s unborn son’s soul.
            </Character>,
        ]);
    }
}