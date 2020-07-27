import { StyleSheet} from 'react-native'

const style = StyleSheet.create({

    container:{

        

    },
    header: {

        backgroundColor: "#29f2c3",
        height: 55,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"

    },
    main: {

        height:"80%",

    },
    viewTxtInput: {

        height: 50,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 5,
        position: "absolute",
        bottom: -78,
        flexDirection: "row",
        borderTopColor: "black",
        borderTopWidth: .3

    },
    txtInput: {

        width: "90%",

    },
    send: {

        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: .3,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center",

    },

})

export default style