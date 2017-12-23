/* code_editor/index.js */

import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';

export default class CodeEditor extends React.Component {

    constructor() {
        super();
        this.state = {
          code: "// code"
        };
    }

    static defaultProps = {
        options: { }
    }

    /*
     * getDefaultProps() {
     *   return {
     *       options: {}
     *   }
     * }
     */

    render() {
        var options = {
            lineNumbers: true,
            mode: {
                name: "javascript",
                json: true
            }
        };

        return (
            <CodeMirror value={this.state.code} options={{...options, ...this.props.options}} />
        );
    }
}

CodeEditor.propTypes = {
    options: PropTypes.object
};
