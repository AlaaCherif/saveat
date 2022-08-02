import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import FeaturePage from './FeaturePage';
import { getAllOffers } from '../../api/api.offer';
import AuthContext from '../../context/AuthProvider';
import Deal from './Deal';
import banner from '../../../assets/banner.png';
import DealModal from './DealModal';

const Deals = ({ handleLogout, goProfile }) => {
  const { auth } = useContext(AuthContext);
  const [offers, setOffers] = useState([]);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const getAll = async () => {
    const offer = await getAllOffers(auth.token);
    if (!offer.length) setOffers(offer.data.offers);
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      {showModal ? <View style={styles.overlay} /> : null}
      <FeaturePage handleLogout={handleLogout} goProfile={goProfile}>
        <DealModal
          setModal={setModal}
          modal={modal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <ScrollView contentContainerStyle={styles.dealsContainer}>
          <View style={styles.heroContainer}>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.text}>
                Take an <Text style={{ color: '#FFBCBC' }}>Offer</Text> {'\n'}
                <Text style={{ color: '#a5a5a5', fontSize: 18 }}>
                  At closing hours, our partner restaurants {'\n'}offer special
                  discounts!
                </Text>
              </Text>
            </View>
            <Image
              source={banner}
              style={{ width: 500, height: 280, borderRadius: 4 }}
            />
          </View>
          {offers.map(offer => (
            <Deal
              description={offer.description}
              id={offer._id}
              newPrice={offer['new_price']}
              oldPrice={offer['old_price']}
              product={offer.product}
              restaurant={offer.restaurant}
              stock={offer.stock}
              key={offer._id}
              setModal={setModal}
              setShowModal={setShowModal}
            />
          ))}
        </ScrollView>
      </FeaturePage>
    </>
  );
};

export default Deals;

const styles = StyleSheet.create({
  dealsContainer: {
    alignItems: 'center',
  },
  heroContainer: {
    minHeight: 250,
    backgroundColor: '#ffffff',
    width: '100%',
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#4DAAAA',
    marginLeft: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
  },
});
