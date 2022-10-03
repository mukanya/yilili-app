import { Link } from "react-router-dom";

export const SidebarData = [
    {
      id: 1,
      name: "Start Lesson",
      icon: <i class="fi-rr-headset"></i>,
      link: <div><nav><Link to="lesson">Lesson</Link></nav></div>
    },
    {
      id: 2,
      name: "Chat",
      icon: <i class="fi-rr-comment"></i>,
    },
    // {
    //   id: 3,
    //   name: "Teams",
    //   icon: <i class="fi-rr-users"></i>,
    // },
    {
      id: 4,
      name: "Assignments",
      icon: <i class="fi-rr-backpack"></i>,
    },
    {
      id: 5,
      name: "Calender",
      icon: <i class="fi-rr-calendar"></i>,
    },
    {
      id: 6,
      name: "Activity",
      icon: <i class="fi-rr-bell"></i>,
    },
    {
      id: 7,
      name: "Files",
      icon: <i class="fi-rr-file"></i>,
    },
  ];

  
  
  export const SidebarMore = {
    icon: <i class="fi-rr-menu-dots"></i>,
  };
  
  export const SidebarBottom = [
    // {
    //   id: 1,
    //   name: "Apps",
    //   icon: <i class="fi-rr-apps-add"></i>,
    // },
    {
      id: 2,
      name: "Help",
      icon: <i class="fi-rr-interrogation"></i>,
    },
  ];
  
