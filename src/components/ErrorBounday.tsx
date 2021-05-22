import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import React, { ErrorInfo } from 'react';

class ErrorBoundary extends React.Component<
  {},
  { hasError: boolean; error: Error | null; errorInfo: ErrorInfo | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error, errorInfo };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    this.setState({hasError:true, error, errorInfo});
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert status="error" flexDirection="column">
          <AlertIcon boxSize="40px" mr={0}/>
          <AlertTitle mt={4} mb={1} display={'block'}>
            Something went wrong
          </AlertTitle>
          <AlertDescription>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo?.componentStack}
            </details>
          </AlertDescription>
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
