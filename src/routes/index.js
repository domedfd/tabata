import React from 'react';
import {NavigationContainer} from "@react-navigation/native"

import Sview from '../components/Sview'
import Stack from '../routes/Stack'
export default props =>(
    <Sview style={{flex: 1}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </Sview>
)