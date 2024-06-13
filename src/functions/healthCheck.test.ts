import healthCheck from '@functions/healthCheck';
import { StatusCode } from '@models/index';
import type { APIGatewayProxyEvent } from 'aws-lambda';
import { version } from '../../package.json';

describe('HealthCheck', () => {
	test('Should return the current app version', async () => {
		const response = await healthCheck({} as APIGatewayProxyEvent);

		expect(response).toHaveProperty('statusCode', StatusCode.Success);
		expect(response).toHaveProperty('body');

		const body = JSON.parse(response.body);
		expect(body).toHaveProperty('version', version);
	});
});
