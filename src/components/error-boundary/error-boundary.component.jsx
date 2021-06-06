import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles'

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {


        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log("error", error, "info", info);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://miro.medium.com/max/1956/1*pUEZd8z__1p-7ICIO1NZFA.png' />
                    <ErrorImageText >We broke. Sorry about that</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;