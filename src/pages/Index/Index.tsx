import * as React from 'react';
import './Index.css';

class Index extends React.Component<IIndexProps, any> {
	constructor(props: IIndexProps) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<h1>Index</h1>
		)
	}
}

export default Index;