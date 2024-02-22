import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const SwitchScreen = () => {


    const [state, setState] = useState({
        isActive: true,
        isHungry: true,
        isHappy: true,
    });

    const {isActive, isHungry, isHappy} = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }


    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title={'Switches'} />
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isACtive</Text>
                <CustomSwitch isOn={isActive} onChange={(value => onChange(value, 'isActive'))} />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value => onChange(value, 'isHungry'))} />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value => onChange(value, 'isHappy'))} />
            </View>
            <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
});
