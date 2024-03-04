import {writable} from 'svelte/store'
import * as db from '$lib/database.js';


export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		db.writeUserData(cookies.get('userid'), data);
	}
};

export const major = writable('');

export const formData = writable({a: 'b'}, () => {});

