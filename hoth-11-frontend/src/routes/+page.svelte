<script>
	// import { database } from "$lib/database.js";
    import { major, formData } from './stores.js';
	import { get } from "svelte/store";

	import { initializeApp } from "firebase/app";
	import { collection, getFirestore, doc, setDoc } from "firebase/firestore";

	const firebaseConfig = {
	apiKey: "AIzaSyDfECRJ5a6BRZS2ut9gCG061WinluJOHcI",
	authDomain: "hoth-11.firebaseapp.com",
	projectId: "hoth-11",
	storageBucket: "hoth-11.appspot.com",
	messagingSenderId: "948755546362",
	appId: "1:948755546362:web:f8dfc62c92bf610bc6c943",
	measurementId: "G-80GF47QQLX"
	};

	const app = initializeApp(firebaseConfig);
	const database = getFirestore(app);

    var mbti1 = "";
    var mbti2 = "";
    var mbti3 = "";
    var mbti4 = "";

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

    async function onFormSubmit()
    {
        console.log("submitting form to store");
		console.log({
                major: get(major),
                mbti1: mbti1,
                mbti2: mbti2,
                mbti3: mbti3,
                mbti4: mbti4
            });
        formData.update((_) => {
            return {
                major: get(major),
                mbti1: mbti1,
                mbti2: mbti2,
                mbti3: mbti3,
                mbti4: mbti4
            }
        });

		// const collectionRef = database.collection('formResults');
		const collectionRef = collection(database, 'formResults');
		try {
			var stuff = get(formData);
			console.log(stuff);
			await setDoc(doc(database, "formResults", "ID"), stuff);

			// const docRef = await collectionRef.set(stuff);
			// console.log('Document written with ID: ', docRef.id);
			// res.status(200).json({ success: true, message: 'Form data submitted successfully' });
		} catch (error) {
			console.error('Error adding document: ', error);
			// res.status(500).json({ success: false, message: 'Internal server error' });
		}
    }
</script>

<h2>What’s your major (type the full major name out in all lowercase ie. computer science)?</h2>
<input bind:value = {$major} />

<h2>Are you more introverted or extroverted?</h2>

<form method="POST">
{#each ['introverted' , 'extroverted'] as mbti1}
	<label>
		<input
			type="radio"
			name="mbti1"
			value={mbti1}
			bind:group={mbti1}
		/>
        {mbti1}  
	</label>
{/each}
</form>

<h2>Do you tend to focus more on what’s in front of you or on what the future might hold?</h2>

<form method="POST">
{#each ['what’s right in front of me', 'what the future might hold'] as mbti2}
	<label>
		<input
			type="radio"
			name="mbti2"
			value={mbti2}
			bind:group={mbti2}
		/>
		{mbti2}
	</label>
{/each}
</form>

<h2>Are you more guided by your feelings or by logic?</h2>

<form method="POST">
{#each ['feelings', 'logic'] as mbti3}
	<label>
		<input
			type="radio"
			name="mbti3"
			value={mbti3}
			bind:group={mbti3}
		/>
		{mbti3}
	</label>
{/each}
</form>

<h2>Do you prefer planning things out or just going with the flow?</h2>

<form method="POST">
{#each ['planning things out', 'just going with the flow'] as mbti4}
	<label>
		<input
			type="radio"
			name="mbti4"
			value={mbti4}
			bind:group={mbti4}
		/>
		{mbti4}
	</label>
{/each}
</form>

<button on:click={onFormSubmit}>Submit</button>



<!-- <button on:click={onFormSubmit}/> -->


<style>
    label{
        font-family: 'Arial';
    }
    h1{
        font-family: 'Arial';
    }
    h2{
        font-family: 'Arial';
    }
</style>
