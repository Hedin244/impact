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

export default class HistoryPanel extends PureComponent {

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
            <Chapter key="0" title="Early days in Thay">
                <Item>Roland and his younger brother Tommy are born into a merchant family at the outskirts of Thay. Their early days are filled with joy and family love.</Item>
                <Item>Their father lost a lot of money because of several wrong investitions.</Item>
                <Item>Family is selling both young brothers into slavery. Specifically into a red mage’s household.</Item>
                <Item>Two brothers are working in Karssus’s house. Cleaning, helping the cooks, etc.</Item>
                <Item>Tom is contacted by otherworldly entity, a devil that calls himself The One That Ends All Time. He and Tom form a pact.</Item>
                <Item>Both brothers escape slavery, and are hunted by Darius’s group.</Item>
                <Item>After several weeks they are captured, but because they impressed Darius he decide to buy them out and recruit to his group.</Item>
            </Chapter>,

            <Chapter key="1"  title="Full time adventurer">
                <Item>Many adventures with Darius and his group.</Item>
                <Item>They do some bad things like hunt for slaves, kill innocents, steal, etc.</Item>
                <Item>Roland meets Diana, young, red headed nurse in an Ilmater’s infirmary. They fall in love and marry.</Item>
                <Item>Roland decides to leave adventuring, fake his death (with Darius’s party’s help) and settle down with Diana.</Item>
            </Chapter>,

            <Chapter key="2"  title="Settling with family life">
                <Item>Roland’s and Diana’s daughter is born, Annie.</Item>
                <Item>Roland is working as a craftsman at the edge of Phandelver. Making simple tools, toys, working with leather etc.</Item>
                <Item>Diana gets pregnant again.</Item>
                <Item>Roland’s house gets raided, Annie and Diana are killed and home is burned. Roland’s son’s soul that Diana was pregnant with is transferred into only Soul prison that Roland poses, his watch.</Item>
            </Chapter>,

            <Chapter key="3"  title="Old dog’s coming back">
                <Item>Roland digs out his gear, go after the attackers and kills them all.</Item>
                <Item>Raiders attacked because they wonted Roland's inventions and blueprints. Which they got and send somewhere before they died.</Item>
                <Item>Roland comes to Waterdeep to find Valetta.</Item>
            </Chapter>,
        ]);
    }
}