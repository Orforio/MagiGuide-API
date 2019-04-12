import { Test, TestingModule } from '@nestjs/testing';

import { ParksController } from './parks.controller';
import { ParksService } from './parks.service';
import { AttractionWaitTime } from './attraction-wait-time.model';
import { AttractionStatus } from './attraction-status.enum';
import { Parks } from './parks.enum';

describe('Parks Controller', () => {
	let controller: ParksController;
	let service: ParksService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ParksController],
			providers: [ParksService]
		}).compile();

		controller = module.get<ParksController>(ParksController);
		service = module.get<ParksService>(ParksService);
	});

	it('should be defined', () => {
		// Assert
		expect(controller).toBeDefined();
	});

	describe('getWaitTimes()', () => {
		it('should return an array of AttractionWaitTimes', () => {
			// Arrange
			const mockData: AttractionWaitTime[] = [
				{
					id: 'TEST01',
					active: true,
					status: AttractionStatus.Operating,
					updated: new Date(),
					waitTime: 25
				}
			];
			jest.spyOn(service, 'getWaitTimes').mockResolvedValue(Promise.resolve(mockData));

			// Act
			const result = controller.getWaitTimes(Parks.DisneylandParisDisneylandPark);

			// Assert
			expect.assertions(1);
			return expect(result).resolves.toEqual(mockData);
		});
	});
});
