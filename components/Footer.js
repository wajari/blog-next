import React from "react";
import Link from "next/link";
import { config } from "../config/config.yml";
import { FaReact } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      {new Date().getFullYear()} | {config.author} | <span>&nbsp;</span>
      <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
        <a title="CC BY-SA"> CC BY-SA 4.0</a>
      </Link>{" "}
      <span>&nbsp;</span> | <br></br>
      Made with love with <span>&nbsp;</span> <FaReact /> <span>&nbsp;</span>{" "}
      and Next | <span>&nbsp;</span> Thanks to:<span>&nbsp;</span>
      <Link href="https://github.com/lorenseanstewart/nextjs-mdx-blog-kit">
        <a title="Next Blog">Blog kit</a>
      </Link>
    </div>
  );
}
