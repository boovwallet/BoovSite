// Illustrative donor-side activity. Names and events are fictional; portraits
// are licensed Unsplash assets and do not depict the people described here.

export type AlertItem = {
  key: string;
  avatar: string;
  name: string;
  message: string;
  detail: string;
  amount: string;
  time: string;
  badge: string;
  tone: "spend" | "community" | "nearby" | "update";
};

export const ALERTS: AlertItem[] = [
  {
    key: "john-bread",
    avatar: "/avatars/john.jpg",
    name: "John",
    message: "spent your $2 donation on bread.",
    detail: "9th Street Bakery · Receipt confirmed",
    amount: "$2.00",
    time: "now",
    badge: "Your impact",
    tone: "spend",
  },
  {
    key: "angel-ninth-street",
    avatar: "/avatars/angel.jpg",
    name: "Angel",
    message: "donated $8 on 9th Street.",
    detail: "She joined 4 neighbors funding tonight's essentials.",
    amount: "+$8",
    time: "2m",
    badge: "Community",
    tone: "community",
  },
  {
    key: "maya-lunch",
    avatar: "/avatars/maya.jpg",
    name: "Maya",
    message: "opened a lunch table nearby.",
    detail: "Visit St. Mark's on 12th Street before 2 PM.",
    amount: "18 left",
    time: "5m",
    badge: "Near you",
    tone: "nearby",
  },
  {
    key: "marcus-harbor-house",
    avatar: "/avatars/marcus.jpg",
    name: "Marcus",
    message: "checked into Harbor House.",
    detail: "Your $6 helped cover tonight's bed at 311 Bowery.",
    amount: "$6.00",
    time: "11m",
    badge: "Confirmed",
    tone: "spend",
  },
  {
    key: "elena-transit",
    avatar: "/avatars/elena.jpg",
    name: "Elena",
    message: "used your transit gift on the M14.",
    detail: "Boarded at 8th Avenue · Fare confirmed",
    amount: "$2.90",
    time: "18m",
    badge: "On the move",
    tone: "spend",
  },
  {
    key: "theo-pharmacy",
    avatar: "/avatars/theo.jpg",
    name: "Theo",
    message: "picked up his prescription.",
    detail: "Community Pharmacy on Avenue A · Copay covered",
    amount: "$4.00",
    time: "26m",
    badge: "Receipt checked",
    tone: "spend",
  },
  {
    key: "lena-thanks",
    avatar: "/avatars/lena.jpg",
    name: "Lena",
    message: "left you a thank-you.",
    detail: "“The warm coat made my week.”",
    amount: "New note",
    time: "34m",
    badge: "Update",
    tone: "update",
  },
  {
    key: "david-match",
    avatar: "/avatars/david.jpg",
    name: "David",
    message: "matched your grocery donation.",
    detail: "Your $5 became $10 at Pine Market on 6th Street.",
    amount: "2× match",
    time: "47m",
    badge: "Community",
    tone: "community",
  },
];
