import { computed, configure } from 'mobx';
import { GenericStore } from './generic.store';

configure({ enforceActions: 'observed' })

const initialState = {
    group: {},
    groups: []
}

export class GroupStore extends GenericStore {

    constructor(){
        super(initialState)
    }

    @computed
    get isEdit(){
        return !!this.group.id;
    }
}

export default new GroupStore();