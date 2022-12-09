import FitbitIcon from "@mui/icons-material/Fitbit";
import GridViewIcon from "@mui/icons-material/GridView";
export const NavBarContent = [
  {
    id: "0",
    label: "Components",
    link: null,
    level: 0,
    icon: GridViewIcon,
    sub: [
      {
        id: "01",
        label: "Button",
        link: null,
        level: 1,
        icon: null,
        sub: [
          {
            id: "011",
            label: "Dialog",
            link: "/component/button/dialog",
            level: 2,
            icon: null,
            sub: null,
          },
          {
            id: "012",
            label: "Confirmation",
            link: "/component/button/confirmation",
            level: 2,
            icon: null,
            sub: null,
          },
        ],
      },
      {
        id: "02",
        label: "Panel",
        link: null,
        level: 1,
        icon: null,
        sub: [
          {
            id: "021",
            label: "Transparent",
            link: "/component/button/dialog",
            level: 2,
            icon: null,
            sub: null,
          },
          {
            id: "022",
            label: "Solid",
            link: "/component/button/confirmation",
            level: 2,
            icon: null,
            sub: null,
          },
        ],
      },
    ],
  },
  {
    id: "1",
    label: "Utilities",
    link: null,
    level: 0,
    icon: FitbitIcon,
    sub: [
      {
        id: "11",
        label: "Array",
        link: null,
        level: 1,
        icon: null,
        sub: [
          {
            id: "111",
            label: "Convert to Tree",
            link: "/component/button/dialog",
            level: 2,
            icon: null,
            sub: null,
          },
        ],
      },
      {
        id: "12",
        label: "Object",
        link: null,
        level: 1,
        icon: null,
        sub: [
          {
            id: "121",
            label: "Convert to List",
            link: "/component/button/dialog",
            level: 2,
            icon: null,
            sub: null,
          },
        ],
      },
    ],
  },
];
