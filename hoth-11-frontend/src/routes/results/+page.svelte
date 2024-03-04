<script>
  import { formData } from '../stores.js';
  import { onMount } from 'svelte';


	import { initializeApp } from "firebase/app";
	import { collection, getFirestore, doc, setDoc, getDocs } from "firebase/firestore";
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

  // let data = {foo:"bar", baz: "qux"};
  let data = {};
  let items = [];

  formData.subscribe((value) => {
    data = value;
  }); 

  // onMount(() => {
  //   data = get(formData)
  // });
    async function getData () {
      const dbRef = collection(database, "formResults");
      const q = query(dbRef, where("major", "==", "Poopy Rachel"));
      console.log(q);

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }

  $: for (let d in data)
  {
    console.log("Updating items based on data");
    if (data.hasOwnProperty(d))
      items.push({"key": d ,"value": data[d]});
  }

getData();

</script>

<!-- <p>{data.foo}</p> -->
{#each items as item}
  <div>
    <h2>{item.key}</h2>
    <p>{item.value}</p>
  </div>
{/each}

