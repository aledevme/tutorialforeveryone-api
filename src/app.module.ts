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
    MongooseModule.forRoot('mongodb://localhost/tutorialsforeveryone'),
    MongooseModule.forFeature([{name: Tutorial.name, schema: TutorialSchema}])
  ],
  controllers: [AppController, TutorialsController],
  providers: [AppService, TutorialService],
})
export class AppModule {}
