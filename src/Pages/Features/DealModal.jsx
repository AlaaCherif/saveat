import { StyleSheet, Text, View, Modal } from 'react-native';
import React, { useContext } from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import AuthContext from '../../context/AuthProvider';

const DealModal = ({ modal, setModal, showModal, setShowModal }) => {
  const { auth } = useContext(AuthContext);
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#4DAAAA' }}>
          Make a deal
        </Text>
        <Input
          label='Phone Number'
          value={auth.phoneNumber && auth.phoneNumber.toString()}
        />
        <Input label='Address' value={auth.address && auth.address} />
        <View style={{ height: 20 }} />
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#4DAAAA' }}>
          Order Summary
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <Text>{modal.product}</Text>
          <Text>x1</Text>
          <Text>{modal.newPrice}</Text>
        </View>
        <Button title='Submit' onPress={() => setShowModal(false)} />
        <Button
          title='Close'
          backgroundColor='white'
          color='black'
          onPress={() => setShowModal(false)}
        />
      </View>
    </Modal>
  );
};

export default DealModal;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    minHeight: 400,
    backgroundColor: 'white',
    marginTop: '50%',
    borderRadius: 20,
    paddingVertical: 20,
  },
});
