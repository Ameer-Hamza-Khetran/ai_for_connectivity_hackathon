"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavbarMenu";
import { cn } from "@/lib/utils";
export function NavbarMain() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-5" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Overview</HoveredLink>
                        <HoveredLink href="/interface-design">Our Missionn</HoveredLink>
                        <HoveredLink href="/seo">Key Objectives</HoveredLink>
                        <HoveredLink href="/branding">The Impact of AI</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="AI Solutions">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Identifying Underserved Areas"
                            href="https://lablab.ai/event/ai-for-connectivity-hackathon"
                            src="https://res.cloudinary.com/dg3oj3rkx/image/upload/v1737860113/ai_for_connectivity_hackathon/underserved_areas_jylust.jpg"
                            description="How AI identifies regions with limited connectivity"
                        />
                        <ProductItem
                            title="AI Models and Techniques"
                            href="https://lablab.ai/event/ai-for-connectivity-hackathon"
                            src="https://res.cloudinary.com/dg3oj3rkx/image/upload/v1737860112/ai_for_connectivity_hackathon/ai_cxwyzg.jpg"
                            description="Overview of decision trees, clustering, and logistic regression."
                        />
                        <ProductItem
                            title="AI-Powered Recommendations"
                            href="https://lablab.ai/event/ai-for-connectivity-hackathon"
                            src="https://res.cloudinary.com/dg3oj3rkx/image/upload/v1737860112/ai_for_connectivity_hackathon/ai_recommendations_wh7v3m.webp"
                            description="Priority scores and what-if analysis."
                        />
                        <ProductItem
                            title="What Sets Us Apart"
                            href="https://lablab.ai/event/ai-for-connectivity-hackathon"
                            src="https://res.cloudinary.com/dg3oj3rkx/image/upload/v1737860113/ai_for_connectivity_hackathon/sets_apart_uwiiai.jpg"
                            description="Lightweight models and unique insights."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Resources">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Case Studies</HoveredLink>
                        <HoveredLink href="/individual">Datasets and Tools</HoveredLink>
                        <HoveredLink href="/team">Blog</HoveredLink>
                        <HoveredLink href="/enterprise">FAQs</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
