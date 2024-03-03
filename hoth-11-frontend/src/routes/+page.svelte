
<script>
    import {major} from './stores.js';
    let mbti1 = [];
    let mbti2 = [];
    let mbti3 = [];
    let mbti4 = [];

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<h1>What’s your major (ie. computer science)?</h1>
<input bind:value = {$major} />

<h2>Are you more introverted or extroverted?</h2>

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

<h2>Do you tend to focus more on what’s in front of you or on what the future might hold?</h2>

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

<h2>Are you more guided by your feelings or by logic?</h2>

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

<h2>Do you prefer planning things out or just going with the flow?</h2>

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