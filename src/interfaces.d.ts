declare interface IIndexProps { }
declare interface IQuizProps { }
declare interface IStatsProps { }

declare interface IPromptProps {
    prompt: string
    expected: string
    onSubmit?: (answer: string) => (Error | null)
}

declare interface IContext {
    sessionID: string
}

declare interface IModelManager {
    createQuiz: (ctx: IContext) => (IQuiz | Error)
    listQuiz: (ctx: IContext) => (IQuiz[] | Error)
    getQuiz: (ctx: IContext, id: string) => (IQuiz | Error)
    deleteQuiz: (ctx: IContext, id: string) => (Error | null)

    addResult: (ctx: IContext, result: IQuizResult) => (Error | null)
}

declare interface IQuiz {
    id: string
    created: Date
    updated?: Date

    correct?: number
    total?: number

    // prompt => result
    results: Map<string, IQuizResult[]>
}

declare interface IQuizResult {
    kana: string
    answer: string
    correct: boolean
    elapsedTime: number
}