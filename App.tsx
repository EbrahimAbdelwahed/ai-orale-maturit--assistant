import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import MacroAreaCard from './components/MacroAreaCard';
import QuickCheck from './components/QuickCheck';
import GeminiQuiz from './components/GeminiQuiz';
import StudyAssistant from './components/StudyAssistant'; // Import new component
import Footer from './components/Footer';
import { MACRO_AREAS_DATA } from './data/studyData';
import { MacroArea } from './types';

const App: React.FC = () => {
  const [activeMacroAreaIds, setActiveMacroAreaIds] = useState<Set<string>>(new Set());
  const [ripassoVisible, setRipassoVisible] = useState<{ [areaId: string]: boolean }>({});

  const macroAreas: MacroArea[] = useMemo(() => MACRO_AREAS_DATA, []);

  const handleToggleArea = useCallback((areaId: string) => {
    setActiveMacroAreaIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(areaId)) {
        newSet.delete(areaId);
      } else {
        newSet.add(areaId);
      }
      return newSet;
    });
  }, []);

  const handleToggleRipasso = useCallback((areaId: string) => {
    setRipassoVisible(prev => ({
      ...prev,
      [areaId]: !prev[areaId]
    }));
  }, []);

  return (
    <div className="container mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
      <Header />
      <Instructions activeAreasCount={activeMacroAreaIds.size} totalAreas={macroAreas.length} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-6 sm:mb-8">
        {macroAreas.map((area, index) => (
          <MacroAreaCard
            key={area.id}
            area={area}
            index={index}
            isActive={activeMacroAreaIds.has(area.id)}
            isRipassoVisible={!!ripassoVisible[area.id]}
            onAreaToggle={handleToggleArea}
            onToggleRipasso={handleToggleRipasso}
          />
        ))}
      </div>
      
      <StudyAssistant macroAreas={macroAreas} />
      <GeminiQuiz macroAreas={macroAreas} />
      <QuickCheck />
      <Footer />
    </div>
  );
};

export default App;