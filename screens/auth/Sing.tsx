import React from "react";
import {auth} from "../../firebase/Firebase";
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import * as Animatable from "react-native-animatable";

import {FontAwesome} from "@expo/vector-icons";

const Sing = ({navigation}: any) => {
  const [email, setemail] = React.useState("");
  const [displayName, setdisplayName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [PhoneNumber, setPhoneNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [isValidUserName, setisValidUserName] = React.useState(false);
  const [isValidPhoneNumber, setisValidPhoneNumber] = React.useState(false);
  const [secureTextEntry, setsecureTextEntry] = React.useState(false);

  const handleSignUp = () => {
    // sing up with email and password and display name and user name
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          
        // Signed in
        // disply the name and user name
            const user = userCredential.user;
            user.updateProfile({
                displayName: displayName,
            });
            setLoading(false);
            navigation.navigate("Home");
            // 
            
          
         

        // ...

        setLoading(false);
        console.log(user);

        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        setError(errorMessage);
        // ..
      });
  };

  const handleValidEmail = (val: string) => {
    if (val.trim().length >= 4) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleValidUserName = (val: string) => {
    if (val.trim().length >= 4) {
      setisValidUserName(true);
    } else {
      setisValidUserName(false);
    }
  };

  //       .catch(error => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode, errorMessage);
  //         setError(errorCode);
  //         setLoading(false);

  //         setTimeout(() => {
  //           setError("");
  //         }, 4000);
  //         // ..
  //       });
  //   };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.container}>
        <Animatable.View
          style={styles.header}
          animation="pulse"
          iterationCount="infinite"
          direction="alternate"
        >
          <ImageBackground
            style={styles.background}
            source={require("../../assets/images/pizaaHome.png")}
          ></ImageBackground>
        </Animatable.View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            direction="alternate"
          >
            {error ? (
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: 20,
                  fontSize: 20,
                }}
              >
                {error}
              </Text>
            ) : null}
          </Animatable.View>
          <Text style={styles.titleText}> Sign Up </Text>
          <View style={[styles.action, {marginTop: 20}]}>
            <FontAwesome
              //  name="user-o"
              name="user"
              color="#EAB308"
              size={20}
            />
            <TextInput
              placeholder="name"
              style={styles.textInput}
                          autoCapitalize="none"
                          onChangeText={val => {
                              setdisplayName(val);
                          }}
      
              value={displayName}
              placeholderTextColor="#fff"
            />
          </View>
          <View style={[styles.action, {marginTop: 20}]}>
            <FontAwesome
              //  name="user-o"
              name="envelope"
              color="#EAB308"
              size={20}
            />

            <TextInput
              placeholder="Email"
              style={styles.textInput}
              placeholderTextColor="#fff"
              onChangeText={val => setemail(val)}
              value={email}
            />
          </View>

          <View style={[styles.action, {marginTop: 20}]}>
            <FontAwesome name="lock" color="#EAB308" size={20} />

            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.textInput}
              placeholderTextColor="#fff"
              onChangeText={password => setPassword(password)}
              value={password}
            />

            <Animatable.View animation="bounceIn">
              <TouchableOpacity
                onPress={() =>
                  setPassword(setsecureTextEntry(!secureTextEntry))
                }
              >
                {secureTextEntry ? (
                  <FontAwesome name="eye-slash" color="#fff" size={18} />
                ) : (
                  <FontAwesome name="eye" color="#fff" size={18} />
                )}
              </TouchableOpacity>
            </Animatable.View>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button_signUp}
              onPress={handleSignUp}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.btnTextSignUp}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                marginTop: 20,
                fontSize: 16,
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                marginTop: 10,
                backgroundColor: "#EAB308",
                padding: 10,
                borderRadius: 10,
                width: 150,
                alignSelf: "center",
              }}
            >
              <Text style={{color: "#fff", textAlign: "center", fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};
const image_width = Dimensions.get("window").width;
const image_height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#000",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: image_width,
    height: image_height / 2,
  },
  titleText: {
    alignContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  action: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EAB308",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#EAB308",
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  button_signUp: {
    backgroundColor: "#EAB308",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: image_width - 50,
    height: 50,
  },
  btnTextSignUp: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
export default Sing;
