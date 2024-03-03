<script>
    import {major, formData } from './stores.js';
    var mbti1 = "";
    var mbti2 = "";
    var mbti3 = "";
    var mbti4 = "";

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

    function onFormSubmit()
    {
        console.log("submitting form to store");
        formData.update((_)=> {
            return {
                major: major,
                mbti1: mbti1,
                mbti2: mbti2,
                mbti3: mbti3,
                mbti4: mbti4
            }
        });
    }
</script>

<h1>What’s your major (eg. computer science)?</h1>
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
