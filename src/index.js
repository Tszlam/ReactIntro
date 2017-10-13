import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';
import ClickCounter from './ClickCounter';
import Welcome from './Welcome';

const _html = (
    <div>
        <Welcome name="Lee" vail='true'/>
        <Welcome />
        <Welcome name="Lee" vail={false}/>
        <ClickCounter/>
        <Clock/>
        <Clock updateFrq="2"/>
        <Clock updateFrq="3"/>
    </div>
);
ReactDOM.render(
    _html,
    document.getElementById('root')
);