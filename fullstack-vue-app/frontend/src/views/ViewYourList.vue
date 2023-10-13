<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<!-- ViewYourList.vue -->
<template>
    <div class="list-container">
        // eslint-disable-next-line vue/attribute-hyphenation
        <ListView :listItems="listItems" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ListView from '@/components/ListView.vue'

export default defineComponent({
    name: 'ViewYourList',
    components: {
        ListView,
    },
    setup() {
        // Fetch the list items from the database here
        const listItems = ref([])

        // TODO: Fetch data from the database and populate listItems

        return {
            listItems,
        }
    },
})
</script>

<style scoped>
.list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
}
</style>
