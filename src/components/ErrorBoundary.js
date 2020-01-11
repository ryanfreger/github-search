import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false }
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.props.requestHasFailed) {
            return <h1>Something went wrong.</h1>
        } else if (this.props.isPending) {
            return <img src='https://thumbs.gfycat.com/UncommonCrazyAfricanaugurbuzzard-max-1mb.gif' alt='loading-icon' />
        } else {
            return this.props.children
            // return <h1>Hi</h1>
        }
    }
}

export default ErrorBoundary;