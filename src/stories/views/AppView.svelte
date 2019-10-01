<HeaderView />
{#each clubs as club}
<ItemView {...club} />
{/each}

<script>
  import HeaderView from './HeaderView.svelte';
  import ItemView from './ItemView.svelte';

  export let clubs;
</script>
