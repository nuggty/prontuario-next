import { ExamType, PatientType, TreatmentType, TypeExamType, UserType } from "./routesProps"

let API_URL: string

API_URL = process.env.REACT_APP_API_ROUTE || ''

export const USER: UserType = {
    LOGIN: `${API_URL}/user/authenticate`,
    REGISTER: `${API_URL}/user/register`
}

export const PATIENT: PatientType = {
    CREATE: `${API_URL}/patient/create`,
    GETALL: `${API_URL}/patient/all`,
    GET: `${API_URL}/patient/:id`,
    UPDATE: `${API_URL}/patient/:id`,
    REMOVE: `${API_URL}/patient/:id`
}

export const TREATMENT: TreatmentType = {
    CREATE: `${API_URL}/treatment/create`,
    GETALL: `${API_URL}/treatment`,
    GET: `${API_URL}/treatment/:id`,
    UPDATE: `${API_URL}/treatment/:id`,
    REMOVE: `${API_URL}/treatment/:id`
}

export const EXAM: ExamType = {
    CREATE: `${API_URL}/exam/create`,
    GETALL: `${API_URL}/exam`,
    GET: `${API_URL}/exam/:id`,
    UPDATE: `${API_URL}/exam/:id`,
    REMOVE: `${API_URL}/exam/:id`
}

export const TYPE_EXAM: TypeExamType = {
    CREATE: `${API_URL}/typeexam/create`,
    GETALL: `${API_URL}/typeexam`,
    GET: `${API_URL}/typeexam/:id`,
    UPDATE: `${API_URL}/typeexam/:id`,
    REMOVE: `${API_URL}/typeexam/:id`
}