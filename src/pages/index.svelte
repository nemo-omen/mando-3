<script>
  import { onMount } from 'svelte';
  import { metatags } from '@roxi/routify';
  import Whatever from '$components/Whatever.svelte';
  metatags.title = 'My Routify app';
  metatags.description = 'Description coming soon...';

  async function getApi() {
    const response = await fetch('http://localhost:8080/users');
    if (!response.ok) {
      console.error('Problem connecting to API: ', response.status, response.statusText);
    }
    const data = await response.json();
    console.log(data);
  }
  onMount(() => {
    getApi();
  });
</script>

<main>
  <h1>Hello, Routify</h1>
  <Whatever />
</main>

<style>
  main {
    width: clamp(50%, 70vw, 100%);
    margin: 0 auto;
    text-align: center;
    background-color: #dadada;
  }
</style>
