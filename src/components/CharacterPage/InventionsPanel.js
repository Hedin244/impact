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
            <Character key="pistol1" name="Last whisper - pistol">
                Crown jewel of Roland's work. Advanced pistol that is an extension of Roland's soul, it works only when Artificer Infusion "Repeating Shot"is used on it.
                <br /><br /><b>STATS</b><br />
                Base firearms pistol stats with Repeating Shot. Except:<br />
                It does not use one of the artificer's infusions. (It would be nice, but if you wont to nerf that item that's the place to start)<br />
                Magical bonus is +2 instead of +1.<br />
                Wielder has an advantage on initiative rolls.<br />
                Require atonement.
            </Character>,

            <Character key="pistol2" name="Agony / Eternity / Remorse (one of those) - pistol">
                <br /><br /><b>STATS</b><br />
                Base firearms palm pistol stats with a Hellfire bonus (Uncommon weapons in dnd-beyound): <br />
                This weapon is fashioned from infernal iron and traced with veins of hellfire that shed dim light in a 5-foot-radius. Any humanoid killed by an attack made with this weapon has its soul funneled into the River Styx, where it’s reborn instantly as a lemure devil (described in the Monster Manual).
            </Character>,

            <Character key="shotgun" name="Lullaby - sawed-off shotgun">
                Weapon designed to fire only special ammunition made just for it. Its a two-barrel short shotgun that can hold one bullet per barrel.
                <br /><br /><b>STATS</b><br />
                Range: 30/60
                Ammunition: <br />
                (It's more or less 1-2 lvl spells in a form of bullets rather then scrolls, materials to make them cost 100gp per round)<br />
                <b>Positive energy shell</b> - creature hit by it heals for 2d8 + 4.<br />
                <b>Negative energy shell</b> - creature hit must make a Constitution saving throw. If it fails, the target is blinded for 120s. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the effect ends.<br />
                <b>Explosive shell</b> - every creature in a 10ft. radius sphere must make a ST14 Dex saving roll or take 4d8 fire damage (or half as that on a saved roll).<br />
                <b>Shock shell</b> - the attack deals an extra 2d6 lighting damage to the target, which becomes visible if it is invisible, and the target sheds dim light in a 5-foot radius and can’t become invisible for the next 60s.<br />
                <b>Sun shell</b> - Roland need to shoot it straight up. Small ball of light shots out and hovers 10 ft above a ground. For the next 60s, the the ball bright light in a 20-foot radius and dim light for an additional 20 feet. Every creature that start its turn in a bright light range takes 1d4 radiant damage (everyone, Roland too).<br />


            </Character>,

            <Character key="rifle" name="Heavy asset - rifle">
                Heavy long range rifle made for beasts and creatures bigger then humans.
                <br /><br /><b>STATS</b><br />
                Base firearms musket stats. Except: <br />
                When hitting creature larger then medium size it does extra 1d12 damage. (2d12 total)<br />
                During short rest Roland can change damage type that this weapon deals (Piercing, Fire, Cold, Acid, Necrotic, Radiant). <br />
                It has magical enhancement +1 do attack and damage rolls. <br />
                Missfire is increased to 4. (from 2) <br />
            </Character>,

            <Character key="leftArm" name="Claw - left arm">
                In a fight with Lord’s Alliance’s bounty hunters Roland lost left arm. After 2 years without second hand Roland and Tom went to City of Brass on an elemental Plane of Fire. Once in a city they made a bargain with Gar’tu’zad, a fire Ifrit smith: he will help them craft a left arm for Roland, but he will take one favor from them both, that he will use in a future. The result is Claw, left arm made from black devil iron, hardened in a blood of a hundreds demons.
                <br /><br /><b>STATS</b><br />
                It's mainly for visual reasons. No real great powers in a hand or anything. Some of the tools are integrated to this hand.
            </Character>,

            <Character key="defender" name="Omen - steel hound">
                One of Tom’s and Roland’s earliest work. Summoned Hell Hound that was Roland’s companion for many years. After one of the worst battles the hound was heavily wounded defending Roland. In return Marstorn made a mechanical construct and, with Toms and Ender, transferred soul and mind of Hound into a new body. Omen is an old dog, an emissary of Devil and a friend to Roland. He is calm and very protective for anyone he consider his flock.
                <br /><br /><b>STATS</b><br />
                Base Iron Defender from Battle Smith stats.
            </Character>,

            <Character key="souls" name="Soul prison">
                Items design to trap and contain a soul of a living being. They are always mechanical contraptions enchanted with high level magic. When the soul is inside cogs and parts of those items start to move with can by used to power small items. They were only 17 Soul prisons created.
            </Character>,

            <Character key="shackles" name="Shackles">
                Only Soul prison that remain in Roland’s possession. It’s in an mechanical watch and it’s full with Roland’s unborn son’s soul.
            </Character>,
        ]);
    }
}