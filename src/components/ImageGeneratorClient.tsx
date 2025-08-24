
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateImage } from '@/ai/flows/image-generation-flow';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';

interface ImageToGenerate {
    id: string;
    title: string;
    hint: string;
    currentSrc: string;
}

interface ImageGeneratorClientProps {
  imagesToGenerate: ImageToGenerate[];
}

export function ImageGeneratorClient({ imagesToGenerate }: ImageGeneratorClientProps) {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  
  const handleGenerateImage = async (id: string, hint: string) => {
    setLoadingStates(prev => ({ ...prev, [id]: true }));
    try {
      const result = await generateImage({ prompt: hint });
      setGeneratedImages(prev => ({...prev, [id]: result.imageDataUri }));
       toast({
        title: "Image Generated!",
        description: `Successfully generated image for: ${hint}`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate image. Please try again.",
      });
    } finally {
       setLoadingStates(prev => ({ ...prev, [id]: false }));
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {imagesToGenerate.map((image) => (
        <Card key={image.id}>
          <CardHeader>
            <CardTitle>{image.title}</CardTitle>
            <CardDescription>Hint: {image.hint}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-around gap-2">
                <div className="w-1/2">
                    <p className="text-sm font-semibold text-center mb-2">Current</p>
                    <Image
                        src={image.currentSrc}
                        alt="Current placeholder image"
                        width={200}
                        height={100}
                        className="rounded-md border object-cover aspect-video"
                    />
                </div>
                 <div className="w-1/2">
                    <p className="text-sm font-semibold text-center mb-2">Generated</p>
                    <div className="w-full aspect-video rounded-md border bg-muted flex items-center justify-center">
                    {loadingStates[image.id] ? (
                       <Loader2 className="h-8 w-8 animate-spin" />
                    ) : generatedImages[image.id] ? (
                        <Image
                            src={generatedImages[image.id]}
                            alt={`Generated image for ${image.hint}`}
                            width={200}
                            height={100}
                            className="rounded-md object-cover aspect-video"
                        />
                    ) : (
                         <div className="text-xs text-muted-foreground">Click generate</div>
                    )}
                    </div>
                </div>
            </div>
            {generatedImages[image.id] && (
                 <div>
                    <p className="text-sm font-semibold mb-1">Generated Data URI:</p>
                    <Textarea 
                        readOnly
                        value={generatedImages[image.id]}
                        className="text-xs h-24"
                    />
                 </div>
            )}
          </CardContent>
          <CardFooter>
            <Button 
                onClick={() => handleGenerateImage(image.id, image.hint)} 
                disabled={loadingStates[image.id]}
                className="w-full"
            >
              {loadingStates[image.id] ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Generate
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
