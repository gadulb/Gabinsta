import { Image, View } from "react-native";
import { styles } from "../utils/styles";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({ navigation }) {
  const [nomeUsu, setNomeUsu] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!", userCredential);
        const uid = userCredential.user.uid;
        setDoc(doc(db, "usuario", uid), { 
          email_usu: email,
          nome_usu: nomeUsu,
          senha_usu: senha,
        }).then(() => {
          console.log("Cadastrado!");
          navigation.navigate("LoginScreen");
        });
      })
      .catch((error) => {
        console.log("Erro ao criar usuário", error);
        // Handle error codes
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.imagemTopo}>
        <Image
          source={require("/assets/g.png")}
          style={{ width: 97, height: 100 }}
        />
      </View>
      <View style={styles.conteudo}>
        <View style={styles.containerInner}>
          <Text style={styles.titulo}>Cadastro</Text>
          <TextInput
            placeholder="Nome"
            value={nomeUsu}
            onChangeText={(text) => setNomeUsu(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={(text) => setSenha(text)}
            style={styles.input}
            secureTextEntry={true}
          />
          <Button
            title="Cadastrar"
            onPress={handleRegister}
            style={styles.botao}
            textColor="white"
          >Cadastrar</Button>
          <Text style={styles.texto}>
            Já possui uma conta?
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              {" "}
              Faça login!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
