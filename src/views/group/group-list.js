import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

const GroupList = observer(({ group: store }) => {
    
    useEffect(() => {
        setTimeout(() => {
            store.setGroup({...store.group, id: 45});
        }, 2000)
    }, [store])

    return (
        <div>
            <h3>{`Group ${store.isEdit ? ' - '+store.group.id : ''}`}</h3>
            <input
                type="text" name="description"
                value={store.group.description || ''}
                onChange={(e) => store.setGroup({...store.group, description: e.target.value})} />
            <button value="Limpar" onClick={() => store.reset()} > Limpar </button>
        </div>
    )
})

export default inject('group')(GroupList)