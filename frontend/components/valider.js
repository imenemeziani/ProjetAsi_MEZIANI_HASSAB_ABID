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

import logo from '../images/logo.jpg';
import logo1 from '../images/logo1.jpg';

//import Input from 'react-native-input-style'
//

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prénom: '',
     listeCommande: this.props.location.state.listeCommande,
     listes:[],
    };
  }
 
  renderItem = ({item}) => {
   
   return (
   
     <View style={styles.list} >
       
         
        <View style={styles.listeProduit} >
            <View>
            <Image style={styles.imagestyle}
                      source={logo}
                    />
            </View>
        <View>
        <Text style={styles.stylecat}> {item.categorie} </Text>
        <Text style={styles.stylecat}> Quantité: {item.quantité} </Text>
       <Text style={styles.styleprix}> {item.prix}DA</Text>
        </View>
       
          </View>
      
        </View>
   )
 };

garder=()=> 
{    console.log( this.state.listes)
     fetch(
    'http://192.168.1.10:5000/Commande/commander' ,
   {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     listes: this.state.listes,
      nom: this.state.nom,
      prenom: this.state.prénom,
    }),
   } 
  )
    .then((response) => response.json())
    .then((responseData) => {
        Alert.alert(responseData.message);
    })
    .catch((error) => {
      console.log(error);
    });

};

   envoyer = () => {
    if ( this.state.listeCommande.length === 0 ) 
    {
     Alert.alert('Erreur', 'veuillez choisir un produit! ');
    }else 
    {
        if ( this.state.nom=== '' || this.state.prénom==='') 
        {
         Alert.alert('Erreur', 'veuillez donner votre nom et prénom ');
        }else
        {  
    
            let a=[];
          for ( let i=0; i< this.state.listeCommande.length;i++)
          {
              let b = {produit:{
                     id_produit:this.state.listeCommande[i].id_produit,
                     quantite: this.state.listeCommande[i].quantité, },
                  
          }
          if ( i< this.state.listeCommande.length - 2)
          {
            this.setState({ listes: [...this.state.listes,b]})
            console.log(this.state.listeCommande.length)
          }else
          {
            this.setState({ listes: [...this.state.listes,b]},()=> {
               this.garder();
               
            })
          }
          
        }
       
       }
    }};
  
   
  render() {
    return (
    <View style={{ backgroundColor:'white', height:'100%'}}>
<View style={styles.header}>

  <TouchableOpacity style={styles.envoyer}  onPress={() =>
          this.props.history.push('/produit2', { 
            
            listeCommande: this.state.listeCommande,
            
          })
        }>
        <Text style={styles.textheader}> Retour </Text>
        
        </TouchableOpacity >
        
 
        <TouchableOpacity style={styles.boutton}  onPress={this.envoyer}>
        <Text style={styles.textheader}>Envoyer </Text>
        
        </TouchableOpacity>
      
      </View>
     <View style={{position:'relative', top:30,}}>
     <Text style={ styles.textq}> Veuillez indiquer votre nom et prénom : </Text> 
  <TextInput placeholder='Nom ' 
      style={{ height: 50,width:340, borderColor: '#ecdfd1', borderWidth:2,borderRadius:15,marginTop: 10, elevation:2,backgroundColor:'white' , marginLeft: '3%'}}
      onChangeText={(text) =>{ this.setState({nom: text})}}
    />
     <TextInput placeholder='Prénom '  
      style={{ height: 50,width:340, borderColor: '#ecdfd1', borderWidth:2,borderRadius:15,marginTop: 10, elevation:2,backgroundColor:'white' , marginLeft: '3%'}}
      onChangeText={(text) =>{ this.setState({prénom: text})}}
    />
     <Text style={ styles.textcmd}> Votre commande : </Text>
      <FlatList 
    
    data={this.state.listeCommande}
    renderItem={this.renderItem}
    keyExtractor={(item, index) => index.toString()}
   
  
  />
     </View>
     

  
  
  
    </View>
      
      
    
         
      
    
      
    );
  }
}

const styles = StyleSheet.create({
  list: {
   
    backgroundColor:'white',
   height: "100%",
   flex:1,
   flexGrow: 1,
   paddingBottom : 10,
   
     },
     stylecat: {
    
       color: '#3c2c1e',
       
        fontStyle : 'normal' ,
        fontSize: 14,
        fontWeight: "bold",
        position: 'relative',
        marginLeft: '10%',
        justifyContent: 'center',
        alignItems: 'center',
     },
     envoyer:{
        backgroundColor: '#a4876b',
        height: '80%',
        width: '28%',
        position: 'relative',
        elevation: 12,
        marginLeft: '0%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
     },
     textcmd:{
        color: '#3c2c1e',
       
        fontStyle : 'normal' ,
        fontSize: 18,
        fontWeight: "bold",
        position: 'relative',
        marginLeft: '1%',
        marginTop: 20
     },
     textq:{
      color: '#3c2c1e',
       
      fontStyle : 'normal' ,
      fontSize: 18,
      fontWeight: "bold",
      position: 'relative',
      marginLeft: '1%',
     
      
     },
     stylemarque: 
     {
      color: '#ff6600',
      fontStyle : 'italic' ,
      fontSize: 16,
     },
     boutton:
     {  backgroundColor: '#f0ad4b',
       height: '80%',
       width: '28%',
       borderRadius: 10,
       elevation: 12,
       position: 'relative',
       marginLeft: '40%',
       justifyContent: 'center',
       alignItems: 'center',
      
      
        
     },
     valid:
     {
      backgroundColor: '#a4876b',
      height: '20%',
      width: '45%',
      borderRadius: 10,
      elevation: 12,
      position: 'relative',
      marginLeft: '28%',
      marginTop: '8%',
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
      height: '8%',
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
       
        fontStyle : 'normal' ,
        fontSize: 14,
        fontWeight: "bold",
        position: 'relative',
        marginLeft: '10%',
        justifyContent: 'center',
        alignItems: 'center',
     },
  listeProduit: {
    width: "95%",
    height: "100%",
    color: '#ff5753',
    backgroundColor: 'white',
    borderColor: '#ecdfd1',
    borderWidth: 2,
  
   marginLeft: "2.5%",
   flexDirection: 'row',
   borderRadius: 10,
    fontSize: 25,
    position :'relative',
    marginTop: "2%"
   
    //top:40,
  },
  imagestyle:{
    width: "90%",
    height: "90%",
    marginLeft: "10%",
    marginTop: "5%",
    borderRadius: 10,
   
  },
  
 
});

export default Login;
