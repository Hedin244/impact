import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default class LogoutModal extends PureComponent {
    
    static propTypes = {
        open: PropTypes.bool,
        handleClose: PropTypes.func,
        handleLogout: PropTypes.func,
    };

    handleLogout = () => {
        const { handleClose, handleLogout } = this.props;

        handleLogout();
        handleClose();
    };

    render() {
        const { open, handleClose } = this.props;

        return (
            <Dialog open={ open } onClose={ handleClose }>
                <form onSubmit={ this.handleSubmit }>
                    <DialogTitle>Logout</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Confirm logout.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ handleClose } color="primary">
                            Cancel
                        </Button>
                        <Button onClick={ this.handleLogout } type="submit" color="primary">
                            Logout
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}