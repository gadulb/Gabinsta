import { Image, View } from "react-native";
import { styles } from "../utils/styles";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredencial) => {
        console.log("Usuário logado com sucesso!");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário", error);
        //código de erro
        const errorCode = error.code;
        if (email === "" || senha === "") {
          console.log("Preencha todos os campos");
          return;
        }
        if (senha.length < 6) {
          console.log("A senha deve ter no mínimo 6 caracteres");
          return;
        }
        if (!email.includes("@")) {
          console.log("E-mail inválido");
          return;
        }
        if (!email.includes(".")) {
          console.log("E-mail inválido");
          return;
        }
        if (email.includes(" ")) {
          console.log("E-mail inválido");
          return;
        }
        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido");
        }
        if (errorCode === "auth/user-not-found") {
          console.log("Usuário não encontrado");
        }
        if (errorCode === "auth/wrong-password") {
          console.log("Senha incorreta");
        }
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
          <Text style={styles.titulo}>LOGIN</Text>
          <TextInput
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            mode="disabled"
            style={styles.input}
          />
          <TextInput
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            mode="disabled"
            style={styles.input}
          />
          <Button onPress={handleLogin} style={styles.botao} textColor="white">
            ENTRAR
          </Button>
            <View style={styles.coluna}>
              <Text>Não tem conta?</Text>
              <Button
                textColor={"black"}
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                <Text style={styles.botaoPreto}>Cadastre-se!</Text>
              </Button>
            </View>
        </View>
      </View>
    </View>
  );
}
