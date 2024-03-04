<script>
	// import { database } from "$lib/database.js";
    import { major, formData } from './stores.js';
	import { get } from "svelte/store";
	import { background } from './stores.js';

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

	function togglePage() { currentPage = currentPage === 1 ? 2 : 1; }

</script>



<div style:background-color = {$background}>
<div style:height="100vh">

<h2>What’s your major (type the full major name out in all lowercase ie. computer science)?</h2>
<input bind:value = {$major} />

<br><br>
<h2>Are you more introverted or extroverted?</h2>

<form method="POST">
{#each ['introverted' , 'extroverted'] as mbti1}
	<label>
		<input
			type="radio"
			name="mbti1"
			bind:value={mbti1}
		/>
        {mbti1}  
	</label>
{/each}
</form>

<br>
<h2>Do you tend to focus more on what’s in front of you or on what the future might hold?</h2>

<form method="POST">
{#each ['what’s right in front of me', 'what the future might hold'] as mbti2}
	<label>
		<input
			type="radio"
			name="mbti2"
			bind:value={mbti2}
		/>
		{mbti2}
	</label>
{/each}
</form>

<br>
<h2>Are you more guided by your feelings or by logic?</h2>

<form method="POST">
{#each ['feelings', 'logic'] as mbti3}
	<label>
		<input
			type="radio"
			name="mbti3"
			bind:value={mbti3}
		/>
		{mbti3}
	</label>
{/each}
</form>

<br>
<h2>Do you prefer planning things out or just going with the flow?</h2>

<form method="POST">
{#each ['planning things out', 'just going with the flow'] as mbti4}
	<label>
		<input
			type="radio"
			name="mbti4"
			bind:value={mbti4}
		/>
		{mbti4}
	</label>
{/each}
</form>

<nav>
	<a href="/results"class = "button" on:click={onFormSubmit}>Submit</a>
</nav>
</div></div>



<!-- <button on:click={onFormSubmit}/> -->


<style>
   /* body {
		background: #DED8CC;
	} */
	* {
        margin: 0;
        padding: 0;
		line-height: 30px;
        /* border: 0; */
        /* outline: 0; */
        /* font-size: 100%; */
        /* vertical-align: baseline; */
        /* background: transparent; */
    }
	:global(body) {
    color: #425B88;
	margin: 0;
	padding: 0;
	text-align: center;
	width: 100%;
	height: 100vh;
  	}
	
    label{
        font-family: 'Arial';
    }

    h1{
        font-family: 'Arial';
    }
    h2{
        font-family: 'Serif';
		color: #263A68;
    }

	.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .button:hover {
    background-color: #0056b3;
  }
</style>
