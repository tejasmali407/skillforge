import React from 'react';

export default function Courses() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Courses</h1>
        <p className="text-muted-foreground mt-2">Dashboard / Courses</p>
      </div>
      <div className="flex flex-col items-center justify-center p-12 text-center bg-muted/20 border border-border/50 rounded-2xl">
        <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
        <p className="text-muted-foreground max-w-md">
          We're working hard to bring you exciting new courses. Stay tuned!
        </p>
      </div>
    </div>
  );
}
