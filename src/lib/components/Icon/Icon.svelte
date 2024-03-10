<script lang="ts">
  export let icon: string,
    size = 24,
    strokeWidth = 0;
</script>

<svg
  class="icon"
  width={size}
  height={size}
  style="
  stroke-width:{strokeWidth}px;
  "
>
  <use xlink:href="#{icon}" />
</svg>

<style lang="postcss">
  .icon {
    overflow: hidden;
    vertical-align: middle;
    object-fit: contain;
    transform-origin: center center;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all 0.3s cubic-bezier(0.17, 0.935, 0.305, 1);
  }
</style>
