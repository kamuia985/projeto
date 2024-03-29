import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';




Parse.setAsyncStorage(AsyncStorage);
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.setAsyncStorage(AsyncStorage);
const Api_ID = 'rAnzEsv3ADDTGqFU9xClRDgHWDuCDmeZF8LRNjDj';
const JS_Key = 'V95KL9wBOnGCFT8KTaiq5Un3rB3kkedWkFdCMoP1';
Parse.initialize(Api_ID,JS_Key);
Parse.serverURL = 'https://parseapi.back4app.com/';
import 'react-native-get-random-values';

export default function Cadastrar() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [quantProduto, setQuantProduto] = useState('');
  
  
    const mensagemDeAlerta = (titulo, mensagem) => {
      Alert.alert(
        titulo, mensagem,
        [
          { text: 'OK', onPress: () => console.log('Clicou em ok') },
          { text: 'OK2', onPress: () => console.log('Clicou em ok 2'),
          },
        ],
        { cancelable: true }
      );
    };
  
    async function cadastrarProduto(){   
      try {
        const produto = new Parse.Object('Produto');
        produto.set('nome', nomeProduto);
        produto.set('quantidade', valorProduto);
        produto.set('valor', quantProduto);
        await produto.save();
        mensagemDeAlerta('Produto','Cadastrado com sucesso!!!');
        return true;
      } catch (error) {
        mensagemDeAlerta('Produto','Erro ao cadastrar !!!');
        console.log(error);
      }
  
    }
  
    async function cadastrarProduto() {
      const uuid = uuidv4();    
      console.log(uuid, produto);
      
      try {
        const produto = new Parse.Object('Produto');
        produto.set('nome', nomeProduto);
        produto.set('quantidade', parseInt(quantProduto, 10)); // Certifique-se de que seja um número inteiro
        produto.set('valor', parseFloat(valorProduto.replace(',', '.'))); // Lida com números decimais
        // Salva no Back4App Data Store
        await produto.save();
  
        mensagemDeAlerta('Produto', 'Cadastrado com sucesso!!!');
  
        // Limpa os campos após o cadastro bem-sucedido
        setNomeProduto('');
        setValorProduto('');
        setQuantProduto('');
      } catch (error) {
        mensagemDeAlerta('Erro', 'Erro ao cadastrar!!!');
        console.error('Erro ao cadastrar:', error);
      }
    }
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            value={nomeProduto}
            onChangeText={(nomeProduto) => setNomeProduto(nomeProduto)}
            placeholder={'Produto'}
            style={styles.input}          
          />
          <TextInput
            value={valorProduto}
            onChangeText={(valorProduto) => setValorProduto(valorProduto)}
            placeholder={'Valor R$0,00'}
            style={styles.input}
            numeric
            keyboardType={'numeric'}
          />
          <TextInput
            value={quantProduto}
            onChangeText={(quantProduto) => setQuantProduto(quantProduto)}
            placeholder={'Quantidade'}
            style={styles.input}
            numeric
            keyboardType={'numeric'}
          />
          
          <Pressable
            onPress={cadastrarProduto}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgb(51 184 177)'
                  : 'rgb(51 184 68)'
              },
              styles.botaoCadastrar
            ]}>
            {({ pressed }) => (
              <Text style={styles.text}>
                {!pressed ? 'Cadastrar' : 'Cadastrando'}
              </Text>
            )}
          </Pressable>
        </View>
    </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 300,
      height: 44,
      padding: 5,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#e8e8e8',
    },
    text: {
      fontSize: 16
    },
    botaoCadastrar: {
      borderRadius: 8,
      padding: 10,
      width: 300,
      alignItems: 'center',
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9'
    }
  });