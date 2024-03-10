<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";

  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;
  export let threshold = 0;
  export let once = false;
  export let createevent = false;
  let intersecting = false;

  let container;

  const dispatch = createEventDispatcher();

  onMount(() => {
    const options = {
      threshold: threshold,
      rootMargin: `${bottom}px ${left}px ${top}px ${right}px`
    };

    const observer = new IntersectionObserver((entries) => {
      intersecting = entries[0].isIntersecting;
      if (createevent) {
        dispatch("intersecting", { intersecting });
      }
      if (intersecting && once) {
        observer.unobserve(container);
      }
    }, options);
    observer.observe(container);
    return () => observer.unobserve(container);
  });
</script>

<div bind:this={container}>
  {#if (createevent = false)}
    <slot {intersecting} />
  {/if}
</div>
