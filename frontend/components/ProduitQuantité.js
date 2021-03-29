import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView ,
  header,
  Alert,
  FlatList,
  ImageBackground,
  TextInput,
  
} from 'react-native';

import Bourek from '../images/Bourek.jpg';
import fruit from '../images/fruit.jpg';
import eau from '../images/nestle.jpg';
import jus_naturel from '../images/jus_naturel.jpg';
import croissant from '../images/croiss.jpg';
import noix from '../images/noix.jpg';
import thé from '../images/thé.jpg';
import logo from '../images/logo.jpg';
import logo1 from '../images/logo1.jpg';


//import Input from 'react-native-input-style'
//

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.location.state._id,
      categorie : this.props.location.state.categorie,
      marque: this.props.location.state.marque,
      prix:this.props.location.state.prix,
      img: this.props.location.state.img,
     quantité:0,
     listeCommande: this.props.location.state.listeCommande,
    };
  }
 
  componentDidMount() {
    
    
    

   };
   submitt = () => {
     if ( this.state.quantité === 0) 
     {
      Alert.alert('Error', 'veuillez préciser la quantité');
     }else
     {
       console.log('avant'+this.state.listeCommande)
      let b={ id_produit: this.state._id, quantité:this.state.quantité, prix: this.state.prix, categorie: this.state.categorie,marque:this.state.marque}
      
      let a = [...this.state.listeCommande,b]
    
      this.setState({listeCommande:a},()=>Alert.alert('Succès', 'Produit ajouté à votre commande !'))
     
     }
   };
   
  render() {
    return (
    <View>
      
      <View style={styles.header}>
      
        <TouchableOpacity style={styles.boutton} onPress={() =>
          this.props.history.push('/produit2', { 
            
            listeCommande: this.state.listeCommande,
            
          })
        }>
        <Text style={styles.textheader} > Retour </Text>
        
        </TouchableOpacity>
        
      
      </View>
      <View style={{ justifyContent:'center',alignItems:'center'}}>
      <Image style={styles.imagestyle}
                    source={ this.state.img }
                  />
           <View style={{ justifyContent:'center',alignItems:'center'}}>
         <Text style={styles.stylecat}> 
        { this.state.categorie }
        </Text>
        <Text style={styles.styleprix}>
        Prix : { this.state.prix }DA
        </Text>
      </View>  
      <View style={{ justifyContent:'center',alignItems:'center'}}> 
        <Text style={styles.textq}>
          Quantité : 
        </Text>
        <TextInput placeholder='Choisir quantité... '  keyboardType="numeric"
      style={{ height: 50,width:120, borderColor: 'white', borderWidth:0,borderRadius:15 ,position:'relative',top: -30, elevation:2,backgroundColor:'white' , marginLeft: '4%'}}
      onChangeText={(text) =>{ this.setState({quantité: text})}}
    />
    <TouchableOpacity style={styles.valid} onPress={this.submitt}>
        <Text style={styles.textheader}> Ajouter à ma commande</Text>
        
        </TouchableOpacity>
        </View> 
        
            
     
      </View>
      
      
      
    </View>
    
      
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor:'#ecdfd1',
   height: "100%",
   flex:1,
   flexGrow: 1,
   paddingBottom : 10,
   
     },
     stylecat: {
    
       color: '#3c2c1e',
       
        fontStyle : 'normal' ,
        fontSize: 28,
        fontWeight: "bold",
        position: 'relative',
       
        justifyContent: 'center',
        alignItems: 'center',
     },
    
     textq:{
      color: '#3c2c1e',
       
      fontStyle : 'normal' ,
      fontSize: 18,
      fontWeight: "bold",
      position: 'relative',
      marginBottom: 10,

     top: -30,
      
     },
     stylemarque: 
     {
      color: '#ff6600',
      fontStyle : 'italic' ,
      fontSize: 16,
     },
     boutton:
     {  backgroundColor: '#a4876b',
       height: '80%',
       width: '18%',
       borderRadius: 10,
       elevation: 12,
       position: 'relative',
       marginLeft: '2%',
       justifyContent: 'center',
       alignItems: 'center',
      
      
        
     },
     valid:
     {
      backgroundColor: '#a4876b',
      height: '20%',
      width: 180,
      borderRadius: 10,
      elevation: 12,
      position: 'relative',
      marginLeft: '4%',
      marginTop: '5%',
      justifyContent: 'center',
      alignItems: 'center',
     },
     textheader:
     {
      color: 'white',
      fontSize: 12,
      
      
     },
     header: {
       
      backgroundColor: 'white',
      elevation: 12,
      flexDirection: 'row',
      padding: '3%',
      height: '10%',
      justifyContent: 'space-between',
    },
    icon: 
    {
      width: "18%",
      height: "100%",
      marginLeft: "1%",
      marginTop: "0%"
    },
     styleprix: {
      color: '#f0ad4b',
      fontSize: 23,
      fontWeight: "bold",
    
     },
  listeProduit: {
    width: "95%",
    height: "100%",
    color: '#ff5753',
    backgroundColor: "white",
    elevation: 50,
   marginLeft: "2.5%",
   flexDirection: 'row',
   borderRadius: 10,
    fontSize: 25,
    //position :'relative',
    marginTop: "2%"
   
    //top:40,
  },
  imagestyle:{
    width: "76%",
    height: "40%",
    
    marginTop: "10%",
    borderRadius: 10,
   
  },
  
 
});

export default Login;
