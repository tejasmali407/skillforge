import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function QuoteCard({ quote }) {
  if (!quote) return null;

  return (
    <Card className="border-border/40 shadow-sm bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-md rounded-2xl">
      <CardContent className="p-4">
        <Quote className="w-6 h-6 text-primary/40 mb-2 rotate-180" />
        <p className="text-sm font-medium italic text-foreground mb-3 leading-relaxed">
          "{quote.text}"
        </p>
        <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
          — {quote.author}
        </p>
      </CardContent>
    </Card>
  );
}
