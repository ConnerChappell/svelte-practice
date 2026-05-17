// page load function that only runs on server
// used for data loading
// access to cookies, url, etc

export function load({ locals }) {
	console.log(locals);
	// CAN DO DATABASE STUFF HERE
	return {
		name: 'Conner'
	};
}
