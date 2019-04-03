import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
	@Get()
	public redirectToApp(@Res() response: Response): void {
		response.redirect(`https://www.magiguide.com`);
	}
}
