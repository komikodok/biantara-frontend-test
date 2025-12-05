"use client"

import { FileText, Headphones, Edit3, Mic } from 'lucide-react';
import BeginPracticeDialog from './begin-practice-dialog';
import SidebarButton from './sidebar-button';
import SkillCard from './skill-card';
import { usePracticeType } from '@/contexts/practice-type-context';
import { useParams } from 'next/navigation';


export function PracticeContent() {
    const params = useParams()
    const { practiceType } = usePracticeType()

    return (
            <div className="flex-1 bg-gray-50 overflow-auto">
                <div className="max-w-4xl mx-auto px-8 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Practice Test {params.id}
                        </h1>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                            The {practiceType} test lasts approximately 2 hours and 45 minutes.
                            <br />
                            Candidates are advised to read all instructions carefully before beginning
                            <br />
                            each section and adhere to the time limits.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
                            Select Skill
                        </h2>
                    
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <SkillCard
                                icon={<FileText className="w-6 h-6" />}
                                title="Reading Section"
                                subtitle="40 Questions  •  60 Minutes"
                                isSelected={true}
                            />
                            
                            <SkillCard
                                icon={<Headphones className="w-6 h-6" />}
                                title="Listening Section"
                                subtitle="40 Questions  •  10 Minutes"
                            />
                            
                            <SkillCard
                                icon={<Edit3 className="w-6 h-6" />}
                                title="Writing Section"
                                subtitle="2 Tasks  •  60 Minutes"
                            />
                            
                            <SkillCard
                                icon={<Mic className="w-6 h-6" />}
                                title="Speaking Section"
                                subtitle="11 - 14 Minutes"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                    <BeginPracticeDialog />
                    </div>
                </div>

                <SidebarButton />
            </div>
    );
}