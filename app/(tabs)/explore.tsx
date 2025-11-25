import { Ionicons } from "@expo/vector-icons";
import { Dislike, FilterEdit, Flag, Like1, Send2 } from "iconsax-react-nativejs";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Notice {
  id: number;
  message: string;
  type: "success" | "error" | "info";
  user: {
    id: number;
    name: string;
    profile_photo_url?: string | null;
    user_type: string;
  };
  school_name: string;
  created_at: string;
  class_level: string;
  notice_image?: string | null;
  notice_text?: string | null;
  font_type?: string | null;
  themed_notice: {
    id: number;
    name: string;
    primary_color: string;
    secondary_color: string;
    font_type: string;
  };
}

const notices: Notice[] = [
  {
    id: 1,
    message: "School assembly will hold tomorrow by 8 AM. All students must attend.",
    type: "info",
    user: {
      id: 11,
      name: "Mrs. Adeola Johnson",
      profile_photo_url: "https://picsum.photos/seed/user1/200/300",
      user_type: "teacher"
    },
    school_name: "Bright Future Academy",
    created_at: "2025-01-15T09:24:00Z",
    class_level: "JSS 2",
    notice_image: "https://picsum.photos/seed/notice1/300/500",
    notice_text: "Please ensure punctuality.",
    font_type: "Roboto",
    themed_notice: {
      id: 101,
      name: "Blue Harmony",
      primary_color: "#1E3A8A",
      secondary_color: "#3B82F6",
      font_type: "Montserrat"
    }
  },

  {
    id: 2,
    message: "Congratulations to all students who participated in the Inter-House Sports competition!",
    type: "success",
    user: {
      id: 22,
      name: "Coach Emmanuel Udo",
      profile_photo_url: "https://picsum.photos/seed/user2/200/300",
      user_type: "staff"
    },
    school_name: "New Vision College",
    created_at: "2025-02-03T14:10:00Z",
    class_level: "SSS 1",
    notice_image: "https://picsum.photos/seed/notice2/320/480",
    notice_text: "You all made us proud!",
    font_type: "Poppins",
    themed_notice: {
      id: 102,
      name: "Sporty Theme",
      primary_color: "#10B981",
      secondary_color: "#6EE7B7",
      font_type: "Inter"
    }
  },

  {
    id: 3,
    message: "There will be a PTA meeting this Friday. Parents are expected to attend.",
    type: "info",
    user: {
      id: 33,
      name: "Principal Okon",
      profile_photo_url: "https://picsum.photos/seed/user3/200/300",
      user_type: "admin"
    },
    school_name: "Unity International School",
    created_at: "2025-01-28T11:55:00Z",
    class_level: "ALL",
    notice_image: "https://picsum.photos/seed/notice3/280/420",
    notice_text: null,
    font_type: "Open Sans",
    themed_notice: {
      id: 103,
      name: "Serene Green",
      primary_color: "#065F46",
      secondary_color: "#34D399",
      font_type: "Lato"
    }
  },

  {
    id: 4,
    message: "Mid-term exams start next week. Make sure to complete revisions.",
    type: "error",
    user: {
      id: 44,
      name: "Mr. David Akpan",
      profile_photo_url: null,
      user_type: "teacher"
    },
    school_name: "Golden Heights School",
    created_at: "2025-02-10T08:00:00Z",
    class_level: "JSS 3",
    notice_image: "https://picsum.photos/seed/notice4/300/520",
    notice_text: "Study hard and avoid exam malpractice.",
    font_type: "Nunito",
    themed_notice: {
      id: 104,
      name: "Vibrant Orange",
      primary_color: "#EA580C",
      secondary_color: "#FDBA74",
      font_type: "Quicksand"
    }
  },

  {
    id: 5,
    message: "New hostel rules have been released. Students should check the notice board.",
    type: "info",
    user: {
      id: 55,
      name: "Hostel Supervisor Grace",
      profile_photo_url: "https://picsum.photos/seed/user5/200/300",
      user_type: "staff"
    },
    school_name: "Crestwood Boarding School",
    created_at: "2025-02-20T17:40:00Z",
    class_level: "Boarders",
    notice_image: "https://picsum.photos/seed/notice5/310/500",
    notice_text: null,
    font_type: null,
    themed_notice: {
      id: 105,
      name: "Royal Purple",
      primary_color: "#6D28D9",
      secondary_color: "#C4B5FD",
      font_type: "Georgia"
    }
  }
];


// ----------------------
// COMPONENT
// ----------------------

const NoticeBoard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Add Button */}
      <View>  
        <View style={styles.addButton}>
          <TouchableOpacity style={styles.AddButtonCon}>
            <Ionicons name="add-circle" size={20 } color="#6A0DFF" />
            <Text style={styles.NoticesText}>My Notices</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Notice Board</Text>
        <View style={styles.filterButton}>
          <TouchableOpacity>
            <FilterEdit size={24} variant="Linear" color="#697689"/>
          </TouchableOpacity>
        </View>
      </View>

      {/* DYNAMICALLY RENDER NOTICES */}
      {notices.map((item) => (
        <View key={item.id} style={styles.card}>
          {/* User info */}
          <View style={styles.row}>
            <Image
              source={{
                uri:
                  item.user.profile_photo_url ||
                  "https://picsum.photos/seed/default/200",
              }}
              style={styles.avatar}
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={styles.name}>{item.user.name}</Text>
              <Text style={styles.time}>
                {new Date(item.created_at).toDateString()} ·{" "}
                {item.user.user_type}
              </Text>
            </View>

            <View
              style={[
                styles.badge,
                { backgroundColor: item.themed_notice.secondary_color + "33" },
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  { color: item.themed_notice.primary_color },
                ]}
              >
                {item.type.toUpperCase()}
              </Text>
            </View>
          </View>

          {/* Notice Image */}
          {item.notice_image && (
            <Image source={{ uri: item.notice_image }} style={styles.postImage} />
          )}

          {/* Message */}
          <Text style={styles.caption}>{item.message}</Text>

          {/* ACTION BUTTONS */}
          <View style={styles.actions}>
            <View style={styles.actionItems}>
              <View style={styles.actionItem}>
                <Like1 size={18} color="#697689"/>
                <Text style={styles.actionText}>Like</Text>
              </View>
              <View style={styles.actionItem}>
                <Dislike size={18} color="#697689"/>
                <Text style={styles.actionText}>1.2k</Text>
              </View>
              <View style={styles.actionItem}>
                <Send2 size={18} color="#697689"/>
                <Text style={styles.actionText}></Text>
              </View>
            </View>
            <Flag size={18} color="#697689"/>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default NoticeBoard;

// ----------------------
// STYLES
// ----------------------

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
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    position: "absolute",
    right: 0,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },

  postImage: {
    width: "100%",
    height: 380,
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
    justifyContent: 'space-between',
  },

  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  actionText: {
    fontSize: 14,
    color: "#555",
  },

  addButton: {
    alignSelf: "flex-end",
    paddingTop: 30,
    paddingRight: 20,
  },

  filterButton: {
    alignSelf: "flex-end",
  },

  NoticesText: {
    alignSelf: 'flex-end',
    fontSize: 15,
    color: "#6A0DFF",
  },

  AddButtonCon: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    
  },

  actionFlag: {
    flexDirection: 'row',
    gap: 80,
  },

  actionItems: {
    flexDirection: 'row'
  }
});