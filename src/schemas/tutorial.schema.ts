import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

import { 
    IsNotEmpty,
    IsNumber
} from "class-validator";

export type TutorialDocument = Tutorial & Document

@Schema()
export class Tutorial {
    
    @IsNotEmpty()
    @Prop()
    title: string;

    @IsNotEmpty()
    @Prop()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    readingTime: number;

    @Prop({type: MongooseSchema.Types.Mixed})
    user:{}
}

export const TutorialSchema = SchemaFactory.createForClass(Tutorial);
