import React, { PureComponent } from 'react';
import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

export default class EventsPanel extends PureComponent {

    renderChapter = ({ children, title, }) => {
        const { classes } = this.props;

        return (
            <Card elevation={ 2 } className={ classes.card }>
                <CardContent>
                    <Typography variant="h6">
                        { title }
                    </Typography>
                    <Typography variant="body2">
                        { children }
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    render() {
        const Chapter = this.renderChapter;

        return ([
            <Chapter key="0" title="Librarian job">
                Early in Marston brothers’ history their group was tasked with finding special, magic book from an ancient Lost Library in a middle of desert. They found that place, and convinced library guardian, a paverfull fay ghost, to let them in. While inside Iliya’s curiosity took better of him and he started taking books forbidden by the guardian, with lead to fight.  Every time guardian died he immediately reincarnated, the team almost lost, bu at the end Ender, with his knowledge and guidance, helped them bound undying’s fey soul into a statue. With his last words guardian cursed adventures: “You will never be truly peaceful! Every peace of knowledge you obtain will cause you pain and suffering!”.
                <br /><br />
                <em>
                    Aftermath: Tom, Roland and Iliya reverse engineered soul binding spell and together they made Soul Prisons.
                </em>
            </Chapter>,

            <Chapter key="1"  title="Hunting Robin Hood">
                John Lock, some minor nobleman bastard was robbing rich nobles in outskirts of Calimshan. Problem was that most local population was in favor of John’s banditism so Darius’s team was hired to end that problem by all means necessary. Tracking John turned out to be impossible even for Zed, so he found people close to John’s men, their wifes, children and parents, and together with Tom, Roland and Grom they burned villages and killed many, many innocent. Plan worked and John had to come out, for his doom. Battle was quick and brutal. For that they all of the villagers that survived this were talking about Blood Riders (name they gave Darius’s group).
                <br /><br />
                <em>
                    Aftermath: “Blood Riders” name stick. It helped them by rising prices for their work and causing fear in their enemies harts, but also make them targets of many vangences of their victims. In one of them several years latter Iliya died.
                </em>
            </Chapter>,
        ]);
    }
}