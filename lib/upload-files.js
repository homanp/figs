import ky from 'ky';

// TODO: Remove `fetch` option when Node.js 20 is available
export const uploadFile = async (
	file,
	{fetch: fetch_ = ky, fields, FormData: FormData_ = FormData, url}
) => {
	const formData = new FormData_();

	for (const [key, value] of Object.entries({...fields, file})) {
		formData.append(key, value);
	}

	await fetch_.post(url, {body: formData});

	return `${url}/${fields.key}`;
};
