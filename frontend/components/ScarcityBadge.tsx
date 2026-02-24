import React from 'react';
import { Flame } from 'lucide-react';

interface ScarcityBadgeProps {
    stock: number;
}

export default function ScarcityBadge({ stock }: ScarcityBadgeProps) {
    if (stock >= 3) return null;

    return (
        <div className="absolute top-2 left-2 z-10 bg-[#6E0D25] text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-sm shadow-md flex items-center gap-1 animate-pulse">
            <Flame size={12} className="text-[#C6A756]" />
            <span>Only {stock} Left!</span>
        </div>
    );
}
