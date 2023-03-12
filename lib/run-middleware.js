export const runMiddleware = (request, response, function_) =>
	new Promise((resolve, reject) => {
		function_(request, response, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
