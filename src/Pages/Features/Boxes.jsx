import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import FeaturePage from './FeaturePage';
import { getAllBoxes } from './../../api/api.box';
import AuthContext from '../../context/AuthProvider';

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
      <Text>Boxes</Text>
    </FeaturePage>
  );
};

export default Boxes;

const styles = StyleSheet.create({});
