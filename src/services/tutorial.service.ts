import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {Tutorial, TutorialDocument} from '../schemas/tutorial.schema'

@Injectable()

export class TutorialService {
    constructor(@InjectModel(Tutorial.name) private tutorialModel: Model<TutorialDocument>) {}

    async create(Tutorial: Tutorial) : Promise<Tutorial> {
        const newTutorial = new this.tutorialModel(Tutorial)
        return newTutorial
    }
}
