/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    title: string,
    routeName: string,
    navigation: any,
    style: any
};

class NavigationButtonRow extends Component {

    props:Props;

    constructor(props:Props) {
        super(props);
    }

    render() {
        const { navigation, routeName, title } = this.props;
        return (
            <TouchableHighlight
                style={[styles.navigationButtonRow, this.props.style]}
                underlayColor='#C8C7CC'
                onPress={() => navigation.navigate(routeName, { title })}>
                <View style={styles.navigationButtonView}>
                    <Text style={styles.navigationButtonText}>{title}</Text>
                    <Icon name='ios-arrow-forward' size={20} color='#C7C7CC'/>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    navigationButtonRow: {
        height: 44,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    navigationButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 14,
        paddingLeft: 14
    },
    navigationButtonText: {
        fontSize: 16
    }
});

module.exports = NavigationButtonRow;