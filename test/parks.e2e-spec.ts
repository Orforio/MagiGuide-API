import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';
import { ParksService } from './../src/parks/parks.service';

describe('ParksController', () => {
	let app: INestApplication;
	const mockParksService = {
		getAttractions: () => [{}],
		getWaitTimes: () => [{}]
	};

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		})
		.overrideProvider(ParksService)
		.useValue(mockParksService)
		.compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	afterAll(async () => {
		await app.close;
	});

	describe('/parks/:park/attractions (GET)', () => {
		it('return Attractions data from the Themeparks API', () => {
			return request(app.getHttpServer())
				.get('/parks/dlp-wds/attractions')
				.expect(200)
				.expect(mockParksService.getAttractions());
		});
	});

	describe('/parks/:park/waittimes (GET)', () => {
		it('return AttractionWaitTimes data from the Themeparks API', () => {
			return request(app.getHttpServer())
				.get('/parks/dlp-dp/waittimes')
				.expect(200)
				.expect(mockParksService.getWaitTimes());
		});
	});
});
