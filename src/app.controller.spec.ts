import { Test, TestingModule } from '@nestjs/testing';
import { Response } from 'express';

import { AppController } from './app.controller';

describe('AppController', () => {
	let appController: AppController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController]
		}).compile();

		appController = app.get<AppController>(AppController);
	});

	describe('root', () => {
		it('should redirect to MagiGuide', () => {
			// Arrange
			const mockResponse = {
				redirect: jest.fn()
			};

			// Act
			appController.redirectToApp(mockResponse as unknown as Response);

			// Assert
			expect(mockResponse.redirect).toHaveBeenCalledWith('https://www.magiguide.com');
		});
	});
});
