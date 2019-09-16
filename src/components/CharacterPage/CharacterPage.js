import React, { PureComponent } from 'react';
import { Card, Typography, Tab, Tabs, Box } from '@material-ui/core';
import BasePanel from './BasePanel';
import HistoryPanel from './HistoryPanel';
import EventsPanel from './EventsPanel';
import InventionsPanel from './InventionsPanel';
import CharacterPanel from './CharacterPanel';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={ value !== index }
            id={ `vertical-tabpanel-${ index }` }
            { ...other }
        >
            <Box p={ 0 }>{ children }</Box>
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${ index }`,
    };
}

export default class CharacterPage extends PureComponent {

    state = {
        tab: 0,
    };

    setTab = (event, tab) => {
        this.setState({ tab });
    };

    render() {
        const { classes } = this.props;
        const { tab } = this.state;

        return (
            <div className={ classes.root }>
                <Card className={ classes.tabMenu }>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={ tab }
                        onChange={ this.setTab }
                    >
                        <Tab label="Base informations" { ...a11yProps(0) } />
                        <Tab label="History" { ...a11yProps(1) } />
                        <Tab label="Events" { ...a11yProps(2) } />
                        <Tab label="Characters" { ...a11yProps(3) } />
                        <Tab label="Inventions" { ...a11yProps(4) } />
                    </Tabs>
                </Card>
                <div className={ classes.tabContent }>
                    <TabPanel value={ tab } index={ 0 }>
                        <BasePanel classes={ classes } />
                    </TabPanel>
                    <TabPanel value={ tab } index={ 1 }>
                        <HistoryPanel classes={ classes } />
                    </TabPanel>
                    <TabPanel value={ tab } index={ 2 }>
                        <EventsPanel classes={ classes } />
                    </TabPanel>
                    <TabPanel value={ tab } index={ 3 }>
                        <CharacterPanel classes={ classes } />
                    </TabPanel>
                    <TabPanel value={ tab } index={ 4 }>
                        <InventionsPanel classes={ classes } />
                    </TabPanel>
                </div>
            </div>
        )
    }
}