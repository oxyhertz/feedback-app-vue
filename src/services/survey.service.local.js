import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'survey'

export const surveyService = {
  query,
  getById,
  save,
  remove,
  getEmptySurvey,
  addSurveyMsg,
}
window.cs = surveyService

async function query(filterBy = { txt: '', price: 0 }) {
  var surveys = await storageService.query(STORAGE_KEY)
  if (!surveys || !surveys.length) {
    await storageService.post(STORAGE_KEY, {
      createdAt: 1682524800000, // corresponds to '2023-05-25T12:00:00Z'
      branch: 'ראשון לציון',
      rate: 2,
    })
    await storageService.post(STORAGE_KEY, {
      createdAt: 1681848300000, // corresponds to '2023-05-18T09:45:00Z'
      branch: 'כרמיאל',
      rate: 3,
    })
    await storageService.post(STORAGE_KEY, {
      createdAt: 1681580400000, // corresponds to '2023-05-15T17:00:00Z'
      branch: 'נתניה',
      rate: 2,
    })
    await storageService.post(STORAGE_KEY, {
      createdAt: 1681166100000, // corresponds to '2023-05-10T14:15:00Z'
      branch: 'כפר ורדים',
      rate: 1,
    })
    await storageService.post(STORAGE_KEY, {
      createdAt: 1680751800000, // corresponds to '2023-05-05T11:30:00Z'
      branch: 'רמת השרון',
      rate: 3,
    })
    surveys = await storageService.query(STORAGE_KEY)
  }
  return surveys
}

function getById(surveyId) {
  return storageService.get(STORAGE_KEY, surveyId)
}

async function remove(surveyId) {
  await storageService.remove(STORAGE_KEY, surveyId)
}

async function save(survey) {
  var savedSurvey
  if (survey._id) {
    savedSurvey = await storageService.put(STORAGE_KEY, survey)
  } else {
    // Later, owner is set by the backend
    // survey.owner = userService.getLoggedinUser()
    savedSurvey = await storageService.post(STORAGE_KEY, survey)
  }
  return savedSurvey
}

async function addSurveyMsg(surveyId, txt) {
  // Later, this is all done by the backend
  const survey = await getById(surveyId)
  if (!survey.msgs) survey.msgs = []

  const msg = {
    id: utilService.makeId(),
    by: userService.getLoggedinUser(),
    txt,
  }
  survey.msgs.push(msg)
  await storageService.put(STORAGE_KEY, survey)

  return msg
}

function getEmptySurvey() {
  return {
    createdAt: Date.now(),
    branch: '',
    rate: 0,
  }
}

// TEST DATA
// ;(async ()=>{
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Karov 1', price: 180})
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 240})
// })()
