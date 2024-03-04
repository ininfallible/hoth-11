<script>
    import { major, formData } from './stores.js';
	import { get } from "svelte/store";
	import { background } from './stores.js';

	import { initializeApp } from "firebase/app";
	import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
	import { query, where } from "firebase/firestore";

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
	var diff = 0;
	var like = 0;
	var dorm = "";
	var soc = "";
	var intr = "";
	var pet = "";
	var music = "";
	var dirt = "";
	var food = "";
	var caf = "";
	var typ = "";

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

    async function onFormSubmit()
    {
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
                mbti4: mbti4,
				diff: diff,
				like: like,
				dorm: dorm,
				soc: soc,
				intr: intr,
				pet: pet,
				music: music,
				dirt: dirt,
				food: food,
				caf: caf,
				typ: typ
            }
        });

		const collectionRef = collection(database, 'formResults');
		try {
			var stuff = get(formData);

			let id = Math.floor(Math.random() * 1000000).toString();
			await setDoc(doc(database, "formResults", id), stuff);
		} catch (error) {
			console.error('Error adding document: ', error);
		}
    }

	function togglePage() { currentPage = currentPage === 1 ? 2 : 1; }

</script>



<div style:background-color = {$background}>
<div style:height="100%">
<div style:line-height="40px">

	<h1>
		Major Mangler
	</h1>
	<br>

<h2>What’s your major (type the full major name out in all lowercase ie. computer science)?</h2>
<input bind:value = {$major} />

<br><br>
<h2>Are you more introverted or extroverted?</h2>

<form method="POST">
{#each ['introverted' , 'extroverted'] as opt}
	<label>
		<input
			type="radio"
			name={opt}
			bind:group={mbti1}
			value={opt}
		/>
        {opt}  
	</label>
{/each}
</form>

<br>
<h2>Do you tend to focus more on what’s in front of you or on what the future might hold?</h2>

<form method="POST">
{#each ['what’s right in front of me', 'what the future might hold'] as opt}
	<label>
		<input
			type="radio"
			name="mbti2"
			bind:group={mbti2}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>Are you more guided by your feelings or by logic?</h2>

<form method="POST">
{#each ['feelings', 'logic'] as opt}
	<label>
		<input
			type="radio"
			name="mbti3"
			bind:group={mbti3}
			value={opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>Do you prefer planning things out or just going with the flow?</h2>

<form method="POST">
{#each ['planning things out', 'just going with the flow'] as opt}
	<label>
		<input
			type="radio"
			name="mbti4"
			bind:group={mbti4}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>On a scale from 1-5, how difficult do you think your major is?</h2>

<form method="POST">
{#each [1, 2, 3, 4, 5] as opt}
	<label>
		<input
			type="radio"
			name="diff"
			bind:group={diff}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>On a scale from 1-5, how much do you like your major?</h2>

<form method="POST">
{#each [1, 2, 3, 4, 5] as opt}
	<label>
		<input
			type="radio"
			name="like"
			bind:group={like}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>How  often are you in your dorm (percentage)?</h2>

<form method="POST">
{#each ['Less than 10%', '10-30%', '30-50%', '50-70%', '70-90%', 'Over 90%'] as opt}
	<label>
		<input
			type="radio"
			name="dorm"
			bind:group={dorm}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>What is your most used social media app?</h2>

<form method="POST">
{#each ['Instagram', 'Twitter', 'Reddit', 'Snapchat', 'LinkedIn', 'Facebook', 'Tiktok'] as opt}
	<label>
		<input
			type="radio"
			name="soc"
			bind:group={soc}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>On a scale from 1-5, how in tune with Internet culture would you say you are?</h2>

<form method="POST">
{#each [1, 2, 3, 4, 5] as opt}
	<label>
		<input
			type="radio"
			name="intr"
			bind:group={intr}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>Are you more of a cat person or a dog person?</h2>

<form method="POST">
{#each ['Cat', 'Dog'] as opt}
	<label>
		<input
			type="radio"
			name="pet"
			bind:group={pet}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>What is your favorite music genre?</h2>

<form method="POST">
{#each ['EDM', 'Pop', 'RnB', 'Rap', 'Alt/Indie', 'Country', 'OSTs', 'K-pop', 'Rock'] as opt}
	<label>
		<input
			type="radio"
			name="music"
			bind:group={music}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>How often do you shower?</h2>

<form method="POST">
{#each ['More than 2 times a day', '1-2 times a day', 'Once every other day', '1-3 times a week', 'Once every other week', 'Once a month'] as opt}
	<label>
		<input
			type="radio"
			name="dirt"
			bind:group={dirt}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>What is your favorite place to eat on the Hill?</h2>

<form method="POST">
{#each ['B Plate', 'De Neve', 'Epicuria', 'Rende', 'Feast', 'B Cafe', 'The Study', 'The Drey', 'Food trucks'] as opt}
	<label>
		<input
			type="radio"
			name="food"
			bind:group={food}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>What is your favorite form of caffeine?</h2>

<form method="POST">
{#each ['Coffee', 'Tea', 'Energy drinks', 'None'] as opt}
	<label>
		<input
			type="radio"
			name="caf"
			bind:group={caf}
			value = {opt}
		/>
		{opt}
	</label>
{/each}
</form>

<br>
<h2>What is your typing speed?</h2>

<form method="POST">
{#each ['Less than 40 wpm', '40-60 wpm', '61-80wpm', '81-100 wpm', 'More than 100 wpm'] as opt}
	<label>
		<input
			type="radio"
			name="typ"
			bind:group={typ}
			value={opt}
		/>
		{opt}
	</label>
{/each}
</form>
<br>


<nav>
	<a href="/results"class = "button" on:click={onFormSubmit}>Submit</a>
</nav>
</div></div> </div>



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
	font-family: 'Comic Sans MS', 'Comic Sans';
	background-image: url("./rainbow.jpg");
	border: 40px solid #DED8CC;
    color: black;
	margin: 0;
	padding: 0;
	text-align: center;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
  	}
	
    label{
        font-family: 'Comic Sans MS', 'Comic Sans';
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
