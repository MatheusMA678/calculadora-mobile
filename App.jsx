import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'

const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '±', '0', '.', '='];

export default class App extends Component {
  renderBtn = ({ btn, index }) => {
    return (
      <TouchableOpacity key={index} className='bg-white w-1/4 h-24 items-center justify-center rounded-full'>
        <Text className='text-black text-2xl'>{btn}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <FlatList 
        data={buttons}
        renderItem={this.renderBtn}
        numColumns={4}
      />
    )
  }
}






// import React from 'react';
// import { Text, View, StatusBar, TouchableOpacity, FlatList } from 'react-native';

// const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '±', '0', '.', '='];

// export default class App extends React.Content {
//   renderBtn = {({ btn, index }) => {
//     return (
//       <View className="flex-1 items-center justify-between bg-[#2a2a2a]">
//         <View className='bg-slate-800 w-full h-40'>

//         </View>
//         <View className='flex-row flex-wrap p-4 gap-2'>
//           {buttons.map((btn) => 
//             <TouchableOpacity key={btn} className='bg-white w-1/4 h-24 items-center justify-center rounded-full'>
//               <Text className='text-black text-2xl'>{btn}</Text>
//             </TouchableOpacity>
//           )}
//         </View>

//         <StatusBar />
//       </View>
//     );
//   }}}
