import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Tutorial } from "src/schemas/tutorial.schema";
import { TutorialService } from "src/services/tutorial.service";

@Controller('tutorials')
export class TutorialsController{
    constructor(private readonly tutorialService: TutorialService) {}

    @Post()
    async createTutorial(@Res() response, @Body() tutorial: Tutorial){
        const newTutorial = await this.tutorialService.create(tutorial)
        return response.status(HttpStatus.CREATED).json({
            newTutorial
        })
    }
}