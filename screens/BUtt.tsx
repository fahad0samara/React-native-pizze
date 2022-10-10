import React, {useCallback,useState, useMemo, useRef} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import CustomFooter from "./CustomFooter";

const BUtt = () => {
  // variables
      const [isOpen, setIsOpen] = useState(false);
      const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  // renders
  return (
    <View style={styles.container}>
          <Button title="Present Modal" onPress={handlePresentModal} />
          
      <BottomSheet
        index={1}
        snapPoints={snapPoints}
        footerComponent={CustomFooter}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default BUtt;
