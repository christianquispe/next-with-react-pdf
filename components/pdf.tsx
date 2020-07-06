import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

interface IProps {
  name?: string;
  itemList?: string[];
}

const styles = StyleSheet.create({
  page: { padding: "15px" },
  title: {
    color: "black",
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "20px",
  },
});

export const MakePDF: React.FC<IProps> = ({ name, itemList }) => {
  return (
    <Document>
      <Page style={styles.page} size="A4" wrap>
        <View fixed>
          <Text style={styles.title}>
            Presented to you by{" "}
            <Link src={"https://github.com/christianquispe"}>
              Christian Quispe
            </Link>
          </Text>
        </View>
        <View style={{ borderBottom: "1px solid #555", marginBottom: 10 }}>
          <Text style={{ fontWeight: 700, fontSize: 22 }}>Hola, {name}</Text>
          <Text style={{ fontSize: 12, color: "#555" }}>
            Este es un texto de prueba para probar los props
          </Text>
          <Text style={{ fontSize: 12, color: "#555" }}>
            Esta es tu lista de frutas preferidas
          </Text>
          {itemList &&
            itemList.map((item) => {
              return (
                <Text
                  style={{
                    color: "green",
                    fontSize: "14px",
                    paddingLeft: "15px",
                    borderBottom: "1px solid black",
                  }}
                >
                  {item}
                </Text>
              );
            })}
        </View>
      </Page>
    </Document>
  );
};
