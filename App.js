import { useState } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';

export default function App() {
  // declara states num1, num2 e mensagem
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [mensagem, setMensagem] = useState('?');

  //calcula soma de dois números
  const calcularSoma = () => {
    // se não informou, solicita informar || = or (ou)
    if (num1 == '' || num2 == '') {
      setMensagem('Por favor fornecer todas as informações!');
    } else {
      // usuário informou os números
      // é necessário converter para número float (com ponto decimal)
      // pois a entrada de dados é no padrão string
      setMensagem(parseFloat(num1) + parseFloat(num2));
    }
  };

  const calcularSub = () => {
    if (num1 == '' || num2 == '') {
      setMensagem('Por favor fornecer todas as informações!');
    } else {
      // usuário informou os números
      // é necessário converter para número float (com ponto decimal)
      // pois a entrada de dados é no padrão string
      setMensagem(parseFloat(num1) - parseFloat(num2));
    }
  };

  const calcularMult = () => {
    if (num1 == '' || num2 == '') {
      setMensagem('Por favor fornecer todas as informações!');
    } else {
      // usuário informou os números
      // é necessário converter para número float (com ponto decimal)
      // pois a entrada de dados é no padrão string
      setMensagem(parseFloat(num1) * parseFloat(num2));
    }
  };

  const calcularDiv = () => {
    if (num1 == '' || num2 == '') {
      setMensagem('Por favor fornecer todas as informações!');
    } else {
      setMensagem(parseFloat(num1) / parseFloat(num2));
      if (num2 == '0') setMensagem ('Divisor não pode ser ZERO!');
      else {
        let resp= parseFloat(num1) / parseFloat(num2)
        setMensagem(resp.toFixed(2))
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        margin: 20,
        borderRadius: 10,
      }}>
      <View>
        <Image
          style={{ height: 50, width: 50 }}
          source={require('./assets/CALC.png')}
        />
      </View>
      <Text
        style={{
          margin: 10,
          fontSize: 20,
          color: 'lightpink',
          fontWeight: 'bold',
        }}>
      Calculadora básica ☆
      </Text>
      <Text> Forneça primeiro número: </Text>
      <TextInput
        style={{
          width: 150,
          height: 30,
          borderColor: 'gray',
          borderRadius: 10,
          borderWidth: 1,
          margin: 10,
        }}
        keyboardType="numeric"
        onChangeText={(text) => setNum1(text)}
        value={num1}
        placeholderTextColor="gray"
        placeholder=" INSIRA NÚMERO"
      />

      <Text> Forneça segundo número: </Text>
      <TextInput
        style={{
          width: 150,
          height: 30,
          borderColor: 'gray',
          borderRadius: 10,
          borderWidth: 1,
          margin: 10,
        }}
        keyboardType="numeric"
        onChangeText={(text) => setNum2(text)}
        value={num2}
        placeholderTextColor="gray"
        placeholder=" INSIRA NÚMERO"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ margin: 10 }}>
          <Button title="➕" onPress={calcularSoma} />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="➖" onPress={calcularSub} />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="𝗫" onPress={calcularMult} />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="➗" onPress={calcularDiv} />
        </View>
      </View>
      <Text style={{ marginTop: 20 }}>RESULTADO: {mensagem}</Text>
    </View>
  );
}
