<script>
  import { formData} from '../stores.js';
  import { onMount } from 'svelte';
  import {get} from 'svelte/store';

	import { initializeApp } from "firebase/app";
	import { collection, getFirestore, doc, setDoc, getDocs  } from "firebase/firestore";
	import { query, where } from "firebase/firestore";
  const descriptions = {dirt: "Shower Frequency", mbti1: "Introversion/Extroversion", mbti4: "Spontaneous/Longterm Planning",
  mbti3: "Feeings/Logic", mbti2: "Present/Future Focus", diff: "Major difficulty", like: "Major satisfaction", 
  dorm: "Time in dorm", soc: "Preferred Social Media", intr: "Cultured in the Internet", pet: "Preferred pet",
  music: "Favorite music genre", food: "Favorite Hill food", caf: "Caffeine source", typ: "Typing speed", major: "Major" };

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
  var items = [];

  formData.subscribe((value) => {
    data = value;
  }); 

  let myData = get(formData);
  let majorToQuery = data.major;


    async function getData () {
      const dbRef = collection(database, "formResults");
      const q = query(dbRef, where("major", "==", majorToQuery));
      console.log(q);

      const querySnapshot = await getDocs(q);

      var counts = {};
      querySnapshot.forEach((doc) => {
        data = doc.data();
        console.log("myData", myData);
        for (var category in myData)
        {
          if (!(category === undefined) && myData[category] && data[category])
          {
            if (myData[category] == data[category])
            {
              counts[category] = (counts[category]+1) || 1 ;
            }
          }
        }
      });

      let total = counts["major"];
      $: for (let d in data)
      {
        items = [...items];
        if (!counts[d]) { counts[d] = 0; }
        items.push({"key": descriptions[d] ,"value": (counts[d] * 100 / total).toFixed(2)});
      }
    }
getData();
</script>

<h1>The following percentage of other students in your major shared the same opinion as you!</h1>


{#each items as item}
  <div>
    <h2>{item.key}</h2>
    <p>{item.value} %</p>
  </div>
{/each}
