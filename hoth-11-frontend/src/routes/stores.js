import {writable} from 'svelte/store'

export const major = writable('');

export const formData = writable({a: 'b'}, () => {});
