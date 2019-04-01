import { Injectable } from '@nestjs/common';
import { Parks } from 'themeparks';

@Injectable()
export class AttractionsService {
	private parkDisneyland = new Parks.DisneylandParisMagicKingdom();

	public async getAllWaitTimes(park: string): Promise<any> {
		if (park === 'dlp') {
			return this.parkDisneyland.GetWaitTimes();
		}
	}
}
