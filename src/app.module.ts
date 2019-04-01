import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttractionsModule } from './attractions/attractions.module';

@Module({
	controllers: [AppController],
	imports: [AttractionsModule],
	providers: [AppService]
})
export class AppModule {}
