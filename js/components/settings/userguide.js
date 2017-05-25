/**
 * @flow
 */

'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const UserGuide = () => (
    <View style={styles.container}>
        <Text style={styles.text}>User Guide</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 44
    }
});

UserGuide.navigationOptions = {
    title: 'User Guide'
};

module.exports = UserGuide;
