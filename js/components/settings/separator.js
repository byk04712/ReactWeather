'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = () => (<View style={styles.separator}/>);

const styles = StyleSheet.create({
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#C8C7CC',
        marginLeft: 14
    }
});

module.exports = Separator;