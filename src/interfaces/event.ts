import { EventType } from "../enums/event-type"

export interface Event {
    type: EventType
    duration: number
    questionCount: number
    rewardXpPerQuestion: number
    specialXpPerQuestion: number
}
