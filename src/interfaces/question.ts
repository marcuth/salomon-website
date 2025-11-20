export interface Alternative {
    id: number
    text: string
}

export interface Question {
    id: number
    themeId: number
    text: string
    correctAlternativeId: number
    alternatives: Alternative[]
}