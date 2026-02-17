export const chatsData = [
  {
    id: 1,
    name: "Faculty Lounge",
    type: "group",
    lastMessage: "Michael: The curriculum update is live.",
    time: "12:40 PM",
    unread: 0,
    online: 14,
    category: "Staff Only",
    avatar: null,
    isStaff: true,
  },
  {
    id: 2,
    name: "Alex Rivera",
    type: "individual",
    lastMessage: "I need help with Module 3...",
    time: "2:45 PM",
    unread: 3,
    online: true,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR4nTAa9bitu-TNcWJ5Jm2kyRlK2CfBcLRBjniVFd28EIoClv8A57O8p9uPiLYVkvQatDqvo9zLHEF5eL-CrQ_RUyOUNxELrmGP0TDEZXifoJo5fn765CgATf2Y8KUeJPNqTp7fZ3rukLjWZ73pTaOR6DaMZir3IFcGgpoN75sTZMkp5ie-pplBIaV6vbTE5QV2y6cN0kR2FKbWHi5slVbiVf5n2pH4M58SdWh7v_Lw6luMCfSPy1XN8vNfBP36uyeJdOR1D0cNA",
    role: "Student",
  },
  {
    id: 3,
    name: "Sarah Chen",
    type: "individual",
    lastMessage: "Thank you for the extension!",
    time: "Yesterday",
    unread: 0,
    online: false,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsIer-cYzxvCDmg27D4Gz3VILDrHNEfVRiFBf2irlJuipxLsgpPaEqh7dBurXbjJS0NDTgLOUJXM7sb5g7DaZlyz0DUXcaawyJA7q-oXPQv_mZtXfFs4HucG92hvO8a2PoKA8OhzNoQhgw1XvNNWneLAs1f8nbVlx8AEAnDBNf7FiGs2hDBkoKzTXvpdfWAMxPafAHMjiRHT_SVmSSLachPhUFP9Aro3hBylIPTQFSl_08hsHkfZ6Tzu48lzJD4PP8Amc1ex9vdQ",
    role: "Student",
  },
];

export const messagesData = [
  {
    id: 1,
    sender: "Dr. Michael Smith",
    time: "10:15 AM",
    content:
      "Hi Team, I've just uploaded the revised curriculum for Module 3. Please review the 'Practical Applications' section before the 2 PM meeting.",
    isMe: false,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADtdqReigdk0z577HapS9MFl_Dc7ddQ4U0OZUAcf9vguLggY8X3xqk_zgF9oUDBWk5Ny-9blAAVqNXAePksjUR6CJk7U32ZmxaP89vj64LMpPF_fEeNHXO_upzxxQQeQJK2KB0OMNBvY3W3Z1CVZj66Q108pHb30_VJFQ8Tc2ny44vl5yRelpQO6rEicURlOyUcF25vHInI0ImWGkyDOcoOTFpS5MOLmS_4zZpmfYSgTiXVvr65HlwYnfMpOd_v4qyYXFHYWMRAQ",
  },
  {
    id: 2,
    type: "broadcast",
    content:
      "All Module 3 students: Your dashboard has been updated with new reading materials.",
    time: "11:30 AM",
  },
  {
    id: 3,
    sender: "You (Admin)",
    time: "12:40 PM",
    content:
      "Understood, Michael. I'll make sure the tech team has verified the links in the new syllabus.",
    isMe: true,
  },
];
