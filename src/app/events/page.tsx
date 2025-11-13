import { FC } from "react"

import { Typography } from "@/components/ui/typography"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

const eventTitleMap = {
    detran: "🚗 Quiz de Legislação - Detran",
}

const alphabet = "abcdefghijklmopqrstuvwxyz"

const EventsPage: FC = () => {
    const username = "marcuth"

    const event = {
        type: 'detran',
        duration: 86400,
        questionCount: 5,
        rewardXpPerQuestion: 106,
        specialXpPerQuestion: 500,
    } as const

    const themes = [
        {
            "id": 1,
            "name": "Direção Defensiva"
        },
        {
            "id": 2,
            "name": "Sinalização de Trânsito"
        },
        {
            "id": 3,
            "name": "Legislação de Trânsito"
        },
        {
            "id": 4,
            "name": "Mecânica Básica"
        },
        {
            "id": 5,
            "name": "Primeiros Socorros"
        },
        {
            "id": 6,
            "name": "Meio Ambiente"
        }
    ]

    const question =  {
        "id": 1,
        "themeId": 1,
        "text": "Conhecer a cidade é um requisito essencial para uma circulação segura e funcional. Logo, você deve conhecer",
        "alternatives": [
            {
                "id": 1,
                "text": "Apenas o trajeto de sua casa e trabalho, pois para outros locais você vai eventualmente."
            },
            {
                "id": 2,
                "text": "As zonas, regiões e bairros da cidade, suas vias de acesso e vias alternativas."
            },
            {
                "id": 3,
                "text": "Apenas o seu bairro, local em que vive desde que nasceu."
            },
            {
                "id": 4,
                "text": "Muito bem seu veículo e isso é suficiente."
            },
            {
                "id": 5,
                "text": "O nome de todas as ruas."
            }
        ],
    }

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
                            <Button variant="outline" className="grid grid-cols-[auto,1fr] items-center gap-3 w-full text-left" key={alternative.id}>
                                {/* <span className="font-bold">{alphabet.charAt(i)})</span>
                                <span>{alternative.text}</span> */}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EventsPage