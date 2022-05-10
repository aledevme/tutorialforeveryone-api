import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//mongodb
import { MongooseModule } from '@nestjs/mongoose';

//schemas
import { Tutorial, TutorialSchema } from './schemas/tutorial.schema'

//services
import {TutorialService} from './services/tutorial.service'
import { TutorialsController } from './controllers/tutorial.controller';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost/tutorialsforeveryone'),
    MongooseModule.forRoot('mongodb+srv://aledevme:c8ldcUVgi9Sh1pZf@cluster0.5v234.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: Tutorial.name, schema: TutorialSchema}])
  ],
  controllers: [AppController, TutorialsController],
  providers: [AppService, TutorialService],
})
export class AppModule {}
