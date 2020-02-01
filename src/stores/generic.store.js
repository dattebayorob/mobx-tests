import { extendObservable, action } from 'mobx';

export class GenericStore {
    constructor(initialState){
        const defaultProperties = this.defaultProperties(initialState)
        const defaultActions = this.defaultActions()
        const { setters, actions } = this.generateSetters(initialState)
        extendObservable(this, { ...initialState, ...defaultProperties, ...setters }, { ...defaultActions, ...actions })
    }

    defaultProperties = (initialState) => ({
        isLoading: false,
        setLoading: (loading) => this.loading = loading,
        reset: this.reset(initialState),
    })

    defaultActions = () => ({
        setLoading: action,
        reset: action
    })

    generateSetters = (initialState) => {
        const setters = {}
        const actions = {}
        Object.keys(initialState).forEach(key => {
            const setKey = `set${capitalize(key)}`
            setters[setKey] = (value) => this[key] = value
            actions[setKey] = action
        })
        return { setters, actions }
    }

    reset = (initialState) => () => Object.keys(initialState).forEach(key => this[key] = initialState[key])
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)