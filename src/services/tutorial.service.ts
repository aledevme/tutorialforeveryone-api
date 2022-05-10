import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {Tutorial, TutorialDocument} from '../schemas/tutorial.schema'

@Injectable()

export class TutorialService {
    constructor(@InjectModel(Tutorial.name) private tutorialModel: Model<TutorialDocument>) {}

    async all() : Promise<Tutorial[]> {
        return await this.tutorialModel.find()
    }

    async create(tutorial: Tutorial) : Promise<Tutorial> {
        const tutorialModel = new this.tutorialModel(tutorial)
        const newTutorial = await tutorialModel.save()
        return newTutorial
    }
}
