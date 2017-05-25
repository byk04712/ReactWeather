'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';

const Section = ({ style, children }) => (<View style={[styles.section, style]}>{children}</View>);

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#fff',
        borderColor: '#C8C7CC',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});

module.exports = Section;