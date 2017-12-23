
/* root.js */
import React from 'react'
import CodeEditor from './components/code_editor'
import Button from './components/button'
export default class Root extends React.Component {
    constructor(){
        super()
    }


    render() {
        let style = {
            display: 'flex',
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            flexDirection: 'column'
        };


        return (
            <div style={style}>
               <h2>{"This is a hot module reload demo to learn Reactjs as a "}</h2>
               <Button isDepressed={true} />
               <CodeEditor />
            </div>
        );
    }

}
