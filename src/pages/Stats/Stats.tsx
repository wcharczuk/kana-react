import * as React from 'react';
import './Stats.css';

class Stats extends React.Component<IStatsProps, any> {
	constructor(props: IStatsProps) {
		super(props)
		this.state = {}
    }
	render() {
		return (
			<h1>Status</h1>
		)
	}
}

export default Stats;