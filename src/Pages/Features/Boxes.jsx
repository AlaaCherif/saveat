import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import FeaturePage from './FeaturePage';
import { getAllBoxes } from './../../api/api.box';
import AuthContext from '../../context/AuthProvider';
import Box from './Box';

const Boxes = ({ handleLogout, goProfile }) => {
  const { auth } = useContext(AuthContext);
  const getAll = async () => {
    const box = await getAllBoxes(auth.token);
    if (!box.length) setBoxes(box.data.boxes);
  };
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    getAll();
    console.log(boxes);
  }, []);

  return (
    <FeaturePage handleLogout={handleLogout} goProfile={goProfile}>
      <View style={styles.hero}>
        <Text style={styles.title}>How it works?</Text>
        <Text style={styles.description}>It works this way</Text>
      </View>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          {boxes.map(
            box => (
              <Box
                id={box.id}
                price={box.price}
                category={box.category}
                stock={box.stock}
                items={box.items}
                subCategory={box.subCategory}
              />
            )
            // <Box price={box.price} />;
          )}
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
