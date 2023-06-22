import React, {type ErrorInfo, type ReactNode, Suspense} from 'react';
import {ErrorPage} from 'widgets/ErrorPage/ui/ErrorPage';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	static getDerivedStateFromError(error: Error) {
		return {hasError: true};
	}

	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {hasError: false};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		const {hasError} = this.state;
		const {children} = this.props;
		if (hasError) {
			return <Suspense fallback={''}>
				<ErrorPage/>
			</Suspense>;
		}

		return <>{children}</>;
	}
}
export default ErrorBoundary;
