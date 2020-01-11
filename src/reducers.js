import {
    CHANGE_PROJECT_FIELD,
    CHANGE_LANGUAGE_FIELD,
    REQUEST_PROJECTS_PENDING,
    REQUEST_PROJECTS_SUCCESS,
    REQUEST_PROJECTS_FAILED,
    REQUEST_PROJECTS_SUCCESS_NEXT,
    REQUEST_PROJECTS_SUCCESS_PREV
} from './constants';

const initialProjectSearch = {
    project: '',
};

const initialLanguageSearch = {
    language: ''
};

const initialStateProjects = {
    isPending: false,
    hasFailed: false,
    error: '',
    projects: [],
    page: 1
}

export const projectSearchField = (state = initialProjectSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_PROJECT_FIELD:
            return { ...state, project: action.payload };
        default:
            return state;
    }
}

export const languageSearchField = (state = initialLanguageSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_LANGUAGE_FIELD:
            return { ...state, language: action.payload };
        default:
            return state;
    }
}

export const requestProjects = (state = initialStateProjects, action = {}) => {
    switch (action.type) {
        case REQUEST_PROJECTS_PENDING:
            return { ...state, isPending: true }
        case REQUEST_PROJECTS_SUCCESS_NEXT:
            return { ...state, projects: action.payload, isPending: false, page: state.page + 1 }
        case REQUEST_PROJECTS_SUCCESS_PREV:
            return { ...state, projects: action.payload, isPending: false, page: state.page - 1 }
        case REQUEST_PROJECTS_SUCCESS:
            return { ...state, projects: action.payload, isPending: false }
        case REQUEST_PROJECTS_FAILED:
            return { ...state, error: action.payload, isPending: false, requestHasFailed: true }
        default:
            return state
    }
}