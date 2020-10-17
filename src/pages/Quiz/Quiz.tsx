import * as React from 'react';
import './Quiz.css';

class Quiz extends React.Component<IQuizProps, any> {
	constructor(props: IQuizProps) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<h1>Quiz</h1>
		)
	}
}

export default Quiz;