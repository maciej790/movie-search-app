import { reactive, toRefs } from 'vue';

export default function useFetch() {
  const state = reactive({
    loading: false,
    status: 'start',
    searchResults: [],
  });

  const getData = async (query) => {
    state.loading = true;
    try {
      const response = await fetch(query);
      const data = await response.json();
      state.searchResults = data;
      if (state.searchResults) {
        state.status = 'next';
      } else {
        state.status = 'error';
      }
    } catch (err) {
      console.log(err);
      state.status = 'error';
    } finally {
      state.loading = false;
    }
  };

  return {
    ...toRefs(state),
    getData,
  };
}
