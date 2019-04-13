import { Controller, Get } from '@nestjs/common';

import { ParksService } from './parks.service';
import { Park } from './park.decorator';
import { Attraction } from './attraction.model';
import { AttractionWaitTime } from './attraction-wait-time.model';
import { Parks } from './parks.enum';

@Controller('parks')
export class ParksController {
	constructor(private readonly parksService: ParksService) {}

	@Get(':park/attractions')
	public async getAttractions(@Park() park: Parks): Promise<Attraction[]> {
		return this.parksService.getAttractions(park);
	}

	@Get(':park/waittimes')
	public async getWaitTimes(@Park() park: Parks): Promise<AttractionWaitTime[]> {
		return this.parksService.getWaitTimes(park);
	}
}
