import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

export type TutorialDocument = Tutorial & Document

@Schema()
export class Tutorial {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    readingTime: number;

    @Prop({type: MongooseSchema.Types.Mixed})
    user:{}
}

export const TutorialSchema = SchemaFactory.createForClass(Tutorial);
