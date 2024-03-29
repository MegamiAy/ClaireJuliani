// import { Platform, View, Image } from "react-native";
// import { TextInput, Button } from "react-native-paper";
// import { addDoc, collection } from "firebase/firestore";
// import { useState } from "react";
// import { db } from "../config/firebase";
// import * as ImagePicker from "expo-image-picker";
// import styles from "../utils/style";

// export default function AddProd() {
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [price, setPrice] = useState("");
//     const [size, setSize] = useState("");
//     const [collectionS, setCollection] = useState(null);
//     const [image, setImage] = useState(null); 
//     const [image1, setImage1] = useState(null);
//     const [image2, setImage2] = useState(null);
//     const [image3, setImage3] = useState(null);// Moved outside of inserirPost

//     const pickImage = async () => {
//         const result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         if (!result.cancelled) {
//             setImage(result.uri);
//         }
//     };

//     async function inserirPost() {
//         try {
//             if (image) {
//                 const response = await fetch(image);
//                 const blob = await response.blob();
//                 const base64Image = await convertBlobToBase64(blob);

//                 const payload = {
//                     Title: title,
//                     Content: content,
//                     Image: base64Image,
//                 };
//                 const post = await addDoc(postRef, payload);
//                 console.log(post);
//             } else {
//                 const payload = {
//                     Title: title,
//                     Content: content,
//                 };
//                 const post = await addDoc(postRef, payload);
//                 console.log(post);
//             }
//         } catch (error) {
//             console.log(error);
//             console.error("Error uploading image: ", error);
//         }
//     }

//     const convertBlobToBase64 = (blob) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 resolve(reader.result);
//             };
//             reader.onerror = reject;
//             reader.readAsDataURL(blob);
//         });
//     };

//     const postRef = collection(db, "Post");

//     const ImageComponent = () => {
//         if (Platform.OS === "web") {
//             return <img src={image} style={{ width: 200, height: 200 }} />;
//         } else {
//             return (
//                 <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//             );
//         }
//     };

//     return (
//         <View>
//             <View>
//                 <View style={styles.BodyH}>
//                     <TextInput label="Titulo"
//                         value={title}
//                         onChangeText={setTitle}
//                         style={styles.InputL}
//                     />
//                     <TextInput
//                         label="Descrição"
//                         value={content}
//                         onChangeText={setContent}
//                         style={styles.InputL}
//                     />
//                     <TextInput
//                         label="Preço"
//                         value={content}
//                         onChangeText={setPrice}
//                         style={styles.InputL}
//                     />
//                     {image && <ImageComponent />}
//                     <Button 
//                     // title="Escolha uma imagem" 
//                     onPress={pickImage}
//                     style={styles.ButtonH}
//                     >Escolha uma imagem</Button>
//                     <Button
//                         onPress={inserirPost}
//                         disabled={!title || !content}
//                         // mode="outlined"
//                         style={styles.ButtonH}
//                     >Postar</Button>
//                 </View>
//             </View>
//         </View>
//     );
// }