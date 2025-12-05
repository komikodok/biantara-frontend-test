"use client"

import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PracticeTypeSelector from './practice-type-selector';
import { usePracticeType } from '@/contexts/practice-type-context';

interface PracticeHeaderProps {
  username?: string;
}

export function PracticeHeader({ username = "Betari" }: PracticeHeaderProps) {
    const { practiceType } = usePracticeType()
    return (
        <div className="flex items-center justify-between px-8 py-4 bg-white border-b">
            <div className="flex items-center gap-2 text-sm">
                <Home className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Home</span>
                <span className="text-gray-400">/</span>
                <span className="font-medium text-gray-900">{practiceType}</span>
                <PracticeTypeSelector />
            </div>
            
            <Button variant="outline" className="rounded-full">
                <span className="font-medium">{username}</span>
            </Button>
        </div>
    );
}