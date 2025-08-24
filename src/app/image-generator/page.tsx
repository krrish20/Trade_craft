
import { MainLayout } from '@/components/MainLayout';
import { ImageGeneratorClient } from '@/components/ImageGeneratorClient';
import { curriculum } from '@/content/curriculum';
import { scenarios } from '@/content/scenarios';
import { chartPatterns, candlestickPatterns } from '@/content/resources';


export default function ImageGeneratorPage() {
    const allImages = [
        ...curriculum.flatMap(level => level.lessons.flatMap(lesson => lesson.sections.filter(s => s.type === 'image' && s['data-ai-hint']).map(s => ({
            id: `${lesson.id}-${s['data-ai-hint']}`,
            title: `Lesson: ${lesson.title}`,
            hint: s['data-ai-hint'] as string,
            currentSrc: s.src as string,
        })))),
        ...scenarios.map(scenario => ({
            id: scenario.id,
            title: `Scenario: ${scenario.title}`,
            hint: scenario.image['data-ai-hint'],
            currentSrc: scenario.image.src,
        })),
        ...chartPatterns.map(pattern => ({
            id: `chart-${pattern.name.replace(/\s+/g, '-')}`,
            title: `Chart Pattern: ${pattern.name}`,
            hint: pattern.image['data-ai-hint'],
            currentSrc: pattern.image.src,
        })),
        ...candlestickPatterns.map(pattern => ({
            id: `candle-${pattern.name.replace(/\s+/g, '-')}`,
            title: `Candlestick: ${pattern.name}`,
            hint: pattern.image['data-ai-hint'],
            currentSrc: pattern.image.src,
        })),
    ];
  
    return (
        <MainLayout>
            <div className="space-y-4">
                <div>
                    <h1 className="text-3xl font-bold">AI Image Generator</h1>
                    <p className="text-muted-foreground font-body">
                        Generate images for your application content using AI.
                    </p>
                </div>
                <ImageGeneratorClient imagesToGenerate={allImages} />
            </div>
        </MainLayout>
    );
}
