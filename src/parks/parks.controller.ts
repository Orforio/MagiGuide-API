import { Controller, Get } from '@nestjs/common';

import { ParksService } from './parks.service';
import { Park } from './park.decorator';
import { AttractionWaitTime } from './attraction-wait-time.model';
import { Parks } from './parks.enum';

@Controller('parks')
export class ParksController {
	constructor(private readonly parksService: ParksService) {}

	@Get(':park/waittimes')
	public async getWaitTimes(@Park() park: Parks): Promise<AttractionWaitTime[]> {
		return this.parksService.getWaitTimes(park);
	}
}
