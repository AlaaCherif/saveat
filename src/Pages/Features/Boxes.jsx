import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import FeaturePage from './FeaturePage';
import { getAllBoxes } from './../../api/api.box';
import AuthContext from '../../context/AuthProvider';
import Box from './Box';
import cuteBox from '../../../assets/cuteBox.png';

const Boxes = ({ handleLogout, goProfile }) => {
  const { auth } = useContext(AuthContext);
  const getAll = async () => {
    const box = await getAllBoxes(auth.token);
    if (!box.length) setBoxes(box.data.boxes);
  };
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  return (
    <FeaturePage handleLogout={handleLogout} goProfile={goProfile}>
      <ScrollView>
        <View style={styles.hero}>
          <Image
            source={cuteBox}
            w
            style={{
              position: 'absolute',
              width: 100,
              height: 100,
              right: 20,
              bottom: 40,
            }}
          />
          <Text style={styles.title}>How it works?</Text>
          <View style={{ maxWidth: 240 }}>
            <Text style={styles.description}>
              You just choose what do you want to get in your boxes and get it
              delivered to your doorstep
            </Text>
          </View>
        </View>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#FFBCBC',
          }}
        >
          Browse our boxes
        </Text>
        <View style={{ alignItems: 'center' }}>
          {boxes.map(box => (
            <View key={box._id}>
              <Box
                id={box._id}
                price={box.price}
                category={box.category}
                stock={box.stock}
                items={box.items}
                subCategory={box.subCategory}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </FeaturePage>
  );
};

export default Boxes;

const styles = StyleSheet.create({
  hero: {
    backgroundColor: '#4DAAAA',
    height: 200,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 20,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
  },
});
