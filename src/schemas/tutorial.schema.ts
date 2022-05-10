import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type TutorialDocument = Tutorial & Document

@Schema()
export class Tutorial {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    readingTime: number;
}

export const TutorialSchema = SchemaFactory.createForClass(Tutorial);