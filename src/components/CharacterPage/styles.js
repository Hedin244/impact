module.exports = theme => ({
    root: {
        margin: theme.spacing(1.5),
        display: 'flex',
        height: `calc(100% - ${ theme.spacing(3) }px)`,
        boxSizing: 'border-box',
        overflow: 'auto',
    },
    tabMenu: {
        margin: theme.spacing(1.5),
        minWidth: '160px',
    },
    tabContent: {
        minHeight: '100%',
        maxHeight: '100%',
        overflow: 'auto',
    },
    card: {
        margin: theme.spacing(1.5),
    },
    SelectedCard: {
        backgroundColor: theme.palette.action.selected,
    },
});