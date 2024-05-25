export type MessageType = {
    author: 'system' | 'user'
    text: string
}

export type QuestionResponseType = {
    index?: number
    question: string
    response: string
}

export function formatQuestionResponse({ index, question, response }: QuestionResponseType) {
    return `Sua pergunta de número ${index} foi: "${question}". E seu paciente respondeu: "${response}".`
}