"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

type Props = {
  id: string;
  name: string;
  imageUrl: string;
};

export const Item = ({ id, imageUrl, name }: Props) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          onClick={onClick}
          fill
          className={cn(
            "rounded-md opacity-75 cursor-pointer hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};
