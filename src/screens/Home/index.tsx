import { ScrollView, StyleSheet, Text, View } from 'react-native';

import logo from '../../assets/logo.png';
import setting from '../../assets/setting.png';
import masterCard from '../../assets/mastercard.png';
import Wallet from '../../assets/Wallet.png';
import pix from '../../assets/pix.png';

export  function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <View style={styles.header}>
            <img src={logo} alt="" />
            <img src={setting} alt="" />
        </View>
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View/>
                <img src={masterCard} alt="" />
            </View>
                <Text style={styles.cardText}>Arthur Kinderman</Text>
        </View>
        <View style={styles.cardDetails}>
        <View style={styles.cardDetailsHeader}>
                <Text style={styles.cardDetailsHeaderText}>Saldo dísponivel</Text>
                <img src={Wallet} alt="" />
            </View>
            <Text style={styles.cardDetailsText}>R$200,20</Text>
        </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Doque você precisa</Text>

            <ScrollView style={styles.cooterContentScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={styles.Cardfooter}>
                    <img src={pix} alt="" />
                    <Text style={styles.CardfooterText}>Fazer um Pix</Text>
                </View>
                <View style={styles.Cardfooter}>
                    <img src={pix} alt="" />
                    <Text style={styles.CardfooterText}>Fazer um Pix</Text>
                </View>
                <View style={styles.Cardfooter}>
                    <img src={pix} alt="" />
                    <Text style={styles.CardfooterText}>Fazer um Pix</Text>
                </View>
                <View style={styles.Cardfooter}>
                    <img src={pix} alt="" />
                    <Text style={styles.CardfooterText}>Fazer um Pix</Text>
                </View>
            </ScrollView>

            
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#820ad1',
    paddingHorizontal:30,
  },
  header:{
    width:"100%",
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"space-between",
    paddingTop: 40,
  },
  card: {
    width: "100%",
    height: 190,
    backgroundColor: "#9500f6",
    borderRadius: 20,
    elevation: 5,
    marginBottom:20,
    padding: 20,
    justifyContent:"space-between",
  },
  cardDetails: {
    width: "100%",
    height: 120,
    backgroundColor: "#9500f6",
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"space-between",
  },
  cardText: {
    color: "#fff",
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "600",
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardDetailsText: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "600",
  },
  cardDetailsHeaderText: {
    color: "#fff",
  },
  footer: {
    paddingTop: 30,
    paddingLeft:20,
  },
  footerText: {
    color: "#fff",
    marginHorizontal: 20,
    paddingBottom: 20,
    fontWeight: "600",
    fontSize: 14,
  },
  Cardfooter: {
    width: 100,
    height: 127,
    backgroundColor: "#9500f6",
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    justifyContent:"space-between",
    marginLeft: 10,
  },
  CardfooterText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },
  content: {
    paddingHorizontal: 30,
  },
  cooterContentScrollView: {
    height: 400,
  }
});
