<div class="club">
  <div>{name}</div>
  <div>12/23</div>
  <ul>
    {#each entertainers as entertainer}
      <li><img src={entertainer.src} alt={entertainer.alt} style="width: 48px;" /></li>
    {/each}
  </ul>
  <div>Closes in 8 hours</div>
  <div>3.4 km</div>
</div>

<script>
  export let name;
  export let entertainers = [];
</script>

<style>
  li {
    display: inline-block;
    list-style: none;
  }

  .club {
    border: 1px solid;
  }
</style>
