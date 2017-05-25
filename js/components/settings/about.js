/**
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Alert
} from 'react-native';

import {connect} from 'react-redux';

import defaultStyles from './styles';
import {clearAllLocationData} from '../../actions';

type Props = {
    dispatch: any;
    navigator: any;
};

class AboutSettings extends Component {
    props: any;

    static navigationOptions = {
        title: 'About'
    };

    constructor(props: any) {
        super(props);

        (this: any).clearAllData = this.clearAllData.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>About</Text>
                <TouchableHighlight style={[defaultStyles.redButton, {marginTop: 20}]} onPress={this.clearAllData}>
                    <Text style={defaultStyles.buttonText}>Clear all data</Text>
                </TouchableHighlight>
            </View>
        );
    }

    clearAllData() {
        Alert.alert('', 'Are you sure you want to delete all app data?',
            [
                {text: 'Delete', onPress: () => {
                    this.props.dispatch(clearAllLocationData());
                    this.props.navigation.goBack();
                }},
                {text: 'Cancel'}
            ]);
    }
}

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

module.exports = connect()(AboutSettings);
