import { Tabs } from "components";
import { ITab } from "components/Ui/Tabs/Tabs";
import React, { useState } from "react";

type Props = {};

export const TabsPage: React.FC = (props: Props) => {
  const tabs: ITab[] = [
    {
      id: "1",
      label: "Заголовок 1",
    },
    {
      id: "2",
      label: "Заголовок 2",
    },
  ];
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const handleTabClick = (id: string | number) => {
    setActiveTabId(id);
  };
  return (
    <>
      <Tabs tabs={tabs} selectedId={activeTabId} onClick={handleTabClick} />
    </>
  );
};
