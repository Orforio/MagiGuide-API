import { Controller, Get, Param } from '@nestjs/common';

import { AttractionsService } from './attractions.service';

@Controller('attractions')
export class AttractionsController {
	constructor(private readonly attractionsService: AttractionsService) {}

	@Get('waittimes/:park')
	public async waitTimes(@Param('park') park: string): Promise<any> {
		return this.attractionsService.getAllWaitTimes(park);
	}
}
