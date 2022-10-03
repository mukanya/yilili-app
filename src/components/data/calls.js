import { Link } from 'react-router-dom';

export const CallsMenu = [
    {
      id: 1,
      name: "Speed Dial",
      icon: <i class="fi-rr-smartphone"></i>,
    },
    {
      id: 2,
      name: "Contacts",
      icon: <i class="fi-rr-portrait"></i>,
    },
    {
      id: 3,
      name: "History",
      icon: <i class="fi-rr-time-past"></i>,
    },
    {
      id: 4,
      name: "Voicemail",
      icon: <i class="fi-rr-microphone"></i>,
    },
  ];
  
  export const DialerList = [
    {
      id: 1,
      name: "Yoruba Doctor",
      type: "Student",
      avatar:
        "https://img.icons8.com/color/96/000000/user-male-circle--v2.png",
    },
    {
      id: 2,
      name: "Zulu Queen",
      type: "Teacher",
      avatar:
        "https://img.icons8.com/doodle/48/000000/user-female-skin-type-5--v1.png",
    },
    {
      id: 3,
      name: "Brian Gondo",
      type: "Admin",
      avatar:
        "https://img.icons8.com/color/48/000000/circled-user-male-skin-type-6--v1.png",
    },
  ];
  
  export const CallsContact = [
    {
      id: 1,
      name: "Yoruba Doctor",
      type: "Student",
      avatar: "https://img.icons8.com/color/96/000000/user-male-circle--v2.png",
    },
    {
      id: 2,
      name: "Xhosa Xpert",
      type: "Student",
      avatar: "https://img.icons8.com/officexs/80/000000/user-male-skin-type-3.png",
    },
    {
      id: 1,
      name: "Pedi Guru",
      type: "Hacker",
      avatar: "https://img.icons8.com/color/96/000000/circled-user-female-skin-type-6--v2.png",
    },
    {
      id: 2,
      name: "Chichewa Magician",
      type: "Teacher",
      avatar:
        "https://img.icons8.com/office/80/000000/circled-user-female-skin-type-6.png",
    },
    {
      id: 1,
      name: "Punjabi Don",
      type: "Student",
      avatar: "https://img.icons8.com/plasticine/100/000000/guest-male.png",
    },
    {
      id: 2,
      name: "Lionel Messi",
      type: "Student",
      avatar: "https://img.icons8.com/stickers/100/000000/user-male-circle.png",
    },
    {
      id: 2,
      name: "uShaka the Zulu King",
      type: "Staff",
      avatar: "https://img.icons8.com/bubbles/100/000000/user-female.png",
    },
  ];
  


  export const startLesson = () => {
    return (
      <nav className='navbar'>
  
        <Link to='/../language-app-user-2.0-main/static/index.html' />
  
      </nav>
    );
  }