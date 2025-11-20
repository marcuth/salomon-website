"use server"

import detranData from "@/data/detran-questions.json"
import jwt from "jsonwebtoken"

import { Question } from "@/interfaces/question"
import { Event } from "@/interfaces/event"

export async function generateQuestions(token: string): Promise<Question[]> {
    const event = jwt.decode(token) as Event
    const questionCount = event.questionCount
    const eventType = event.type

    if (!eventType) {
        throw new Error("Tipo de evento inválido.")
    }

    const allThemes = detranData.themes
    const randomThemeIndex = Math.floor(Math.random() * allThemes.length)
    const randomTheme = allThemes[randomThemeIndex]

    const questions = detranData.questions
        .filter((question) => question.themeId === randomTheme.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, questionCount)

    return questions
}