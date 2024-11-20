// import React, { useState } from 'react';
// import { View, Text, TextInput, Switch, Button, StyleSheet, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const DeliveryForm = () => {
//   // State for the form
//   const [goodsInfo, setGoodsInfo] = useState({
//     type: '',
//     numberOfItems: '',
//     weight: '',
//     value: '',
//     perishable: false,
//   });
  
//   const [senderInfo, setSenderInfo] = useState({
//     fullName: '',
//     address: '',
//     email: '',
//     phone: '',
//   });

//   const [receiverInfo, setReceiverInfo] = useState({
//     fullName: '',
//     address: '',
//     email: '',
//     phone: '',
//   });

//   const handleGoodsInfoChange = (key, value) => {
//     setGoodsInfo({ ...goodsInfo, [key]: value });
//   };

//   const handleSenderInfoChange = (key, value) => {
//     setSenderInfo({ ...senderInfo, [key]: value });
//   };

//   const handleReceiverInfoChange = (key, value) => {
//     setReceiverInfo({ ...receiverInfo, [key]: value });
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>What are you delivering</Text>
//       <Text style={styles.subtitle}>
//         Correctly enter the details of your item, so we can organize and ship it seamlessly for you.
//       </Text>

//       <View style={styles.section}>
//         <Text style={styles.label}>Goods info</Text>
//         <Switch
//           value={goodsInfo.perishable}
//           onValueChange={(value) => handleGoodsInfoChange('perishable', value)}
//           style={styles.switch}
//         />
//         <Text style={styles.switchLabel}>Perishable items</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Select item type"
//           value={goodsInfo.type}
//           onChangeText={(value) => handleGoodsInfoChange('type', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Number of items"
//           keyboardType="numeric"
//           value={goodsInfo.numberOfItems}
//           onChangeText={(value) => handleGoodsInfoChange('numberOfItems', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Weight"
//           keyboardType="numeric"
//           value={goodsInfo.weight}
//           onChangeText={(value) => handleGoodsInfoChange('weight', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Total value of item"
//           keyboardType="numeric"
//           value={goodsInfo.value}
//           onChangeText={(value) => handleGoodsInfoChange('value', value)}
//         />
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.label}>Sender's info (Pickup)</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           value={senderInfo.fullName}
//           onChangeText={(value) => handleSenderInfoChange('fullName', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Address"
//           value={senderInfo.address}
//           onChangeText={(value) => handleSenderInfoChange('address', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           keyboardType="email-address"
//           value={senderInfo.email}
//           onChangeText={(value) => handleSenderInfoChange('email', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number"
//           keyboardType="phone-pad"
//           value={senderInfo.phone}
//           onChangeText={(value) => handleSenderInfoChange('phone', value)}
//         />
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.label}>Receiver's info (Drop-off)</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           value={receiverInfo.fullName}
//           onChangeText={(value) => handleReceiverInfoChange('fullName', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Address"
//           value={receiverInfo.address}
//           onChangeText={(value) => handleReceiverInfoChange('address', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           keyboardType="email-address"
//           value={receiverInfo.email}
//           onChangeText={(value) => handleReceiverInfoChange('email', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number"
//           keyboardType="phone-pad"
//           value={receiverInfo.phone}
//           onChangeText={(value) => handleReceiverInfoChange('phone', value)}
//         />
//       </View>

//       <Button title="Submit" onPress={() => console.log({ goodsInfo, senderInfo, receiverInfo })} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: '#888',
//   },
//   section: {
//     marginBottom: 30,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   switch: {
//     marginVertical: 10,
//   },
//   switchLabel: {
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 15,
//   },
// });

// export default DeliveryForm;
import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeliveryForm = () => {
  // State for the form
  const [goodsInfo, setGoodsInfo] = useState({
    type: '',
    numberOfItems: '',
    weight: '',
    value: '',
    perishable: false,
  });
  
  const [senderInfo, setSenderInfo] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
  });

  const [receiverInfo, setReceiverInfo] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleGoodsInfoChange = (key, value) => {
    setGoodsInfo({ ...goodsInfo, [key]: value });
  };

  const handleSenderInfoChange = (key, value) => {
    setSenderInfo({ ...senderInfo, [key]: value });
  };

  const handleReceiverInfoChange = (key, value) => {
    setReceiverInfo({ ...receiverInfo, [key]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#333" />
        <Text style={styles.headerTitle}>Delivery</Text>
        <Icon name="arrow-forward" size={24} color="#333" />
      </View>

      <Text style={styles.title}>What are you delivering</Text>
      <Text style={styles.subtitle}>
        Correctly enter the details of your item, so we can organize and ship it seamlessly for you.
      </Text>

      <View style={styles.section}>
        <View style={styles.perishableRow}>
          <Text style={styles.label}>Goods info</Text>
          <View style={styles.switchContainer}>
            <Switch
              value={goodsInfo.perishable}
              onValueChange={(value) => handleGoodsInfoChange('perishable', value)}
              trackColor={{ false: "#767577", true: "#D92D20" }}
              thumbColor={goodsInfo.perishable ? "#D92D20" : "#f4f3f4"}
            />
            <Text style={styles.perishableText}>Perishable items</Text>
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Select item type"
          value={goodsInfo.type}
          onChangeText={(value) => handleGoodsInfoChange('type', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of items"
          keyboardType="numeric"
          value={goodsInfo.numberOfItems}
          onChangeText={(value) => handleGoodsInfoChange('numberOfItems', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Weight"
          keyboardType="numeric"
          value={goodsInfo.weight}
          onChangeText={(value) => handleGoodsInfoChange('weight', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Total value of item"
          keyboardType="numeric"
          value={goodsInfo.value}
          onChangeText={(value) => handleGoodsInfoChange('value', value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Sender's info (Pickup)</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={senderInfo.fullName}
          onChangeText={(value) => handleSenderInfoChange('fullName', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={senderInfo.address}
          onChangeText={(value) => handleSenderInfoChange('address', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={senderInfo.email}
          onChangeText={(value) => handleSenderInfoChange('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={senderInfo.phone}
          onChangeText={(value) => handleSenderInfoChange('phone', value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Receiver's info (Drop-off)</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={receiverInfo.fullName}
          onChangeText={(value) => handleReceiverInfoChange('fullName', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={receiverInfo.address}
          onChangeText={(value) => handleReceiverInfoChange('address', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={receiverInfo.email}
          onChangeText={(value) => handleReceiverInfoChange('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={receiverInfo.phone}
          onChangeText={(value) => handleReceiverInfoChange('phone', value)}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={() => console.log({ goodsInfo, senderInfo, receiverInfo })}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#777',
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  perishableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  perishableText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#D92D20',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default DeliveryForm;
