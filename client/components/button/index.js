/* button.js */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './styles';


export default class Button extends React.Component {

    constructor() {
        super();
        this.state = {
            isDepressed: false
        }

    }

    onClick() {
        this.setState({ isDepressed: !this.state.isDepressed });
    }

    render() {
        return (
            <div style={
                    _.merge({}, styles.container,
                        this.state.isDepressed && styles.depressed,
                        this.props.style )}
                onClick={ () => this.onClick() } >
                {"This is a styled button hot reload"}
            </div>
        );
    }
}

Button.propTypes = {
    style: PropTypes.object,
};
