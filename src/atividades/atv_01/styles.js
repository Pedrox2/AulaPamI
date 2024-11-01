import {StyleSheet} from 'react-native';
import { RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#a8e1ff',
        padding: 8,
    },
    titulo: {
        //fontSize: 20,
        fontSize: RFValue(20),
        color: '#fafafa',
        fontWeight: 'bold',
        margintop: 16,
    },
    texto: {
        fontSize: 20,
        

    },
});

export default styles;