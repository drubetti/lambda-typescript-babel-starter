import { StatusCode } from '@models/index';
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { version } from '../../package.json';

export default (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>
	Promise.resolve({
		body: JSON.stringify({
			message: 'Alive',
			input: event,
			version,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
		statusCode: StatusCode.Success,
	});
