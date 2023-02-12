import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Link from "next/link";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";

type LayoutProps = {
  children: React.ReactNode;
};

export default function VerticalLayout(props: LayoutProps) {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem
            component={<Link href="/" />}
            icon={<HomeIcon height={20} />}
            active={true}
          >
            <p style={{ margin: 0, marginTop: "3px" }}>Home</p>
          </MenuItem>
          <MenuItem component={<Link href="/about" />}>About</MenuItem>
          <MenuItem component={<Link href="/" />}>Home</MenuItem>
        </Menu>
      </Sidebar>

      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
        {props.children}
      </main>
    </div>
  );
}
