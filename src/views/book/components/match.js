

import { ref, computed  } from 'vue'
const useMatchbook = (book,name) => {
    const matched = ref(name)
    // console.log(book.value, matched.value)
    const matchbooks = computed(() => {
        return book.value.filter(b => b.name.includes(matched.value))
    })


    return {
        matched,
        matchbooks
    }
}
export default useMatchbook
