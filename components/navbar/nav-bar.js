import { TreeItem, TreeView } from "@mui/lab";
import { Box, Button, Card, Divider, Link, Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavBarContent } from "./nav-bar-content";

export default function NavBar({ size, setSize }) {
  return (
    <Stack sx={{ transition: "ease-in-out 0.3s" }} width={size} position={"fixed"} top={0} bottom={0}>
      <Button
        sx={{
          transition: "ease-in-out 0.3s",
          width: "max-content",
          position: "absolute",
          top: 10,
          left: size === 0 ? "calc(100% + 20px)" : "calc(100% - 100px)",
          zIndex: 2,
        }}
        variant="contained"
        onClick={() => setSize((old) => (old === "300px" ? 0 : "300px"))}
      >
        {size === 0 ? "Show" : "Hide"}
      </Button>

      <Card sx={{ position: "relative", height: "100%", background: "rgba(255,255,255,0.1)" }}>
        <Stack color={"#fff"} height={"100px"}>
          Header{" "}
          {/* <Button variant="contained" sx={{ width: "max-content" }} onClick={() => setSize((old) => (old === "300px" ? 0 : "300px"))}>
            Hide
          </Button> */}
        </Stack>
        <Divider sx={{ background: "rgba(255,255,255,0.1)" }} />
        <Stack height="calc(100% - 200px)" sx={{ background: "rgba(0,0,0,0.3)" }}>
          <TreeView>
            <TreeCreator data={NavBarContent} />
          </TreeView>
        </Stack>
        <Divider sx={{ background: "rgba(255,255,255,0.1)" }} />
        <Stack color={"#fff"} height={"100px"}>
          Feet
        </Stack>
      </Card>
    </Stack>
  );
}
function TreeCreator({ data }) {
  return data.map((item) => {
    if (item.sub) {
      return (
        <ExpandItem
          key={item.id}
          label={item.label}
          detail={<TreeCreator data={item.sub} />}
          level={item.level}
          link={null}
          Icon={item.icon}
        />
      );
    } else {
      return <ExpandItem key={item.id} label={item.label} detail={null} link={item.link} level={item.level} Icon={item.icon} />;
    }
  });
}

function ExpandItem({ label, detail, link, level, Icon }) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Stack>
      {link === null ? (
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            cursor: "pointer",
            paddingX: 2,
            paddingY: 1,
            paddingLeft: (level + 1) * 3,
            "&:hover": {
              background: "rgba(255,255,255,0.1)",
            },
          }}
          onClick={() => setIsExpand((old) => !old)}
        >
          <Stack direction={"row"} gap={1}>
            {Icon && <Icon sx={{ color: "#fff" }} />}
            <Typography sx={{ fontWeight: level == 0 ? "bold" : 200, color: level == 0 ? "#fff" : "rgba(255,255,255,0.8)" }}>
              {label}
            </Typography>
          </Stack>
          {isExpand ? <ArrowDropDownIcon sx={{ color: "#fff" }} /> : <ArrowRightIcon sx={{ color: "#fff" }} />}
        </Stack>
      ) : (
        <Box
          sx={{
            cursor: "pointer",
            paddingX: 2,
            paddingY: 1,
            paddingLeft: (level + 1) * 3,
            "&:hover": {
              background: "rgba(255,255,255,0.1)",
            },
          }}
          onClick={() => setIsExpand((old) => !old)}
        >
          <Link href={link}>{label}</Link>
        </Box>
      )}

      {link === null && (
        <Stack
          sx={{
            maxHeight: isExpand ? "max-content" : "0px",
            transition: "ease-in-out 0.4s",
            overflow: "hidden",
          }}
        >
          {detail}
        </Stack>
      )}
    </Stack>
  );
}
