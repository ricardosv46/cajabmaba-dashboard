export const isContra = (contra?: string) => {
	const regContra = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S/
	return regContra.test(contra ?? '')
}
