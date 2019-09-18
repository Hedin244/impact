import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

export default class CharacterPanel extends PureComponent {

    renderCharacter = ({ children, name, selected, }) => {
        const { classes } = this.props;
        const cardClass = classNames(classes.card, {
            [classes.SelectedCard]: selected,
        });

        return (
            <Card className={ cardClass }>
                <CardContent>
                    <Typography align="left" variant="h6">
                        { name }
                    </Typography>
                    <Typography align="justify" variant="body2">
                        { children }
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    render() {
        const Character = this.renderCharacter;

        return ([
            <Character key="0" name="Kurt Marston">
                Roland’s father, middle-tier merchant, usually dealing with spices, fabrics and mechanical tools (and toys) imported from the east. Likes his children, but not as much as his dream of becoming great and rich merchant. He died poor and in dept in his 60’s leaving his wife and newborn daughter.
                <br/><br /><em>Currently: dead.</em>
            </Character>,
            <Character key="1" name="Elisabeth Marston">
                Roland’s mother, housewife. Her beauty as a young girl stunned most men, but she was getting old fast. She become mother full of hypocrisy, loving outside but cold and selfish inside. After her husband died leaving her with a lot of debts she is sold into slavery with her young daughter.
                <br/><br /><em>Currently: dead.</em>
            </Character>,
            <Character key="2" name="Tom Marston">
                Roland’s younger brother and middle Marston sibling. The loudest and wordy of all Marstons, he always knew what to say and when to get what he wanted. During his time as a slave he found himself in a middle of attention of some powerful entity from Nine Hells. Tom forget a pact with that entity and with its help he, and Roland, escaped the slavery. Over many years Tom’s pact with a devil started to reflect negatively on his mental health. Slowly he become more sadistic, cold hearted and cruel. Nevertheless Tom always stayed loyal to his few, real friends but his changing personality was a center of few big fights between Darius’s group. With Enders help Tom become very powerful warlock and demonologist.
                <br/><br /><em>Currently: 52 years, location unknown.</em>
            </Character>,
            <Character key="3" name="Alice Marston">
                Roland’s youngest sibling. Sister that was burn after he and his brother was sold out as slaves. She never knew truth about her brothers (she heard stories they died). She had best traits of her brothers, Roland’s unusual and brilliant intellect and resourcefulness together with Tom’s charismatic smile and smooth talk. She even was as beautiful as her mother when she was young.
                She was sold into slavery when she was 14, but in a place when magic talent and court intrigues rule her unusual intelligence and charisma could have helped her get out of slavery.
                <br/><br /><em>Currently: 43 years, location unknown, probably somewhere in Thay.</em>
            </Character>,
            <Character key="4" name="Ender">
                The One That Ends All Time, Tom’s devil. While Marston brothers were “playing” at night in Karssus laboratory (they were actually trying to figure out what Karssus was doing in there) this devil found Toms out and reach out to him. After making a pact in Tom’s dream he become his patron. Enders true name is not known to others, and if Tom knows it he doesn't tell. Besides that Ender is really talkative and curious about a world. Some of Roland’s inventions are directly inspired by Ender’s knowledge and lessons.
            </Character>,
            <Character key="5" name="Karssus Thorn">
                Prominent noble and Red Mage of Thay. Cruel but fair lord. He was one of the scientists responsible for researching other planes.
                <br/><br /><em>Currently: unknown, if alive he should be around 140 years old.</em>
            </Character>,
            <Character key="6" name="Diana Marston">
                Half-elf woman, nurse in a service of Ilmater. Maybe the only pure and truly good person in a world. Always was trying to help others. She wasn't blind to reality of the world, for example she knew exactly what was Roland doing before he met her, but she always try to do her best. She died in Roland’s hands, whispering that she loves him to the very end.
                <br/><br /><em>Currently: dead.</em>
            </Character>,
            <Character key="7" name="Annie Marston">
                Child of Roland and Diana. Brilliant, happy and loving fun and games. Best of trait from both her parents.
                <br/><br /><em>Currently: dead.</em>
            </Character>,
            <Character key="8" name="Gar’tu’zad">
                One of the best smiths in City of Brass. Working mostly for a powerful devils making intelligent weapons for killing demons.
                <br/><br /><em>Currently: unknown.</em>
            </Character>,
            <Character key="9" name="Darius's party">
                <em>Valetta</em> - Brass dragornborn priest of Gond. <br />
                <em>Currently: priest in a House of Inspired Hands, Gond’s church in Waterdeep.</em><br/><br/>

                <em>Zed</em> - One-eyed firbolg ranger. <br />
                <em>Currently: unknown.</em><br/><br/>

                <em>Iliya</em> - Rock gnome illusionist. <br />
                <em>Currently: unknown.</em><br/><br/>

                <em>Grom`a`gar</em> - Half-ork barbarian woman from north. <br />
                <em>Currently: unknown.</em><br/><br/>

                WORK IN PROGRESS
            </Character>,
        ]);
    }
}