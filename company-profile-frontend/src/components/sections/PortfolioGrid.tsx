"use client";

import { useState } from "react";
import { Portfolio } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PortfolioGridProps {
  initialItems: Portfolio[];
}

export default function PortfolioGrid({ initialItems }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(initialItems.map((item) => item.category)))];

  const filteredItems = selectedCategory === "All"
    ? initialItems
    : initialItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full px-6 py-2 text-sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden border-border/30 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative aspect-video overflow-hidden bg-zinc-100 border-b border-border/20">
              <img
                src={project.image_url}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-zinc-950/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <span className="text-xs font-medium text-muted-foreground">
                  Client: {project.client} &bull; {project.year}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors mt-1">
                  {project.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
