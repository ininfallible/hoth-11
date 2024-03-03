<script>
  import { formData } from '../stores.js';
  import { onMount } from 'svelte';

  // let data = {foo:"bar", baz: "qux"};
  let data = {};
  let items = [];

  formData.subscribe((value) => {
    data = value;
  }); 

  // onMount(() => {
  //   data = get(formData)
  // });

  $: for (let d in data)
  {
    console.log("Updating items based on data");
    if (data.hasOwnProperty(d))
      items.push({"key": d ,"value": data[d]});
  }

</script>

<!-- <p>{data.foo}</p> -->
{#each items as item}
  <div>
    <h2>{item.key}</h2>
    <p>{item.value}</p>
  </div>
{/each}

