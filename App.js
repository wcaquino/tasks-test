import React from 'react'
import { Text, StyleSheet } from 'react-native'


export default () => <Text style={estilo.alinhamento}>Pimeiro componente</Text>

const estilo = StyleSheet.create(
    {
        alinhamento: {
            textAlign: "center",
            textAlignVertical: "center",
            flex: 1
        }
    }
)