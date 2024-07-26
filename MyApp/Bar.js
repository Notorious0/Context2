import { useContext } from 'react';
import { View ,Text, Button} from 'react-native';
import { NameContext } from './NameContext';


export const Bar = () =>{
    const context = useContext(NameContext);
    return(
        <View style={{width:300,height:300,backgroundColor:"purple",borderRadius:30,justifyContent:"center",alignItems:"center",margin:5}}>
            <Text>{context.firstName}</Text>
            <Text>{context.lastname}</Text>

            <Button title='Değiştir' onPress={() =>{
                context.setFirstName("Halit");
                context.setLastname("Seyitoğlu");
            }}/>
        </View>
    );
};