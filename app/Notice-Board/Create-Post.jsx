import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const NoticeBoard = () => {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Notice Board</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={26} color="#6A0DFF" />
        </TouchableOpacity>
      </View>

      {/* NOTICE POST */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Image
            source={{ uri: "file:///mnt/data/figma Notice-Board.jpg" }}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>Emeka O. Chigbu</Text>
            <Text style={styles.time}>1 hr · Notice</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>School Update</Text>
          </View>
        </View>

        {/* Post Image */}
        <Image
          source={{ uri: "file:///mnt/data/figma Notice-Board.jpg" }}
          style={styles.postImage}
        />

        <Text style={styles.caption}>
          WELCOME BACK TO SCHOOL — 2nd Term Begins Jan 8th, 2025
        </Text>

        {/* ACTION BUTTONS */}
        <View style={styles.actions}>
          <View style={styles.actionItem}>
            <Ionicons name="heart-outline" size={22} color="#555" />
            <Text style={styles.actionText}>2.3K</Text>
          </View>

          <View style={styles.actionItem}>
            <Ionicons name="chatbubble-outline" size={22} color="#555" />
            <Text style={styles.actionText}>438</Text>
          </View>
        </View>
      </View>

      {/* ANOTHER POST */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Image
            source={{ uri: "file:///mnt/data/figma Notice-Board.jpg" }}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>Chigbu V. Amarachi</Text>
            <Text style={styles.time}>1 hr · Student</Text>
          </View>
        </View>

        <Image
          source={{ uri: "file:///mnt/data/figma Notice-Board.jpg" }}
          style={styles.postImage}
        />

        <Text style={styles.caption}>College Night — Charlin House</Text>

        <View style={styles.actions}>
          <View style={styles.actionItem}>
            <Ionicons name="heart-outline" size={22} color="#555" />
            <Text style={styles.actionText}>620</Text>
          </View>

          <View style={styles.actionItem}>
            <Ionicons name="chatbubble-outline" size={22} color="#555" />
            <Text style={styles.actionText}>91</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

export default NoticeBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
  },

  time: {
    fontSize: 12,
    color: "#777",
  },

  badge: {
    backgroundColor: "#FDE4FF",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    position: "absolute",
    right: 0,
  },

  badgeText: {
    color: "#8A00FF",
    fontSize: 12,
  },

  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 10,
  },

  caption: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
  },

  actions: {
    flexDirection: "row",
    marginTop: 12,
  },

  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },

  actionText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#555",
  },
});
