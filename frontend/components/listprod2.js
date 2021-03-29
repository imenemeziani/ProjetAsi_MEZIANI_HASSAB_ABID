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
      dataSource :[],
      listeCommande: this.props.location.state.listeCommande,
    };
  }
  componentDidMount() {
    console.log('listecommande: '+this.state.listeCommande)
    fetch(
       'http://192.168.1.10:5000/produit/AfficherListeProduits' 
     )
       .then((response) => response.json())
       .then((responseData) => {
         this.setState((prevState) => ({
           dataSource: responseData,

         }));
          /*console.log('in data source');
         console.log(this.state.dataSource);*/
       })
       .catch((error) => {
         console.log(error);
       });
   };
   
   renderSeparator = () => {
    return <View style={styles.separatorStyle}></View>;
  };
  ////////////////////////////
  renderFooter = () => {
    return <View style={styles.footer}></View>;
  };
   renderItem = ({item}) => {
     if (item.categorie === 'Banane')
     {
    return (
    
      <View style={styles.list} >
         <TouchableOpacity style={styles.listeProduit} 
         onPress={() =>
          this.props.history.push('/produit', { 
            _id: item._id,
            marque : item.categorie,
            prix:item.prix,
            img: fruit,
            listeCommande: this.state.listeCommande,
            
          })
        }>
          <Image style={styles.imagestyle}
        source={fruit}
      />
         <View>
         <Text style={styles.stylecat}> {item.categorie}</Text>
        
         <Text style={styles.styleprix}>  {item.prix}DA</Text>
         <Text style={styles.stylemarque}></Text>
           </View>
         </TouchableOpacity>
         </View>
    )}else { 
      if (item.categorie === 'Thé')
      {
        return (
    
          <View style={styles.list} >
             <TouchableOpacity style={styles.listeProduit}
                onPress={() =>
                  this.props.history.push('/produit', { 
                    _id: item._id,
                    categorie : item.categorie,
                    marque: item.marque,
                    prix:item.prix,
                    img: thé,
                    listeCommande: this.state.listeCommande,
                  })
                } >
               
              <Image style={styles.imagestyle}
            source={thé}
          />
             <View>
             <Text style={styles.stylecat}> {item.categorie}</Text>
            
             <Text style={styles.styleprix}>  {item.prix}DA</Text>
             <Text style={styles.stylemarque}></Text>
               </View>
             </TouchableOpacity>
             </View>
        )
      }else {
        if (item.categorie === 'Noix')
        {
          return (
    
            <View style={styles.list} >
               <TouchableOpacity style={styles.listeProduit} onPress={() =>
                  this.props.history.push('/produit', { 
                    _id: item._id,
                    categorie : item.categorie,
                    marque: item.marque,
                    prix:item.prix,
                    img: noix,
                    listeCommande: this.state.listeCommande,
                  })
                }>
                 
                <Image style={styles.imagestyle}
              source={noix}
            />
               <View>
               <Text style={styles.stylecat}> {item.categorie}</Text>
              
               <Text style={styles.styleprix}>  {item.prix}DA</Text>
               <Text style={styles.stylemarque}></Text>
                 </View>
               </TouchableOpacity>
               </View>
          )
        }
        else
        {
          if (item.categorie === 'Bourak')
          {
            return (
    
              <View style={styles.list} >
                 <TouchableOpacity style={styles.listeProduit}  onPress={() =>
                  this.props.history.push('/produit', { 
                    _id: item._id,
                    categorie : item.categorie,
                    marque: item.marque,
                    prix:item.prix,
                    img: Bourek,
                    listeCommande: this.state.listeCommande,
                  })
                } >
                   
                  <Image style={styles.imagestyle}
                source={Bourek}
              />
                 <View>
                 <Text style={styles.stylecat}> {item.categorie}</Text>
                
                 <Text style={styles.styleprix}>  {item.prix}DA</Text>
                 <Text style={styles.stylemarque}></Text>
                   </View>
                 </TouchableOpacity>
                 </View>
            )
          }
          else 
          {
            if (item.categorie === 'Jus naturel' )
            {
              return (
    
                <View style={styles.list} >
                   <TouchableOpacity style={styles.listeProduit}
                   onPress={() =>
                    this.props.history.push('/produit', { 
                      _id: item._id,
                      categorie : item.categorie,
                    marque: item.marque,
                      prix:item.prix,
                      img: jus_naturel,
                      listeCommande: this.state.listeCommande,
                    })
                  } >
                     
                    <Image style={styles.imagestyle}
                  source={jus_naturel}
                />
                   <View>
                   <Text style={styles.stylecat}> {item.categorie}</Text>
                  
                   <Text style={styles.styleprix}>  {item.prix}DA</Text>
                   <Text style={styles.stylemarque}></Text>
                     </View>
                   </TouchableOpacity>
                   </View>
              )
            }
            else
            {
              if((item.categorie === 'Eau minérale de 1,5L' ) || (item.categorie === 'Eau minérale de 0.5L') )
              {
                return (
    
                  <View style={styles.list} >
                     <TouchableOpacity style={styles.listeProduit} 
                     onPress={() =>
                      this.props.history.push('/produit', { 
                        _id: item._id,
                        categorie : item.categorie,
                        marque: item.marque,
                        prix:item.prix,
                        img: eau,
                        listeCommande: this.state.listeCommande,
                      })
                    }>
                       
                      <Image style={styles.imagestyle}
                    source={eau}
                  />
                     <View>
                     <Text style={styles.stylecat}> {item.categorie}</Text>
                    
                     <Text style={styles.styleprix}>  {item.prix}DA</Text>
                     <Text style={styles.stylemarque}></Text>
                       </View>
                     </TouchableOpacity>
                     </View>
                )
              }
              else
              {
                if(item.categorie === 'Croissant')
                {
                  return (
    
                    <View style={styles.list} >
                       <TouchableOpacity style={styles.listeProduit} 
                       onPress={() =>
                        this.props.history.push('/produit', { 
                          _id: item._id,
                          categorie : item.categorie,
                           marque: item.marque,
                          prix:item.prix,
                          img: croissant,
                          listeCommande: this.state.listeCommande,
                        })
                      }>
                         
                        <Image style={styles.imagestyle}
                      source={croissant}
                    />
                       <View>
                       <Text style={styles.stylecat}> {item.categorie}</Text>
                      
                       <Text style={styles.styleprix}>  {item.prix}DA</Text>
                       <Text style={styles.stylemarque}></Text>
                         </View>
                       </TouchableOpacity>
                       </View>
                  )
                }
                else
                {
                  return (
    
                    <View style={styles.list} >
                       <TouchableOpacity style={styles.listeProduit} 
                       onPress={() =>
                        this.props.history.push('/produit', { 
                          _id: item._id,
                          categorie : item.categorie,
                          marque: item.marque,
                          prix:item.prix,
                          img:logo,
                          listeCommande: this.state.listeCommande,
                        })
                      }>
                         
                        <Image style={styles.imagestyle}
                      source={logo}
                    />
                       <View>
                       <Text style={styles.stylecat}> {item.categorie}</Text>
                      
                       <Text style={styles.styleprix}>  {item.prix}DA</Text>
                       <Text style={styles.stylemarque}></Text>
                         </View>
                       </TouchableOpacity>
                       </View>
                  )
                }
              }
            }
          }
        }
      }
      
    }
  };




  render() {
    return (
    <View>
      <View style={styles.header}>
      <Image style={styles.icon}
        source={logo1}
      />
        <TouchableOpacity style={styles.boutton}  onPress={() =>
          this.props.history.push('/valider', { 
            
            listeCommande: this.state.listeCommande,
            
          })
        }>
        <Text style={styles.textheader}> Valider la commande </Text>
        
        </TouchableOpacity>
      
      </View>
      <FlatList 
    
      data={this.state.dataSource}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index.toString()}
     
    
    />
     
    </View>
    
       /* <ScrollView style={styles.list} >
         {this.state.dataSource.map((item, key) => (
       
         <TouchableOpacity style={styles.listeProduit} key={key}>
          <Image style={styles.imagestyle}
        source={Bourek}
      />
         <View>
         <Text style={styles.stylecat}> {item.categorie}</Text>
         <Text style={styles.stylemarque}> {item.marque}</Text>
         <Text style={styles.styleprix}> Prix: {item.prix}DA</Text>
           </View>
         </TouchableOpacity>
              ))}
        </ScrollView>*/
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
        fontSize: 18,
        fontWeight: "bold",
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
       width: '38%',
       borderRadius: 10,
       elevation: 12,
       position: 'relative',
       marginLeft: '10%',
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
      height: '7%',
      justifyContent: 'space-between',
    },
    icon: 
    {
      width: "27%",
      height: "100%",
      marginLeft: "1%",
      marginTop: "0%"
    },
     styleprix: {
      color: '#f0ad4b',
      fontSize: 13,
      fontWeight: "bold"
     },
  listeProduit: {
    borderColor: '#ecdfd1',
    borderWidth: 2,
    width: "95%",
    height: "100%",
    color: 'white',
    backgroundColor: "white",
    
   marginLeft: "2.5%",
   flexDirection: 'row',
   borderRadius: 10,
    fontSize: 25,
    //position :'relative',
    marginTop: "2%"
   
    //top:40,
  },
  imagestyle:{
    width: "20%",
    height: "100%",
    marginLeft: "1%",
    marginTop: "0%"
    
   
  },
  
 
});

export default Login;
