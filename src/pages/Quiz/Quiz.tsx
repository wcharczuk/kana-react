import * as React from 'react';
import './Index.css';

declare interface IQuizProps {
    MaxItems: number

}

class Quiz extends React.Component<IQuizProps, any> {
    private dataManager: IModelManager
    constructor(props: IQuizProps) {
        super(props)
        this.state = {}
    }
    render() {

        // handle game state
        // pull prompt
        // state transitions triggered by prompt submit

        return (
            <h1>Quiz</h1>
        )
    }
}

export default Quiz;