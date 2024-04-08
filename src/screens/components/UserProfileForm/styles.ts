import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    borderRadius: 25,
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
    borderBottomWidth: 1,
    height: 25,
    marginBottom: 5,
    fontSize: 15,
  },
  button: {
    width: "100%",
    borderRadius: 20,
    paddingVertical: 12,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
