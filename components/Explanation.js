import React from 'react';
import {Button,
    StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    // explanation
    containerExplanationRow: {
      display: "flex",
      flexDirection: "row",
      width:"100%",
      paddingTop:10
    },
    textExplanationCaption:{
      fontWeight:"bold",
      color: "#5E7082"
    },
    textExplanationText: {
      color: "#5E7082"
    },
    textExplanationTextExample:{
      fontStyle:"italic",
      color: "#5E7082"
    }
  })

const Explanation = props => {
    return (
        <View>
            <View style={styles.containerExplanationRow}>
                <Text style={styles.textExplanationText}>
                    <Text style={styles.textExplanationCaption}>
                        {props.caption} 
                    </Text>
                  {props.content}
              </Text>
            </View>
            <Text style={styles.textExplanationTextExample}>{props.example}</Text>
        </View>
        
    );
};

export default Explanation;