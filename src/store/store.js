import Vuex from 'vuex'
import { surveyService } from '../services/survey.service.local'
export const store = Vuex.createStore({
  strict: true,
  state: {
    userStaus: null,
    surveys: [],
    currStage: 1,
    statuses: [
      {
        id: '314rsafda',
        cmp: 'HappyFaceIcon',
        status: 'happy',
        path: 'msg',
        rate: 3,
      },
      {
        id: '1324dfcg',
        cmp: 'NeutralFaceIcon',
        status: 'neutral',
        path: 'contact',
        rate: 2,
      },
      {
        id: '1234dade',
        cmp: 'DissapointedFaceIcon',
        status: 'dissapointed',
        path: 'contact',
        rate: 1,
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
    surveys({ surveys }) {
      const surveysCopy = JSON.parse(JSON.stringify(surveys))
      return surveysCopy.sort((a, b) => b.createdAt - a.createdAt)
    },
  },
  mutations: {
    addSurvey(state, { survey }) {
      state.surveys.push(survey)
    },
    setSurveys(state, { surveys }) {
      state.surveys = surveys
    },
    setUserStatus(state, { status }) {
      state.userStaus = status.status
    },
    setCurrStage(state, { stage }) {
      console.log('payload:', stage)
      state.currStage = stage
    },
  },
  actions: {
    async addSurvey(context, { survey }) {
      try {
        survey = await surveyService.save(survey)
        context.commit({
          type: 'addSurvey',
          survey,
        })
        return survey
      } catch (err) {
        console.log('surveyStore: Error in addSurvey', err)
        throw err
      }
    },
    async loadSurveys(context) {
      try {
        const surveys = await surveyService.query()
        context.commit({ type: 'setSurveys', surveys })
      } catch (err) {
        console.log('surveyStore: Error in loadSurvey', err)
        throw err
      }
    },
  },
})
