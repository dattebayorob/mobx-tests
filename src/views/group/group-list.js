import React from 'react';
import { inject, observer } from 'mobx-react';

const GroupList = observer(({ group }) => {
    return (
        <div>TESTE</div>
    )
})

export default inject('group')(GroupList)