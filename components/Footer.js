import React from "react";
import Link from "next/link";
import { config } from "../config/config.yml";

export default function Footer() {
    return (
        <div className="footer">
            {new Date().getFullYear()} {config.author} |
            <Link a href='https://creativecommons.org/licenses/by-sa/4.0/'> CC BY-SA 4.0</Link>
        </div>
    );
}
