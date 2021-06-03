import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

    this.abreBiscoito = this.abreBiscoito.bind(this)
    this.frases = [
      'A maior de todas as torres começa no solo.',
      'Há três coisas que jamais voltam: a flecha lançada, a palavra dita e a oportunidade perdida.',
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossivel.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'Você é do tamanho do seu sonho.',
      'Coragem é a resistência ao medo, e não a ausência dele.',
      'Acredite em milagres, mas não dependa deles.'
    ];
  }
  abreBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png'),

    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.abreBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Abrir Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});

export default App;
