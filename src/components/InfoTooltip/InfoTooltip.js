import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Card, Typography, CardContent, CardActions, Button, Tab, Tabs, Box } from '@material-ui/core';

export default class CharacterPage extends PureComponent {

    state = {
        screenX: null,
        screenY: null,
    };

    handleMouseMove = e => {
        this.setState({
            screenX: e.screenX,
            screenY: e.screenY,
        });
    };

    handleMouseLeave = e => {
          this.setState({
              screenX: null,
              screenY: null,
          });
    };

    render() {
        const { classes, children, className, cardChildren } = this.props;
        const { screenX, screenY } = this.state;

        const cardClass = classNames(classes.card, {
            [className]: className,
            [classes.visible]: screenX && screenY,
        });

        return (
            <div className={ classes.root } onMouseMove={ this.handleMouseMove } onMouseLeave={ this.handleMouseLeave }>
                <Card className={ cardClass } style={{ left: `${ screenX }px`, top: `${ screenY }px` }}>
                    { cardChildren }
                </Card>
                { children }
            </div>
        )
    }
}