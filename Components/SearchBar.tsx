
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

const SearchBar = () => {

  return (
    <View style={{backgroundColor: '#fff', borderRadius: 10}}>
      <TextInput 
        placeholder="Search here"
        style={{padding: 10, fontFamily: 'System'}} 
      />
      <TouchableOpacity>
        <Image 
        //  source={require('./assets/search.png')}
          style={{height: 20, width: 20}}
        />
      </TouchableOpacity>
    </View>
  );

};

export default SearchBar;