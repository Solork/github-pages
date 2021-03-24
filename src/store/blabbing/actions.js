// import Axios from 'axios'

const setTestList = async (context, payload) => {
    context.commit('SET_TEST_LIST', payload)
}

// const setDetailResult = async (context, payload) => {
//     let url = payload.url
//     let response = await Axios.get(url, {
//         params: payload
//     })
//     context.commit('SET_DETAIL_RESULT', response.data)
//     return response
// }

const setDetailResultTabs = async(context, payload) => {
    context.commit('SET_DETAIL_RESULT_TABS', payload)
}

export {
    setDetailResultTabs,
    setTestList
};