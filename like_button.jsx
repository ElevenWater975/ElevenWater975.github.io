import React from 'react';
import ReactDOM from 'react-dom';

class example extends React.Component {
    render() {
        return(
            <h1>Welcome</h1>
        );
    }
}

export default example;


ReactDOM.render(<example />, document.getElementById('selfhelp'));