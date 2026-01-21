import { Component } from "react";
import type { ReactNode } from "react";

type State = {
    hasError : boolean
}

type Props = {
    children : ReactNode
}
export default class ErrorBoundary extends Component<Props, State> {
    state = { hasError : false }

    static getDerivedStateFromError()
    {
        return { hasError : true}
    }

    componentDidCatch(error : Error,  info : React.ErrorInfo) {
        console.log(error, info)   
    }

    render() {
        if (this.state.hasError)
        {
            return <h1>Something went wrong. Try again later</h1>
        }

        return this.props.children
    }
}