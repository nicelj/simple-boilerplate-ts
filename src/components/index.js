/**
 * Created by Administrator on 2017/3/21.
 */
import React from 'react';
import template from '../config/template';
import type from './type';

const Index = ({state, actions})=> {
    const {value} = state.index;
    let typea:type = {
        name: 'typea',
        value: 888
    }
    return (
        <div>
            <p>
                this is index route.value is  {value}
            </p>
            <input type="button" value="button" onClick={()=>{actions.index(4)}}/>
            <div>
                {typea.value}
            </div>
        </div>
    )
}
export default template(Index);

