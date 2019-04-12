import { BadRequestException, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

import { Parks } from './parks.enum';

export const Park = createParamDecorator((data, request: Request) => {
	if (Object.values(Parks).includes(request.params.park)) {
		return request.params.park as Parks;
	} else {
		throw new BadRequestException('Invalid park');
	}
});
