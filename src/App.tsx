import React from 'react';
import style from './App.module.less';
import { Button } from 'antd';

function App() {
    return (
        <div className={style.blue}>
            <Button type="primary">Primary Button</Button>
        </div>
    );
}

export default App;
