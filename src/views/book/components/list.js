
import BookServer from '../../../api/book';
import { ref, onMounted, watch } from 'vue'
const useBook = name => {
    const books = ref([])

    //watch
    const getbooks = async () => {
        books.value = await BookServer.bookl(name.value)
    }

    // onMounted(() => {
    //     getbooks()
    // })
    onMounted(getbooks)

    watch(name, getbooks)

    return {
        books,
        getbooks
    }
}
export default useBook
