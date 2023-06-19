import Vuex from 'vuex'

export const store = Vuex.createStore({
  strict: true,
  state: {
    userStaus: null,
    currStage: 1,
    statuses: [
      { id: '314rsafda', cmp: 'HappyFaceIcon', status: 'happy', path: 'msg' },
      {
        id: '1324dfcg',
        cmp: 'NeutralFaceIcon',
        status: 'neutral',
        path: 'contact',
      },
      {
        id: '1234dade',
        cmp: 'DissapointedFaceIcon',
        status: 'dissapointed',
        path: 'contact',
      },
    ],
  },
  getters: {
    statuses({ statuses }) {
      return statuses
    },
    userStaus({ userStaus }) {
      return userStaus
    },
    currStage({ currStage }) {
      return currStage
    },
  },
  mutations: {
    setUserStatus(state, { status }) {
      state.userStaus = status.status
    },
    setCurrStage(state, { stage }) {
      console.log('payload:', stage)
      state.currStage = stage
    },
  },
  actions: {},
})
