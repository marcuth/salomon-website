import jwt from "jsonwebtoken"
import { FC } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateQuestions } from "../actions/generate-questions"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Event } from "@/interfaces/event"

const eventTitleMap = {
    detran: "🚗 Quiz de Legislação - Detran",
}

const alphabet = "abcdefghijklmopqrstuvwxyz"

type Props = {
    searchParams: Promise<{
        token?: string
    }>
}

const EventsPage: FC<Props> = async ({ searchParams }) => {
    const username = "marcuth"
    const resolvedParams = await searchParams
    const token = resolvedParams.token

    if (!token) {
        return (
            <div className="mx-auto max-w-4xl">
                <Typography.Muted className="text-center mb-6">Token de evento não fornecido.</Typography.Muted>
                <div>{JSON.stringify({resolvedParams})}</div>
            </div>
        )
    }

    const event = jwt.decode(token) as Event
    const questions = await generateQuestions(token)
    const question = questions[0]

    return (
        <div className="mx-auto max-w-4xl">
            <Typography.Muted className="text-center mb-6">Você está logado como <Typography.Code>{username}</Typography.Code></Typography.Muted>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-lg">{eventTitleMap[event.type]}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Typography.P className="text-base">{question.text}</Typography.P>
                    <div className="space-y-3">
                        {question.alternatives.map((alternative, i) => (
                            <Button variant="outline" className="flex justify-start items-center gap-3 w-full text-left" key={alternative.id}>
                                <span className="font-bold">{alphabet.charAt(i)})</span>
                                <span>{alternative.text}</span>
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EventsPage