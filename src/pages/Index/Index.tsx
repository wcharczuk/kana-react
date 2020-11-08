import * as React from 'react';
import './Index.css';

declare interface IIndexProps { }

class Index extends React.Component<IIndexProps, any> {
	private dataManager: IModelManager
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