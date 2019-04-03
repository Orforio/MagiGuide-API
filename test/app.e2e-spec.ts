import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';

describe('AppController', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	afterAll(async () => {
		await app.close;
	});

	describe('/ (GET)', () => {
		it('should redirect to MagiGuide', () => {
			return request(app.getHttpServer())
				.get('/')
				.expect(302)
				.expect('Location', 'https://www.magiguide.com');
		});
	});
});
