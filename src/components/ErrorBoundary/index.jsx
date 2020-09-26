import React from "react";
// import Button from "../Button";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="errorboundary--wrapper">
          <h1>Something went wrong.</h1>
          <p>We would get this working soon, please bear with us.</p>
          {/* <Button
            className="errorboundary--btn"
            onClick={this.handleReload.bind(this)}
          >
            Reload Page
          </Button> */}
        </div>
      );
    }
    return this.props.children;
  }
}
