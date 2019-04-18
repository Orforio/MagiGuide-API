import { Test, TestingModule } from '@nestjs/testing';

import { ParksService } from './parks.service';
import { Attraction } from './attraction.model';
import { AttractionWaitTime } from './attraction-wait-time.model';
import { AttractionStatus } from './attraction-status.enum';
import { Parks } from './parks.enum';
import { Status, ThemeparksWaitTimes } from './themeparks-wait-times.interface';

describe('ParksService', () => {
	let service: ParksService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ParksService]
		}).compile();

		service = module.get<ParksService>(ParksService);
	});

	beforeEach(() => {
		jest.spyOn(service.parks['dlp-dp'], 'GetWaitTimes').mockResolvedValue([]);
		jest.spyOn(service.parks['dlp-wds'], 'GetWaitTimes').mockResolvedValue([]);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('getAttractions()', () => {
		it('should retrieve attractions from the requested park', () => {
			// Arrange

			// Act
			service.getAttractions(Parks.DisneylandParisDisneylandPark);

			// Assert
			expect(service.parks['dlp-dp'].GetWaitTimes).toHaveBeenCalled();
		});

		it('should return an array of Attractions', () => {
			// Arrange
			const mockData: ThemeparksWaitTimes[] = [
				{
					id: 'TEST01',
					name: 'Test Attraction 01',
					waitTime: 30,
					active: true,
					fastPass: true,
					status: Status.Operating,
					lastUpdate: new Date('1992-04-12T10:15:00Z'),
					schedule: {
						openingTime: new Date('1992-04-12T09:00:00Z'),
						closingTime: new Date('1992-04-12T19:00:00Z'),
						type: Status.Operating
					}
				},
				{
					id: 'TEST02',
					name: 'Test Attraction 02',
					waitTime: 15,
					active: false,
					fastPass: false,
					status: Status.Closed,
					lastUpdate: new Date('1992-04-12T10:15:00Z'),
					schedule: {
						openingTime: new Date('1992-04-12T09:00:00Z'),
						closingTime: new Date('1992-04-12T19:00:00Z'),
						type: Status.Operating
					}
				}
			];
			const expectedResult: Attraction[] = [
				{
					id: 'TEST01',
					name: 'Test Attraction 01',
					fastpassEnabled: true,
					schedule: {
						openingTime: new Date('1992-04-12T09:00:00Z'),
						closingTime: new Date('1992-04-12T19:00:00Z')
					},
					updated: new Date('1992-04-12T10:15:00Z')
				},
				{
					id: 'TEST02',
					name: 'Test Attraction 02',
					fastpassEnabled: false,
					schedule: {
						openingTime: new Date('1992-04-12T09:00:00Z'),
						closingTime: new Date('1992-04-12T19:00:00Z')
					},
					updated: new Date('1992-04-12T10:15:00Z')
				}
			];
			service.parks['dlp-wds'].GetWaitTimes.mockResolvedValue(mockData);

			// Act
			const result = service.getAttractions(Parks.DisneylandParisWaltDisneyStudios);

			// Assert
			expect.assertions(1);
			return expect(result).resolves.toEqual(expectedResult);
		});
	});

	describe('getWaitTimes()', () => {
		it('should retrieve wait times from the requested park', () => {
			// Arrange

			// Act
			service.getWaitTimes(Parks.DisneylandParisWaltDisneyStudios);

			// Assert
			expect(service.parks['dlp-wds'].GetWaitTimes).toHaveBeenCalled();
		});

		it('should return an array of AttractionWaitTimes', () => {
			// Arrange
			const mockData: ThemeparksWaitTimes[] = [
				{
					id: 'TEST01',
					name: 'Test Attraction 01',
					waitTime: 30,
					active: true,
					fastPass: true,
					status: Status.Operating,
					lastUpdate: new Date('1992-04-12T10:15:00Z')
				},
				{
					id: 'TEST02',
					name: 'Test Attraction 02',
					waitTime: 15,
					active: false,
					fastPass: false,
					status: Status.Closed,
					lastUpdate: new Date('1992-04-12T10:15:00Z')
				}
			];
			const expectedResult: AttractionWaitTime[] = [
				{
					id: 'TEST01',
					active: true,
					status: AttractionStatus.Operating,
					updated: new Date('1992-04-12T10:15:00Z'),
					waitTime: 30
				},
				{
					id: 'TEST02',
					active: false,
					status: AttractionStatus.Closed,
					updated: new Date('1992-04-12T10:15:00Z'),
					waitTime: 15
				}
			];
			service.parks['dlp-dp'].GetWaitTimes.mockResolvedValue(mockData);

			// Act
			const result = service.getWaitTimes(Parks.DisneylandParisDisneylandPark);

			// Assert
			expect.assertions(1);
			return expect(result).resolves.toEqual(expectedResult);
		});
	});
});
