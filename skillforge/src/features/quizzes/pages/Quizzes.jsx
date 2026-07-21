import React from 'react';

export default function Quizzes() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Quizzes</h1>
        <p className="text-muted-foreground mt-2">Dashboard / Quizzes</p>
      </div>
      <div className="flex flex-col items-center justify-center p-12 text-center bg-muted/20 border border-border/50 rounded-2xl">
        <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
        <p className="text-muted-foreground max-w-md">
          Exciting quizzes are on the way. Stay tuned!
        </p>
      </div>
    </div>
  );
}
