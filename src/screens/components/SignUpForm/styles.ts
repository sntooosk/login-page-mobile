import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    marginTop: "15%",
    marginBottom: "10%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  containerForm: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  title: {
    fontSize: 16,
    marginTop: 15,
    paddingBottom: 8,
  },
  checkbox: {
    margin: 5,
  },
  label: {
    fontSize: 15,
    paddingLeft: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxContainerDoc: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#f2f3f7",
    height: 50,
    marginBottom: 12,
    borderRadius: 10,
    fontSize: 12,
    paddingStart: 10
  },
  button: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  togglePasswordButton: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  togglePasswordButtonText: {
    fontSize: 14,
  },
  backToLogin: {
    fontSize: 14,
    marginTop: 16,
    textAlign: "center",
  },
});
