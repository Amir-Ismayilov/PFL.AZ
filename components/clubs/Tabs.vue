<template>
  <div>
    <div class="tabs">
      <slot name="headers"></slot>
    </div>

    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs"
}
</script>

<style scoped>
.tabs {
  display: flex;
  border-bottom: 2px solid #e5e5e5;
  margin-bottom: 1rem;
}

.tab-content {
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
</style>
