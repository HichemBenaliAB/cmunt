"use client";

import Link from "next/link";
import { User } from "next-auth";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { ChevronDown } from "lucide-react";

interface NewsDropDownProps {
  direction: string;
}

export default function UserAccountNav({ direction }: NewsDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" flex items-center outline-none">
        <li className="font-semibold text-sm cursor-pointer ">{direction}</li>
        <ChevronDown className="p-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white  border border-3" align="end">
        <DropdownMenuItem asChild>
          <Link href="/">Feed</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/r/create">Create Community</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
