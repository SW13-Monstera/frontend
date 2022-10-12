import React from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<any, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>문제가 발생했어요.</h1>;
    }

    return this.props.children;
  }
}
