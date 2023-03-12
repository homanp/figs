import createCors from 'cors';
import {runMiddleware} from '../../lib/run-middleware.js';
import {getUploadUrl} from '../../lib/upload-url.js';

const cors = createCors({
	methods: ['POST'],
});

const uploadUrlHandler = async (request, response) => {
	await runMiddleware(request, response, cors);

	response.json({data: await getUploadUrl({type: request.query.type})});
};

export default uploadUrlHandler;
