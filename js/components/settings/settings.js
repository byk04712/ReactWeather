/**
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';

import SectionTitle from './sectiontitle';
import Section from './section';
import Separator from './separator';
import NavigationButtonRow from './navigationbuttonrow';


class Settings extends Component {
    props: Props;

    static navigationOptions = {
        title: 'Settings'
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='default' backgroundColor='#000'/>
                <SectionTitle text={'HELP'}/>

                <Section>
                    <NavigationButtonRow title='User Guide' routeName='UserGuide' navigation={this.props.navigation}/>
                    <Separator  />
                    <NavigationButtonRow title='About' routeName='AboutSettings' navigation={this.props.navigation}/>
                </Section>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f8f8f8'
    }
});

module.exports = Settings;
