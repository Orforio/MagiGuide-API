import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParksModule } from './parks/parks.module';

@Module({
	controllers: [AppController],
	imports: [ParksModule],
	providers: [AppService]
})
export class AppModule {}
